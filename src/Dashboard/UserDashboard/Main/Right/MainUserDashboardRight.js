import React from "react";
import "./MainUserDashboardRight.css";
const MainUserDashboardRight = () => {
  return (
    <div className="MainUserDashboardRight">
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
      <div className="wallet">
        <h3>your wallet</h3>
        <div className="ballance">
          <div className="text">
          <p className="header">ballance</p>
          <p className="price">$500 </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUserDashboardRight;
