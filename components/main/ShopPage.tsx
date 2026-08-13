'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MyCard from '@/components/custom/MyCard';
import type { SaleAsset } from '@/utils/consts';

export type { SaleAsset } from '@/utils/consts';

export interface SaleOrder {
  asset: SaleAsset;
  assetAmount: number;
  xlmAmount: number;
}

interface ShopPageProps {
  initialOrder?: SaleOrder | null;
  onBack: () => void;
  onNext: (order: SaleOrder) => void;
}

export default function ShopPage({ initialOrder, onBack, onNext }: ShopPageProps) {
  const [assets, setAssets] = useState<SaleAsset[]>([]);
  const [assetCode, setAssetCode] = useState(initialOrder?.asset.code ?? '');
  const [amount, setAmount] = useState(
    initialOrder?.assetAmount.toString() ?? '1',
  );
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadAssets = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/sale-assets');
      const payload: unknown = await response.json();

      if (!response.ok || !payload || typeof payload !== 'object' || !Array.isArray((payload as { assets?: unknown }).assets)) {
        throw new Error('Unable to load sale assets.');
      }

      const loadedAssets = (payload as { assets: unknown[] }).assets.filter(
        (asset): asset is SaleAsset => (
          typeof asset === 'object' &&
          asset !== null &&
          typeof (asset as SaleAsset).code === 'string' &&
          typeof (asset as SaleAsset).issuer === 'string' &&
          typeof (asset as SaleAsset).distributor === 'string' &&
          typeof (asset as SaleAsset).priceInXlm === 'number' &&
          Number.isFinite((asset as SaleAsset).priceInXlm) &&
          (asset as SaleAsset).priceInXlm > 0
        ),
      );

      if (loadedAssets.length === 0) {
        throw new Error('No sale assets are available.');
      }

      setAssets(loadedAssets);
      setAssetCode((currentCode) => (
        loadedAssets.some((asset) => asset.code === currentCode)
          ? currentCode
          : loadedAssets[0].code
      ));
    } catch (loadError) {
      setAssets([]);
      setError(loadError instanceof Error ? loadError.message : 'Unable to load sale assets.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadAssets();
  }, [loadAssets]);

  const selectedAsset = useMemo(
    () => assets.find((asset) => asset.code === assetCode),
    [assets, assetCode],
  );

  const xlmPerAsset = selectedAsset?.priceInXlm ?? 0;
  const numericAmount = Number(amount);
  const xlmAmount = Number.isFinite(numericAmount) && numericAmount > 0
    ? numericAmount * xlmPerAsset
    : 0;

  const continueToPayment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedAsset) {
      setError('Select an available asset before continuing.');
      return;
    }

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

  if (isLoading) {
    return (
      <MainLayout title="Shop">
        <MyCard>
          <p className="text-center text-sm font-normal text-gray-300">Loading sale assets…</p>
        </MyCard>
      </MainLayout>
    );
  }

  if (!selectedAsset) {
    return (
      <MainLayout title="Shop">
        <MyCard>
          <div className="space-y-4 text-center">
            <p className="text-sm font-normal text-error">{error || 'No sale assets are available.'}</p>
            <button type="button" onClick={() => void loadAssets()} className="btn btn-info w-full">
              Try again
            </button>
            <button type="button" onClick={onBack} className="btn btn-outline w-full">
              Back
            </button>
          </div>
        </MyCard>
      </MainLayout>
    );
  }

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
              {assets.map((asset) => (
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
              1 {selectedAsset.code} = {xlmPerAsset} XLM
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
