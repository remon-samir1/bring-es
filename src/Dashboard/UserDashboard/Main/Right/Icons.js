import React from 'react';

const Icons = () => {
  return (
    <div className="icons">
        <img
          src={require("../../../../images/notification.png")}
          alt="icon"
          loading="lazy"
        />
        <img
          src={require("../../../../images/message-icon.png")}
          alt="icon"
          loading="lazy"
        />
        <img
          src={require("../../../../images/settinges-icon.png")}
          alt="icon"
          loading="lazy"
        />
        <img
          src={require("../../../../images/placeholder.png")}
          alt="user"
          className="user"
        />
      </div>
  );
}

export default Icons;
