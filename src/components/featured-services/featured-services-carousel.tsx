'use client';
import React from 'react';
import Slider from 'react-slick';
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
  affordablePersonalLiteWebDevelopmentId: string;
  affordablePersonalWebDevelopmentId: string;
};

const FeaturedServicesCarousel = (props: Props) => {
  const numberOfServices = Object.keys(props).length;

  const settings = {
    dots: false,
    infinite: numberOfServices > 1, // Disable infinite mode if there's only one service
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: numberOfServices > 1, // Disable autoplay if there's only one service
    autoplaySpeed: 3000,
  };

  return (
    <div className='mx-auto py-12 p-4 max-w-6xl'>
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

          <FeaturedService
            productId={props.affordablePersonalWebDevelopmentId}
            description='Website, domain (.com), hosting, SSL, email and
            more—at a price that won’t break the bank.'
            title='Get Your Personal Website in Just 2 Days for Only $12'
            darkImage={personalWebsite}
            lightImage={personalWebsiteLight}
          />

          <FeaturedService
            productId={props.affordablePersonalLiteWebDevelopmentId}
            description='Website, domain (.xyz), hosting, SSL, email and
            more—at a price that won’t break the bank.'
            title='Get Your Simple Personal Website in Just 2 Days for Only $7'
            darkImage={personalWebsiteLiteDark}
            lightImage={personalWebsiteLiteLight}
          />
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedServicesCarousel;
