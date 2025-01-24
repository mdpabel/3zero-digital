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
    roles: ['CUSTOMER'],
  },
  {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: <FaListAlt />,
    roles: ['CUSTOMER'],
  },
  {
    label: 'Support',
    href: '/dashboard/support',
    icon: <FaLifeRing />,
    roles: ['CUSTOMER'],
  },
  // {
  //   label: 'Profile',
  //   href: '/dashboard/profile',
  //   icon: <FaUser />,
  //   roles: ['CUSTOMER'],
  // },
  {
    label: 'Admin',
    href: '/admin',
    icon: <FaCogs />,
    roles: ['ADMIN'],
  },
];

export const adminDashboardSidebarItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <FaTachometerAlt />,
    roles: ['ADMIN'],
  },
  {
    label: 'Products',
    href: '#',
    icon: <FaBox />,
    roles: ['ADMIN'],
    isOpen: true,
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
    label: 'Coupons',
    href: '#',
    icon: <FaBox />,
    roles: ['ADMIN'],
    isOpen: true,
    subItems: [
      {
        label: 'All Coupons',
        href: '/admin/coupons',
        icon: <FaThList />,
      },
      {
        label: 'Add Coupon',
        href: '/admin/coupons/add',
        icon: <FaPlus />,
      },
      {
        label: 'Trash Coupons',
        href: '/admin/coupons/trash',
        icon: <FaTrash />,
      },
    ],
  },
  {
    label: 'Templates',
    icon: <FaBox />,
    href: '#',
    roles: ['ADMIN'],
    subItems: [
      {
        label: 'All Templates',
        href: '/admin/templates',
        icon: <FaThList />,
      },
      {
        label: 'Add Templates',
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
    roles: ['ADMIN'],
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
    roles: ['ADMIN'],
  },
  {
    label: 'Analytics',
    href: '/admin/analytics',
    icon: <FaChartBar />,
    roles: ['ADMIN'],
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
    roles: ['ADMIN'],
  },
];

export type SidebarItem = {
  label: string;
  href: string;
  isOpen?: boolean;
  icon: JSX.Element;
  roles: string[]; // Roles that can access the item
  subItems?: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
};
