import React from 'react';

import BelowTopStyle from './BelowTop.style';

import AsideLeftNav from '../AsideLeftNav';

const BelowTop = props => {
  return (
    <BelowTopStyle>
      <AsideLeftNav />
      <div className="main-body">{props.children}</div>
    </BelowTopStyle>
  );
};
export default BelowTop;
