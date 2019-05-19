import React from 'react';

import logo from '../../../images/logo-icon.svg';
import BarStyle from './Bar.style';

const Bar = () => {
  return (
    <BarStyle>
      <img src={logo} className="app-logo" alt="Logo" />
      <div className="user-bar">
        <p className="username">AkharawitNt</p>
        <span className="position">General user</span>
      </div>
    </BarStyle>
  );
};
export default Bar;
