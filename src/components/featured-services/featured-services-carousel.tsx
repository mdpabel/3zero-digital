'use client';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedService from './affordable-web-development';
import websitePrototype from '@/../public/images/website-prototype.png';
import websitePrototypeDark from '@/../public/images/website-prototype-dark.png';
import personalWebsite from '@/../public/images/personal-website.png';
import personalWebsiteLight from '@/../public/images/personal-website-light.png';
import personalWebsiteLiteLight from '@/../public/images/personal-website-lite-light.png';
import personalWebsiteLiteDark from '@/../public/images/personal-website-lite-dark.png';

type Props = {
  affordableWebDevelopmentId: string;
};

const FeaturedServicesCarousel = (props: Props) => {
  const numberOfServices = Object.keys(props).length;

  const settings: Settings = {
    dots: true,
    infinite: numberOfServices > 1, // Disable infinite mode if there's only one service
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: numberOfServices > 1, // Disable autoplay if there's only one service
    autoplaySpeed: 3000,
    dotsClass: '!flex gap-4 justify-center',
    customPaging: () => {
      return (
        <div className='bg-black dark:bg-white rounded-full w-[5px] h-[5px] cursor-pointer'></div>
      );
    },
  };

  return (
    <div className='mx-auto p-4 py-12 max-w-6xl'>
      <div className='grid grid-cols-1'>
        <Slider {...settings}>
          <FeaturedService
            productId={props.affordableWebDevelopmentId}
            description=' Website, domain, hosting, security, SSL, email, performance and
            more—at a price that won’t break the bank.'
            title='Get Your Business Website in Just 7 Days for Only $79'
            darkImage={websitePrototypeDark}
            lightImage={websitePrototype}
          />
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedServicesCarousel;
