import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import TopBar from './top-bar';
import SmallScreenNavbar from './small-screen-navbar';

const Header = () => {
  return (
    <div>
      <TopBar />
      <BigScreenNavbar />
      <SmallScreenNavbar />
    </div>
  );
};

export default Header;
