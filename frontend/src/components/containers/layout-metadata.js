import React from 'react';
import Head from 'next/head';

const LayoutMetadata = ({ children }) => (
  <div>
    <Head>
      <title>ElMotaalem</title>
      <meta property="og:ElMotaalem" content="ElMotaalem" key="ElMotaalem" />
    </Head>

    <div>{children}</div>
  </div>
);

export default LayoutMetadata;
