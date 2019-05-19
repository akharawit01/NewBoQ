import React from 'react';
import PropTypes from 'prop-types';

import MainHeadStyle from './MainHead.style';

const MainHeaderPropTypes = {
  title: PropTypes.string
};
const MainHeaderDefaultProps = {
  title: ''
};
const MainHeader = props => {
  const { title } = props;
  return <MainHeadStyle>{title}</MainHeadStyle>;
};
MainHeader.propTypes = MainHeaderPropTypes;
MainHeader.defaultProps = MainHeaderDefaultProps;

export default MainHeader;
