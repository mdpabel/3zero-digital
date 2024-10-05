import Sidebar from '@/components/layout/dashboard/sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <Sidebar type='admin' />
      <main className='flex-1 lg:ml-64 p-6 overflow-x-hidden'>
        {children}
        <ToastContainer />
      </main>
    </div>
  );
}
