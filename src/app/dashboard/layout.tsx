import Sidebar from '@/components/layout/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <Sidebar type='customer' />
      <main className='flex-1 lg:ml-64 p-6 overflow-x-hidden'>{children}</main>
    </div>
  );
}
