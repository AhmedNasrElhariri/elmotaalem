import React from 'react';

import LayoutMetaData from './layout-metadata';
import MainNavbar from '../layout/navbar/navbar';
import Footer from '../layout/footer';

const DefaultLayout = ({ children }) => (
  <LayoutMetaData>
    <MainNavbar />
    {children}
    <Footer />
  </LayoutMetaData>
);

export default DefaultLayout;
