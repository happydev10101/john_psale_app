'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MyCard from '@/components/custom/MyCard';
import type { SaleOrder } from '@/components/main/ShopPage';

interface PayPageProps {
  order: SaleOrder;
  onBack: () => void;
}

export default function PayPage({ order, onBack }: PayPageProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(order.asset.distributor);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <MainLayout title="Payment">
      <div className="space-y-4">
        <MyCard glow="success">
          <div className="space-y-5 text-gray-100">
            <div>
              <p className="text-sm font-normal text-gray-300">Send exactly</p>
              <p className="mt-1 text-3xl text-success">{order.xlmAmount.toFixed(7)} XLM</p>
              <p className="mt-2 text-sm font-normal text-gray-400">
                To receive {order.assetAmount.toLocaleString()} {order.asset.code}
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-normal text-gray-300">Deposit wallet address</p>
              <div className="rounded-lg border border-gray-700 bg-black/40 p-3">
                <p className="break-all font-mono text-sm font-normal leading-6 text-white">
                  {order.asset.distributor}
                </p>
              </div>
              <button type="button" onClick={copyAddress} className="btn btn-outline btn-info mt-3 w-full">
                {copied ? 'Address copied' : 'Copy address'}
              </button>
            </div>
          </div>
        </MyCard>

        <MyCard>
          <div className="space-y-3 text-sm font-normal leading-6 text-gray-300">
            <p>
              Please send XLM here to get our asset. After you send XLM, our asset
              will arrive shortly in the wallet that sent the XLM.
            </p>
            <div className="rounded-lg border border-warning/60 bg-warning/10 p-3 text-warning">
              <strong>Warning:</strong> Your wallet must already have a trustline
              for {order.asset.code}.
            </div>
          </div>
        </MyCard>

        <button type="button" onClick={onBack} className="btn btn-outline w-full">
          Back
        </button>
      </div>
    </MainLayout>
  );
}
