'use client';
import { Image as TemplateImage } from '@prisma/client';
import Slider from 'react-slick';

// Import Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageCarousel = ({ images }: { images: TemplateImage[] }) => {
  // React Slick Settings
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
          <img
            key={image.id}
            src={image.url}
            alt={`Product Image ${image.id}`}
            className='rounded-lg w-full object-fill'
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;