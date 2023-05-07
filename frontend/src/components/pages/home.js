import React from 'react';

import Blog from '../views/home/blog';
import ShapeBox from '../views/home/shape-box';
import Banner from '../views/home/banner';
import Schools from '../views/home/schools';
import Colleges from '../views/home/colleges';
import EvaluateYourSelf from '../views/home/evaluate-your-self';
import WhatWeOffer from '../views/home/what-we-offer';
import ToWhom from '../views/home/to-whom';
import SignUpBanner from '../views/home/sign-up-banner';

const Home = () => {
  return (
    <>
      <Banner />
      <ShapeBox />
      <WhatWeOffer />
      <ToWhom />
      <Schools />
      <Colleges />
      <EvaluateYourSelf />
      <Blog />
      <SignUpBanner />
    </>
  );
};

export default Home;
