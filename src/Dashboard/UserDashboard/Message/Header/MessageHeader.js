import React from 'react';
import './MessageHeader.css'
const MessageHeader = () => {
  return (
    <div className='MessageHeader'>
      <div className="main">
        <h2>
          message
        </h2>
        <div className="search">
          <img src={require('../../../../images/Search.png')} alt="search" loading='lazy' />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="user">
        <img src={require('../../../../images/placeholder.png')} alt="user" />
        <div className="text">
          <div className="name">Noura ahmed</div>
          <div className="email">noura@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default MessageHeader;
