import { useState, useTransition } from 'react';
import swell from '@/lib/swell/swell-client';
import { useRouter } from 'next/navigation';

interface UsePricingProps {
  productId: string;
  price: number;
  origPrice: number;
}

export const usePricing = ({
  productId,
  price,
  origPrice,
}: UsePricingProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const totalPrice = price * quantity;
  const totalOriginalPrice = origPrice * quantity;

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const setTotalQuantity = (totalQuantity: number) => {
    setQuantity(totalQuantity);
  };

  const handleCheckout = (metadata: any) => {
    startTransition(async () => {
      try {
        await swell.cart.setItems([]); // Clear the cart
        const addItemRes = await swell.cart.addItem({
          productId,
          quantity,
          metadata,
        }); // Add the new item

        // Check if checkoutUrl exists
        if ('checkoutUrl' in addItemRes) {
          const checkoutUrl = addItemRes.checkoutUrl;
          if (checkoutUrl) {
            router.push(checkoutUrl);
          }
        }
      } catch (error) {
        console.error('Error during checkout:', error);
      }
    });
  };

  return {
    quantity,
    totalPrice,
    totalOriginalPrice,
    isPending,
    handleIncrease,
    handleDecrease,
    handleCheckout,
    setTotalQuantity,
  };
};
