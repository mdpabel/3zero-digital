import React from 'react';

const WebsiteDevelopment = () => {
  return (
    <div className='relative border-slate-700 border rounded-lg select-none'>
      <div className='flex flex-row'>
        <div className='bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full h-[1px]'></div>
        <div className='bg-gradient-to-r from-violet-600 to-transparent w-full h-[1px]'></div>
      </div>
      <div className='px-8 py-5'>
        <div className='flex flex-row space-x-2'>
          <div className='bg-red-400 rounded-full w-3 h-3'></div>
          <div className='bg-orange-400 rounded-full w-3 h-3'></div>
          <div className='bg-green-200 rounded-full w-3 h-3'></div>
        </div>
      </div>
      <div className='border-slate-800 px-8 py-8 border-t-[2px] overflow-hidden'>
        <code className='font-mono'>
          <div className='blink'>
            <span className='mr-2 text-pink-500'>const</span>
            <span className='mr-2 text-white'>websiteDevelopment</span>
            <span className='mr-2 text-pink-500'>=</span>
            <span className='text-gray-400'>{'{'}</span>
          </div>
          <div>
            <span className='mr-2 ml-8 text-white'>frontend:</span>
            <span className='text-amber-300'>
              ['React, Next.js, WordPress, Shopify']
            </span>
            ,
          </div>
          <div>
            <span className='mr-2 ml-8 text-white'>backend:</span>
            <span className='text-amber-300'>['Node.js, MongoDB, MySQL']</span>,
          </div>
          <div>
            <span className='mr-2 ml-8 text-white'>features:</span>
            <span className='text-gray-400'>[</span>
            <span className='text-amber-300'>'Responsive Design'</span>
            <span className='text-gray-400'>, </span>
            <span className='text-amber-300'>'SEO Optimized'</span>
            <span className='text-gray-400'>, </span>
            <span className='text-amber-300'>
              'Cross-Browser Compatibility'
            </span>
            <span className='text-gray-400'>],</span>
          </div>
          <div>
            <span className='mr-2 ml-8 text-white'>tools:</span>
            <span className='text-gray-400'>[</span>
            <span className='text-amber-300'>'VS Code'</span>
            <span className='text-gray-400'>, </span>
            <span className='text-amber-300'>'Git'</span>
            <span className='text-gray-400'>, </span>
            <span className='text-amber-300'>'Figma'</span>
            <span className='text-gray-400'>],</span>
          </div>
          <div>
            <span className='mr-2 ml-8 text-white'>developmentProcess:</span>
            <span className='text-gray-400'>{'{'}</span>
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>planning</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>'Understanding client needs'</span>
            ,
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>design</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>'Wireframes and UI mockups'</span>,
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>development</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>
              'Frontend & Backend Development'
            </span>
            ,
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>testing</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>'Bug Fixing & QA'</span>,
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>deployment</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>'Website Deployment'</span>,
          </div>
          <div>
            <span className='mr-2 ml-16 text-orange-400'>maintenance</span>
            <span className='text-gray-400'>: </span>
            <span className='text-amber-300'>'Ongoing Support & Updates'</span>
          </div>
          <div>
            <span className='mr-2 ml-16 text-gray-400'>{'}'}</span>
          </div>
          <div>
            <span className='mr-2 ml-8 text-gray-400'>{'}'}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
