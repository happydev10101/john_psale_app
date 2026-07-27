'use client';

import { FormEvent, useMemo, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MyCard from '@/components/custom/MyCard';

export interface SaleAsset {
  code: string;
  issuer: string;
  distributor: string;
}

export interface SaleOrder {
  asset: SaleAsset;
  assetAmount: number;
  xlmAmount: number;
}

export const SALE_ASSETS: SaleAsset[] = [
  {
    code: 'DTCCPROTOCOL',
    issuer: 'GB5SDXTYWRHILZA75HHG34OLHOFZSUFD2TVL45ZHFREZCPCTAGRTDTCC',
    distributor: process.env.NEXT_PUBLIC_DISTRIBUTOR1 || '',
  },
  {
    code: 'XLMDEFI',
    issuer: 'GCWO6NHPJHYTDK22J4Z5ZC6Q35T6D5OR37MAI34DXLYRHANYPI6P5XLM',
    distributor: process.env.NEXT_PUBLIC_DISTRIBUTOR2 || '',
  },
  {
    code: 'XRPRESERVE',
    issuer: 'GALRBTUPQBJA3NAUXJIV3Z7XLASBMA5TT42RO4VHQWZKLOTZEWBAGXRP',
    distributor: process.env.NEXT_PUBLIC_DISTRIBUTOR3 || '',
  },
  {
    code: 'XRPBANK',
    issuer: 'GDE4JULORNSGJNBBCYYPI7TPT7P5TJIEEVPLX4DQSRAKPNVVOLNY5XRP',
    distributor: process.env.NEXT_PUBLIC_DISTRIBUTOR4 || '',
  },
  {
    code: 'XLMBANK',
    issuer: 'GBEWV2DIGJYM27FAWY2OFMONVYGZHSI2M5B7KJXMQ7JHT6JHGBOQZQFS',
    distributor: process.env.NEXT_PUBLIC_DISTRIBUTOR5 || '',
  },
];

const parsedAssetPrice = Number(process.env.NEXT_PUBLIC_ASSETS_PRICE);
const XLM_PER_ASSET = Number.isFinite(parsedAssetPrice) && parsedAssetPrice > 0
  ? parsedAssetPrice
  : 0.5;

interface ShopPageProps {
  initialOrder?: SaleOrder | null;
  onBack: () => void;
  onNext: (order: SaleOrder) => void;
}

export default function ShopPage({ initialOrder, onBack, onNext }: ShopPageProps) {
  const [assetCode, setAssetCode] = useState(
    initialOrder?.asset.code ?? SALE_ASSETS[0].code,
  );
  const [amount, setAmount] = useState(
    initialOrder?.assetAmount.toString() ?? '1',
  );
  const [error, setError] = useState('');

  const selectedAsset = useMemo(
    () => SALE_ASSETS.find((asset) => asset.code === assetCode) ?? SALE_ASSETS[0],
    [assetCode],
  );

  const numericAmount = Number(amount);
  const xlmAmount = Number.isFinite(numericAmount) && numericAmount > 0
    ? numericAmount * XLM_PER_ASSET
    : 0;

  const continueToPayment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Enter an amount greater than zero.');
      return;
    }

    setError('');
    onNext({
      asset: selectedAsset,
      assetAmount: numericAmount,
      xlmAmount,
    });
  };

  return (
    <MainLayout title="Shop">
      <MyCard>
        <form className="space-y-5 text-gray-100" onSubmit={continueToPayment}>
          <div>
            <label className="mb-2 block text-sm text-gray-200" htmlFor="sale-asset">
              Select asset
            </label>
            <select
              id="sale-asset"
              value={assetCode}
              onChange={(event) => setAssetCode(event.target.value)}
              className="select select-bordered w-full bg-black/40 text-white"
            >
              {SALE_ASSETS.map((asset) => (
                <option key={asset.code} value={asset.code}>
                  {asset.code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-200" htmlFor="asset-amount">
              Amount to buy
            </label>
            <input
              id="asset-amount"
              type="number"
              min="0.0000001"
              step="0.0000001"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="input input-bordered w-full bg-black/40 text-white"
            />
          </div>

          <div className="rounded-lg border border-info/40 bg-black/30 p-4">
            <p className="text-xs font-normal uppercase tracking-wider text-gray-400">
              Private-sale rate
            </p>
            <p className="mt-1 text-sm">
              1 {selectedAsset.code} = {XLM_PER_ASSET} XLM
            </p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <span className="text-sm font-normal text-gray-300">Total to pay</span>
              <span className="text-2xl text-info">{xlmAmount.toFixed(7)} XLM</span>
            </div>
          </div>

          {error && <p className="text-sm font-normal text-error">{error}</p>}

          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={onBack} className="btn btn-outline">
              Back
            </button>
            <button type="submit" className="btn btn-info">
              Next
            </button>
          </div>
        </form>
      </MyCard>
    </MainLayout>
  );
}
