import React from 'react';
import { dashboardSidebarItems } from './data';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';

const BigScreenSidebar = () => {
  const userRole = 'customer';

  return (
    <aside className='top-0 left-0 fixed lg:flex flex-col justify-between hidden bg-gradient-to-br from-[#614385] to-[#516395] w-64 h-screen text-white sidebar'>
      <div className='p-4'>
        <Link href='/' className='block mb-6 px-4'>
          LOGO
        </Link>

        <nav className='flex-1 space-y-4'>
          {dashboardSidebarItems
            .filter((item) => item.roles.includes(userRole))
            .map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className='flex items-center hover:bg-white px-4 py-2 rounded-lg text-white hover:text-[#614385] transition'>
                  {item.icon && <span className='mr-3'>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className='p-4'>
        <button className='flex items-center hover:bg-white px-4 py-2 rounded-lg w-full text-white hover:text-[#614385] transition'>
          <span className='mr-3'>
            <FaSignOutAlt />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default BigScreenSidebar;
