import React from 'react';

import { Layout } from 'antd';
import TopBar from './Topbar';
import BelowTop from './BelowTop';

import MainRoute from './router';

const LayoutApp = () => {
  return (
    <Layout className="inner">
      <TopBar />
      <BelowTop>
        <MainRoute />
      </BelowTop>
    </Layout>
  );
};
export default LayoutApp;
