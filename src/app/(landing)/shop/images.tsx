'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image as PrismaImage } from '@prisma/client';
import Image from 'next/image';

const CardImage = ({ images }: { images: PrismaImage[] }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='relative mb-4'>
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
    </div>
  );
};

export default CardImage;
