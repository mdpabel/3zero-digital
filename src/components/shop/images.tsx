'use client';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'));
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image as PrismaImage } from '@prisma/client';
import Image from 'next/image';

const CardImage = ({ images }: { images: PrismaImage[] }) => {
  const sliderSettings = {
    dots: false,
    infinite: images.length > 1, // Disable infinite mode if there's only one image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: images.length > 1, // Disable autoplay if there's only one image
    autoplaySpeed: 3000,
  };

  return (
    <div className='relative mb-4'>
      {images.length > 1 ? (
        <Slider {...sliderSettings}>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={`Product Image ${image.id}`}
              className='rounded-lg w-full h-40 object-fill'
              width={200}
              height={200}
            />
          ))}
        </Slider>
      ) : (
        // Render a single image directly if only one image is available
        <Image
          key={images[0].id}
          src={images[0].url}
          alt={`Product Image ${images[0].id}`}
          className='rounded-lg w-full h-40 object-fill'
          width={200}
          height={200}
        />
      )}
    </div>
  );
};

export default CardImage;
