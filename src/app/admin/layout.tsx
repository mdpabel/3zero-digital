import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/layout/dashboard/sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar type='admin' />
      <SidebarInset className='md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none'>
        <SidebarTrigger />
        <div className='flex flex-col justify-between min-h-[100dvh]'>
          <main className='p-4'>{children}</main>
          <footer className='py-10 text-center'>
            © 2024 3Zero Digital. All rights reserved.
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
