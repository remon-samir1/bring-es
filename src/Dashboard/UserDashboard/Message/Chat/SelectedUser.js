import React from 'react';

const SelectedUser = () => {
  return (
    <div className='SelectedUser'>
      <img src={require('../../../../images/user-EX.png')} alt="user" loading='lazy' />
      <div className="texts">
        <h6 className="name">Alexander, support</h6>
        <span className="desc">Special promotion inquiry</span>
      </div>
    </div>
  );
}

export default SelectedUser;
