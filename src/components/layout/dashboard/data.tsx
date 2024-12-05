import {
  FaLifeRing,
  FaListAlt,
  FaTachometerAlt,
  FaUser,
  FaBox,
  FaChartBar,
  FaUsers,
  FaPlus,
  FaThList,
  FaTrash,
  FaCogs,
} from 'react-icons/fa';

export const customerDashboardSidebarItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <FaTachometerAlt />,
    roles: ['customer'],
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
    roles: ['customer'],
  },
  {
    label: 'Profile',
    href: '/dashboard/profile',
    icon: <FaUser />,
    roles: ['customer'],
  },
  {
    label: 'Admin',
    href: '/admin',
    icon: <FaCogs />,
    roles: ['customer', 'admin'],
  },
];

export const adminDashboardSidebarItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <FaTachometerAlt />,
    roles: ['admin'],
  },
  {
    label: 'Products',
    href: '#',
    icon: <FaBox />,
    roles: ['admin'],
    subItems: [
      {
        label: 'All Products',
        href: '/admin/products',
        icon: <FaThList />,
      },
      {
        label: 'Add Product',
        href: '/admin/products/add',
        icon: <FaPlus />,
      },
      {
        label: 'Trash Products',
        href: '/admin/products/trash',
        icon: <FaTrash />,
      },
      {
        label: 'Category',
        href: '/admin/products/category',
        icon: <FaThList />,
      },
    ],
  },
  {
    label: 'Templates',
    icon: <FaBox />,
    href: '#',
    roles: ['admin'],
    subItems: [
      {
        label: 'All Templates',
        href: '/admin/templates',
        icon: <FaThList />,
      },
      {
        label: 'Add Product',
        href: '/admin/templates/add',
        icon: <FaPlus />,
      },
      {
        label: 'Trash Templates',
        href: '/admin/templates/trash',
        icon: <FaTrash />,
      },
      {
        label: 'Category',
        href: '/admin/templates/category',
        icon: <FaThList />,
      },
    ],
  },
  {
    label: 'Orders',
    icon: <FaListAlt />,
    href: '#',
    roles: ['admin'],
    subItems: [
      {
        label: 'All Orders',
        href: '/admin/orders',
        icon: <FaThList />,
      },
      {
        label: 'Create Orders',
        href: '/admin/orders/create',
        icon: <FaPlus />,
      },
    ],
  },
  {
    label: 'Users',
    href: '/admin/users',
    icon: <FaUsers />,
    roles: ['admin'],
  },
  {
    label: 'Analytics',
    href: '/admin/analytics',
    icon: <FaChartBar />,
    roles: ['admin'],
  },
  {
    label: 'Support',
    href: '/admin/support',
    icon: <FaLifeRing />,
    roles: ['admin', 'support'],
  },
  {
    label: 'Profile',
    href: '/admin/profile',
    icon: <FaUser />,
    roles: ['admin'],
  },
];

export type SidebarItem = {
  label: string;
  href: string;
  icon: JSX.Element;
  roles: string[]; // Roles that can access the item
  subItems?: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
};
