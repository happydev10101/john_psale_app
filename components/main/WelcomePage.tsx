'use client';

import { FormEvent, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MyCard from '@/components/custom/MyCard';

interface WelcomePageProps {
  onNext: () => void;
}

export default function WelcomePage({ onNext }: WelcomePageProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const authenticate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!code.trim()) {
      setError('Please enter your access code.');
      return;
    }

    setIsChecking(true);

    try {
      const response = await fetch('/api/access-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setError(result?.error || 'Invalid access code.');
        return;
      }

      onNext();
    } catch {
      setError('Unable to verify the code. Please try again.');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <MainLayout title="Private Sale">
      <div className="pt-8">
        <MyCard glow="info">
          <div className="space-y-6 text-gray-100">
            <div>
              <h1 className="text-2xl font-semibold text-white">Welcome</h1>
              <p className="mt-3 text-sm font-normal leading-6 text-gray-300">
                Enter your unique access code to unlock the private-sale price.
              </p>
            </div>

            <form className="space-y-4" onSubmit={authenticate}>
              <label className="block">
                <span className="mb-2 block text-sm text-gray-200">Access code</span>
                <input
                  type="password"
                  autoComplete="one-time-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Enter your code"
                  className="input input-bordered w-full bg-black/40 text-white"
                />
              </label>

              {error && (
                <p className="text-sm font-normal text-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isChecking}
                className="btn btn-info w-full"
              >
                {isChecking ? 'Checking…' : 'Next'}
              </button>
            </form>
          </div>
        </MyCard>
      </div>
    </MainLayout>
  );
}
