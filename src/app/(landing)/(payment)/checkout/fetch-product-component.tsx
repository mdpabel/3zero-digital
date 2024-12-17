'use client';
import React, { useEffect, useState } from 'react';
import Checkout from './checkout';
import { useSearchParams } from 'next/navigation';
import { Price, Product } from '@prisma/client';
import { useCheckout } from './use-checkout';

// Extended Product type to include all required fields
type ExtendedProduct = Product & {
  prices: Price[];
};

const FetchProductComponent = () => {
  const { isLocalStorageLoading } = useCheckout();
  const searchParams = useSearchParams();

  const productId = searchParams.get('productId');
  const quantityParam = searchParams.get('quantity') || '1';
  const metaDataParam = searchParams.get('metaData') || '';

  const [product, setProduct] = useState<ExtendedProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [quantity, setQuantity] = useState<number>(1);
  const [metaData, setMetaData] = useState<string[]>([]);

  useEffect(() => {
    if (!productId) {
      // Prevent fetch until productId exists
      setError('Missing product information. Please try again.');
      setLoading(false);
      return;
    }

    // Reset state before fetching new product
    setError(null);
    setLoading(true);

    // Parse search params
    const parsedQuantity = Math.max(parseInt(quantityParam, 10), 1);
    const parsedMetaData = metaDataParam
      ? metaDataParam.split(',').map((item) => item.trim())
      : [];

    setQuantity(parsedQuantity);
    setMetaData(parsedMetaData);

    // Fetch product data from API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product data.');

        const data: { product: ExtendedProduct } = await response.json();

        // Validate required fields
        if (!data.product || !data.product.id || !data.product.prices) {
          throw new Error('Invalid product data.');
        }

        setProduct(data.product);
      } catch (err) {
        setError('Product not found. Please check the product ID.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [searchParams, isLocalStorageLoading]);

  if (!productId) {
    return (
      <div className='mt-10 text-center text-red-500'>
        <p>Missing product information. Please try again.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='mt-10 text-center'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='mt-10 text-center text-red-500'>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='mt-10 text-center text-red-500'>
        <p>Product not found. Please try again.</p>
      </div>
    );
  }

  return (
    <div key={productId} className='mx-auto p-6 max-w-7xl'>
      <Checkout product={product} quantity={quantity} metaData={metaData} />
    </div>
  );
};

export default FetchProductComponent;
