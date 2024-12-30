import { Suspense } from 'react';
import WelcomeMessage from './_components/welcome-message';
import WelcomeMessageSkeleton from './_components/welcome-message-skeleton';
import UnPaidOrders from './_components/unpaid-orders';
import UnPaidOrdersSkeleton from './_components/unpaid-orders-skeleton';
import OverView from './_components/overview';
import OverViewSkeleton from './_components/overview-skeleton';
import QuickActions from './_components/quick-actions';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  return (
    <div className='space-y-4'>
      <Suspense fallback={<WelcomeMessageSkeleton />}>
        <WelcomeMessage />
      </Suspense>

      <Suspense fallback={<OverViewSkeleton />}>
        <OverView />
      </Suspense>

      <div className='gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10'>
        <Suspense fallback={<UnPaidOrdersSkeleton />}>
          <UnPaidOrders />
        </Suspense>
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;
