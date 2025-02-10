import React from 'react';

const WebsiteSecurity = () => {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
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
              <span className='mr-2 text-white'>websiteSecurity</span>
              <span className='mr-2 text-pink-500'>=</span>
              <span className='text-gray-400'>{'{'}</span>
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>sslEncryption:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>firewallProtection:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>twoFactorAuth:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>securePasswords:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>regularUpdates:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>dataBackup:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>
                vulnerabilityScanning:
              </span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>dDosProtection:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>secureHosting:</span>
              <span className='text-amber-300'>true</span>,
            </div>
            <div>
              <span className='mr-2 ml-8 text-white'>regularMonitoring:</span>
              <span className='text-amber-300'>true</span>
            </div>
            <div>
              <span className='mr-2 ml-16 text-gray-400'>
                // Secure website practices ensure safety and reliability
              </span>
            </div>
            <div>
              <span className='mr-2 ml-8 text-gray-400'>{'}'}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSecurity;
