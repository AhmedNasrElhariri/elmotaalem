import React from 'react';

import DefaultLayout from '../src/components/containers/layout';
import Home from '../src/components/pages/home';
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </>
    );
  }
}
export default LandingPage;
