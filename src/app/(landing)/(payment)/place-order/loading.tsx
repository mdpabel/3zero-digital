import ComponentWrapper from '@/components/common/component-wrapper';

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

const CheckoutSkeleton = () => (
  <ComponentWrapper className='py-10'>
    <div className='gap-10 grid grid-cols-1 md:grid-cols-5'>
      {/* Form Skeleton */}
      <div className='space-y-6 col-span-3'>
        <div className='space-y-4 pb-8 border-b'>
          <Skeleton className='w-1/2 h-8' />
          <Skeleton className='w-2/3 h-5' />
          <div className='flex md:flex-row flex-col gap-4'>
            <Skeleton className='w-full h-10' />
            <Skeleton className='w-full h-10' />
          </div>
          <Skeleton className='w-full h-10' />
        </div>
        <div className='space-y-4'>
          <Skeleton className='w-1/3 h-6' />
          <Skeleton className='w-full h-20' />
          <Skeleton className='w-1/3 h-6' />
          <Skeleton className='w-full h-20' />
        </div>
        <Skeleton className='w-full h-12' />
      </div>

      {/* Order Summary Skeleton */}
      <div className='space-y-6 col-span-2'>
        <div className='space-y-4 p-6 border rounded-lg'>
          <Skeleton className='w-1/2 h-8' />
          <Skeleton className='w-1/3 h-6' />
          <Skeleton className='w-2/3 h-6' />
          <Skeleton className='w-1/4 h-6' />
          <Skeleton className='w-1/2 h-6' />
          <div className='flex justify-between items-center pt-4 border-t'>
            <Skeleton className='w-1/4 h-6' />
            <Skeleton className='w-1/4 h-6' />
          </div>
        </div>
      </div>
    </div>
  </ComponentWrapper>
);

export default CheckoutSkeleton;
