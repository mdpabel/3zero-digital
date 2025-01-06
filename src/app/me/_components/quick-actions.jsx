import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaShoppingCart, FaHeadset, FaUser } from 'react-icons/fa'; // Example icons

const links = [
  {
    href: '/dashboard/orders',
    label: 'Orders',
    icon: <FaShoppingCart />,
    description: 'Manage your orders and track their status',
  },
  {
    href: '/dashboard/support',
    label: 'Support',
    icon: <FaHeadset />,
    description: 'Get help and support for any issues',
  },
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: <FaUser />,
    description: 'View and update your profile information',
  },
];

const QuickActions = () => {
  return (
    <div className='bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg'>
      <h3 className='mb-4 font-semibold text-gray-800 text-lg dark:text-white'>
        Quick Actions
      </h3>
      <ul className='flex flex-wrap gap-8'>
        {links.map((link, index) => (
          <li key={index} className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <div className='text-blue-600 text-xl dark:text-blue-400'>
                {link.icon}
              </div>
              <div>
                <Button asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
                <p className='text-sm dark:text-gray-300'>{link.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickActions;
