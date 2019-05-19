import React from 'react';

const makeInputField = Component => ({ input, label, ...rest }) => {
  return <Component {...input} {...rest} />;
};

export default makeInputField;
