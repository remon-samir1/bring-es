import React from "react";
import "./MainUserDashboardRight.css";
import OrderMenu from "./OrderMenu/OrderMenu";
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
      <div className="address">
        <h3 className="title">your address</h3>
        <div className="data">
          <div>
            <img
              src={require("../../../../images/Location-colored.png")}
              alt="location"
              loading="lazy"
            />
            <span>Elm Street, 23</span>
          </div>
          <button>Change</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.{" "}
        </p>
        <div className="adds">
          <button>add details</button>
          <button>add notes</button>
        </div>
      </div>
      <OrderMenu/>
    </div>
  );
};

export default MainUserDashboardRight;
