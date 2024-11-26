'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardImage = ({ images }: { images: string[] }) => {
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
        {images.map((image, imgIndex) => (
          <img
            key={imgIndex}
            src={image}
            alt={`Product Image ${imgIndex + 1}`}
            className='rounded-lg w-full h-40 object-cover'
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardImage;
