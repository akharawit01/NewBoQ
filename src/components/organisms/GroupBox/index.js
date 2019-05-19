import React from 'react';
import propTypes from 'prop-types';

import GroupBoxStyle from './GroupBox.style';

const GroupBoxPropTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired,
  title: propTypes.string
};
const GroupBowDefaultProps = {
  children: null,
  title: ''
};

const GroupBox = ({ children, title }) => {
  return (
    <GroupBoxStyle>
      <h3 className="title">{title}</h3>
      {children}
    </GroupBoxStyle>
  );
};

GroupBox.propTypes = GroupBoxPropTypes;
GroupBox.defaultProps = GroupBowDefaultProps;

export default GroupBox;
