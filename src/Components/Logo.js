import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <Link to={props.to}>
  <img src={require('../images/Logo.png')} alt="" width={props.width} />
    </Link>
  );
}

export default Logo;
