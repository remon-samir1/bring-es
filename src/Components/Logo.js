import React from 'react';

const Logo = (props) => {
  return (
  <img src={require('../images/Logo.png')} alt="" width={props.width} />
  );
}

export default Logo;
