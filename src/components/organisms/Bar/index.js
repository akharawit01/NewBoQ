import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

import logo from '../../../images/logo-icon.svg';
import BarStyle from './Bar.style';

import confirm from '../../../utils/confirmDialog';

const Bar = ({ history }) => {
  const handleLogout = () => {
    confirm('Are you sure').then(
      result => {
        // `proceed` callback
        history.push('/login');
        console.log('proceed called');
        console.log(result);
      },
      result => {
        // `cancel` callback
        console.log('cancel called');
        console.log(result);
      }
    );
  };
  return (
    <BarStyle>
      <img src={logo} className="app-logo" alt="Logo" />
      <div className="user-bar">
        <p className="username">AkharawitNt</p>
        <span className="position">General user</span>
      </div>
      <div className="actions-bar">
        <div>
          <Icon type="bell" />
        </div>
        <div>
          <Icon type="logout" onClick={() => handleLogout()} />
        </div>
      </div>
    </BarStyle>
  );
};
export default withRouter(Bar);
