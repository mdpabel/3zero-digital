import {
  FaLifeRing,
  FaListAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUser,
} from 'react-icons/fa';

export const dashboardSidebarItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <FaTachometerAlt />,
    roles: ['admin', 'customer'],
  },
  {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: <FaListAlt />,
    roles: ['customer'],
  },
  {
    label: 'Support',
    href: '/dashboard/support',
    icon: <FaLifeRing />,
    roles: ['admin', 'customer', 'support'],
  },
  {
    label: 'Profile',
    href: '/dashboard/profile',
    icon: <FaUser />,
    roles: ['admin', 'customer'],
  },
];
