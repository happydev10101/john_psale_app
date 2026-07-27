'use client';

import React, { ReactNode, useState } from 'react';
import PayPage from '@/components/main/PayPage';
import ShopPage from '@/components/main/ShopPage';
import WelcomePage from '@/components/main/WelcomePage';
import type { SaleOrder } from '@/components/main/ShopPage';

type View = 'welcome' | 'shop' | 'pay';

function ClickerPage() {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [order, setOrder] = useState<SaleOrder | null>(null);

  if (currentView === 'shop') {
    return (
      <ShopPage
        initialOrder={order}
        onBack={() => setCurrentView('welcome')}
        onNext={(nextOrder) => {
          setOrder(nextOrder);
          setCurrentView('pay');
        }}
      />
    );
  }

  if (currentView === 'pay' && order) {
    return (
      <PayPage
        order={order}
        onBack={() => setCurrentView('shop')}
      />
    );
  }

  return <WelcomePage onNext={() => setCurrentView('shop')} />;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center px-6 text-center text-white">
          Something went wrong. Please reopen the app and try again.
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ClickerPageWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <ClickerPage />
    </ErrorBoundary>
  );
}
