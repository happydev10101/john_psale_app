import { NextResponse } from 'next/server';
import type { SaleAsset } from '@/utils/consts';

const REQUIRED_COLUMNS = ['code', 'issuer', 'distributor_address'] as const;
const FALLBACK_ASSETS_PRICE = 0.5;

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = '';
  let isQuoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];
    const nextCharacter = csv[index + 1];

    if (character === '"') {
      if (isQuoted && nextCharacter === '"') {
        value += '"';
        index += 1;
      } else {
        isQuoted = !isQuoted;
      }
      continue;
    }

    if (!isQuoted && character === ',') {
      row.push(value.trim());
      value = '';
      continue;
    }

    if (!isQuoted && (character === '\n' || character === '\r')) {
      if (character === '\r' && nextCharacter === '\n') {
        index += 1;
      }
      row.push(value.trim());
      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      value = '';
      continue;
    }

    value += character;
  }

  row.push(value.trim());
  if (row.some((cell) => cell.length > 0)) {
    rows.push(row);
  }

  return rows;
}

function parseAssets(csv: string, defaultPriceInXlm: number): SaleAsset[] {
  const [header, ...dataRows] = parseCsv(csv);

  if (!header) {
    throw new Error('The CSV is empty.');
  }

  const columnIndexes = new Map(
    header.map((column, index) => [column.trim().toLowerCase(), index]),
  );

  const missingColumns = REQUIRED_COLUMNS.filter(
    (column) => !columnIndexes.has(column),
  );

  if (missingColumns.length > 0) {
    throw new Error(`Missing required CSV column(s): ${missingColumns.join(', ')}.`);
  }

  const codeIndex = columnIndexes.get('code')!;
  const issuerIndex = columnIndexes.get('issuer')!;
  const distributorIndex = columnIndexes.get('distributor_address')!;
  const priceIndex = columnIndexes.get('price_in_xlm');
  const seenCodes = new Set<string>();

  const assets: SaleAsset[] = [];

  for (const row of dataRows) {
    const code = row[codeIndex]?.trim().toUpperCase() || '';
    const issuer = row[issuerIndex]?.trim() || '';
    const distributor = row[distributorIndex]?.trim() || '';
    const priceValue = priceIndex === undefined ? '' : row[priceIndex]?.trim() || '';
    const parsedPriceInXlm = Number(priceValue);
    const priceInXlm = Number.isFinite(parsedPriceInXlm) && parsedPriceInXlm > 0
      ? parsedPriceInXlm
      : defaultPriceInXlm;

    if (
      !code ||
      !issuer ||
      !distributor ||
      /^s/i.test(issuer) ||
      /^s/i.test(distributor)
    ) {
      continue;
    }

    if (seenCodes.has(code)) {
      throw new Error(`Duplicate asset code: ${code}.`);
    }

    seenCodes.add(code);
    assets.push({
      code,
      issuer,
      distributor,
      priceInXlm,
    });
  }

  return assets;
}

export async function GET() {
  const csvUrl = process.env.ASSETS_CSV_URL;
  const configuredAssetsPrice = Number(process.env.ASSETS_PRICE);
  const defaultPriceInXlm = Number.isFinite(configuredAssetsPrice) && configuredAssetsPrice > 0
    ? configuredAssetsPrice
    : FALLBACK_ASSETS_PRICE;

  if (!csvUrl) {
    return NextResponse.json(
      { error: 'ASSETS_CSV_URL is not configured.' },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: 180 },
    });

    if (!response.ok) {
      throw new Error(`Asset CSV request failed with status ${response.status}.`);
    }

    const assets = parseAssets(await response.text(), defaultPriceInXlm);

    return NextResponse.json(
      { assets },
      { headers: { 'Cache-Control': 'public, s-maxage=180' } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to load sale assets.';
    console.error('Unable to load sale assets:', message);

    return NextResponse.json(
      { error: 'Unable to load sale assets.' },
      { status: 502 },
    );
  }
}
