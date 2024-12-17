'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface CheckoutData {
  productId: string | null;
  quantity: number;
  metaData: string[];
  paymentMode: 'subscription' | 'payment' | null;
}

export const useCheckout = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    productId: null,
    quantity: 1,
    metaData: [],
    paymentMode: null,
  });

  const [isLocalStorageLoading, setIsLocalStorageLoading] = useState(true); // Loading state

  // Function to get data from URL or localStorage
  const getData = (): CheckoutData => {
    const productId =
      searchParams.get('productId') || localStorage.getItem('productId');
    const quantity =
      parseInt(
        searchParams.get('quantity') || localStorage.getItem('quantity') || '1',
        10,
      ) || 1;
    const metaDataRaw =
      searchParams.get('metaData') || localStorage.getItem('metaData') || '';
    const paymentMode = (searchParams.get('paymentMode') ||
      localStorage.getItem('paymentMode')) as 'subscription' | 'payment' | null;

    return {
      productId,
      quantity,
      metaData: metaDataRaw.split(',').filter((item) => item.trim() !== ''),
      paymentMode,
    };
  };

  // Sync data to localStorage and URL
  const syncData = (data: CheckoutData) => {
    const { productId, quantity, metaData, paymentMode } = data;

    // Update localStorage
    if (productId) localStorage.setItem('productId', productId);
    if (quantity) localStorage.setItem('quantity', quantity.toString());
    if (metaData.length > 0)
      localStorage.setItem('metaData', metaData.join(','));
    if (paymentMode) localStorage.setItem('paymentMode', paymentMode);

    // Update URL
    const params = new URLSearchParams();
    if (productId) params.set('productId', productId);
    params.set('quantity', quantity.toString());
    if (metaData.length > 0) params.set('metaData', metaData.join(','));
    if (paymentMode) params.set('paymentMode', paymentMode);

    router.replace(`?${params.toString()}`);
  };

  useEffect(() => {
    setIsLocalStorageLoading(true); // Start loading
    const data = getData();

    if (!data.productId) {
      setIsLocalStorageLoading(false);
      return;
    }

    setCheckoutData(data);
    syncData(data); // Ensure URL and localStorage are in sync on load
    setIsLocalStorageLoading(false); // Loading complete
  }, []);

  const updateCheckoutData = (updates: Partial<CheckoutData>) => {
    setCheckoutData((prev) => {
      const newData = { ...prev, ...updates };
      syncData(newData);
      return newData;
    });
  };

  return {
    checkoutData,
    updateCheckoutData,
    isLocalStorageLoading,
  };
};
