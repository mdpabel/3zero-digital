import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Title from '../common/title';
import { Button } from '../ui/button';
import { FaRegFileAlt, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import IconRenderer from '../comment/icon-render';
import { ServiceWithProducts } from '@/lib/product/get-product';
import dynamic from 'next/dynamic';
import { Active } from './services';
const PlaceOrder = dynamic(() => import('./place-order'));
import freeStamp from '@/../public/images/freeStamp.png';
import Image from 'next/image';

const ServicesClient = ({
  services,
  active,
}: {
  services: ServiceWithProducts[];
  active?: Active;
}) => {
  return (
    <div id='getStarted' className='mx-auto px-4 py-10 sm:py-16 max-w-6xl'>
      <Title
        title='Explore Our Services'
        subTitle='Discover how we can help you grow and optimize your online presence.'
      />

      <Tabs defaultValue={active}>
        <TabsList className='flex flex-wrap justify-center gap-2 sm:space-x-4 bg-transparent mb-6'>
          {services.map((service) => {
            return (
              <TabsTrigger
                key={service.id}
                value={service.name}
                className='flex items-center space-x-2 hover:bg-indigo-500 p-2 sm:p-4 rounded-md text-white transition-colors primary-color'>
                <IconRenderer iconName={service.icon!} />
                <span>{service.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {services.map((service) => {
          return (
            <TabsContent
              className='opacity-0 data-[state=active]:opacity-100 p-4 pt-10 transition-opacity transition-transform translate-y-4 data-[state=active]:translate-y-0 duration-500'
              key={service.id}
              value={service.name}>
              <div>
                <h2 className='mb-4 sm:mb-6 font-bold text-gray-800 dark:text-gray-200 text-lg sm:text-2xl'>
                  {service.description}
                </h2>
                <ul className='space-y-4 sm:space-y-6'>
                  {service.products.map((product, i) => {
                    return (
                      <li
                        key={i}
                        className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4 !mb-12 md:!mb-0'>
                        <div className='flex items-center space-x-4'>
                          <span className='text-indigo-500 text-xl sm:text-2xl'>
                            <IconRenderer iconName={product.icon!} />
                          </span>
                          <div className='relative'>
                            <h3 className='flex items-center font-semibold text-gray-800 text-md dark:text-gray-200 sm:text-lg'>
                              {product.name}:
                              {product.price > 0 ? (
                                <span className='flex items-center bg-white ml-2 px-1 rounded-sm text-[#604485]'>
                                  <FaTag className='mr-1' />${product.price}
                                </span>
                              ) : null}
                            </h3>
                            <p className=''>{product.description}</p>
                          </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-4'>
                          {product.name !== 'Development' &&
                            product.price > 0 && (
                              <PlaceOrder productId={product.id} />
                            )}
                          <Button asChild>
                            <Link href={product.slug}>
                              <FaRegFileAlt className='mr-2' />
                              Explore Service
                            </Link>
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ServicesClient;
