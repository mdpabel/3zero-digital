import Link from 'next/link';

const services = [
  {
    name: 'Website Maintenance',
    price: '$49/month',
    detailsLink: '/services/website-maintenance',
    checkoutLink: '/checkout/website-maintenance',
    type: 'direct',
  },
  {
    name: 'Web Development',
    price: 'Request a quote',
    detailsLink: '/services/web-development',
    checkoutLink: '/contact?service=web-development',
    type: 'quote',
  },
  // Add more services as needed
];

const Services2 = () => {
  return (
    <div className='py-12 px-4 md:px-20 bg-white dark:bg-[#030712]'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-zinc-800 dark:text-zinc-200'>
          Our Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-[#614385] to-[#516395] p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105'>
              {/* First Column: Service Name & Price */}
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{service.name}</h3>
                  <p className='text-lg'>
                    {service.price === 'Request a quote' ? (
                      <span className='italic'>{service.price}</span>
                    ) : (
                      service.price
                    )}
                  </p>
                </div>
              </div>

              {/* Second Column: Buttons */}
              <div className='flex justify-between mt-6 space-x-4'>
                {/* Checkout Button */}
                <Link
                  href={service.checkoutLink}
                  className={`px-4 py-2 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#4b4f8b] hover:to-[#434d7e] transition-all ${
                    service.type === 'quote'
                      ? 'bg-opacity-50 cursor-not-allowed'
                      : ''
                  }`}>
                  {service.type === 'quote' ? 'Request Quote' : 'Checkout'}
                </Link>

                {/* Details Button */}
                <Link
                  href={service.detailsLink}
                  className='px-4 py-2 border border-white rounded-lg font-semibold text-white hover:bg-white hover:text-[#614385] transition-all'>
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
