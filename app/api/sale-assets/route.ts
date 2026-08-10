import { NextResponse } from 'next/server';
import type { SaleAsset } from '@/utils/consts';

const REQUIRED_COLUMNS = ['code', 'issuer', 'distributor_address'] as const;

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

function parseAssets(csv: string): SaleAsset[] {
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
  const seenCodes = new Set<string>();

  const assets: SaleAsset[] = [];

  for (const row of dataRows) {
    const code = row[codeIndex]?.trim().toUpperCase() || '';
    const issuer = row[issuerIndex]?.trim() || '';
    const distributor = row[distributorIndex]?.trim() || '';

    if (!code || !issuer || !distributor) {
      continue;
    }

    if (seenCodes.has(code)) {
      throw new Error(`Duplicate asset code: ${code}.`);
    }

    seenCodes.add(code);
    assets.push({ code, issuer, distributor });
  }

  return assets;
}

export async function GET() {
  const csvUrl = process.env.ASSETS_CSV_URL;

  if (!csvUrl) {
    return NextResponse.json(
      { error: 'ASSETS_CSV_URL is not configured.' },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error(`Asset CSV request failed with status ${response.status}.`);
    }

    const assets = parseAssets(await response.text());

    return NextResponse.json(
      { assets },
      { headers: { 'Cache-Control': 'public, s-maxage=120' } },
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
