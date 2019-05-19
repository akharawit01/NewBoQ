import React from 'react';

import { Layout } from 'antd';
import TopBar from './Topbar';
import BelowTop from './BelowTop';

const LayoutApp = props => {
  return (
    <Layout className="inner">
      <TopBar />
      <BelowTop {...props} />
    </Layout>
  );
};
export default LayoutApp;
