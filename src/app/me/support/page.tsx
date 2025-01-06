'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Support = () => {
  const { data: session } = useSession();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    const fetchHash = async () => {
      if (session?.user?.email) {
        try {
          const res = await fetch('/api/gen-hash', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: session.user.email }),
          });

          const data = await res.json();
          if (data.hash) {
            setHash(data.hash);
          } else {
            console.error('Failed to generate hash:', data.error);
          }
        } catch (error) {
          console.error('Error fetching hash:', error);
        }
      }
    };

    fetchHash();
  }, [session]);

  useEffect(() => {
    if (!hash) return;

    // Set up the Tawk API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    window.Tawk_API.embedded = 'tawk_66eac2884cbc4814f7da18fb'; // Match the container div ID

    // Add the Tawk.to script dynamically
    const tawkScript = document.createElement('script');
    tawkScript.src = 'https://embed.tawk.to/66eac2884cbc4814f7da18fb/1ifckbmp3';
    tawkScript.async = true;
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    // Set user attributes and open the chatbox once Tawk.to is loaded
    tawkScript.onload = () => {
      if (window.Tawk_API && session?.user) {
        const { name, email } = session.user;

        window.Tawk_API.setAttributes(
          {
            name: name || 'Guest',
            email,
            hash, // Pass the generated hash
          },
          function (error: any) {
            if (error) {
              console.error('Error setting Tawk.to attributes:', error);
            }
          },
        );

        // Always open the chatbox
        window.Tawk_API.maximize();
      }
    };

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(tawkScript);
    };
  }, [session, hash]);

  return (
    <div className='md:px-10 py-5'>
      <div className='mx-auto max-w-6xl container'>
        <h1 className='font-bold text-3xl'>Chat with us</h1>
        <div
          id='tawk_66eac2884cbc4814f7da18fb'
          className='mx-auto max-w-3xl'
          style={{ width: '100%', height: '500px' }}></div>
      </div>
    </div>
  );
};

export default Support;
