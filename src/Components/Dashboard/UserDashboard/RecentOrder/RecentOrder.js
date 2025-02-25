import React from "react";
import "./RecentOrder.css";
const RecentOrder = () => {
  return (
    <div className="RecentOrder">
      <div className="fav">
        <img
          src={require("../../../../images/fav.png")}
          alt="favourite"
          loading="lazy"
        />
      </div>
      <div className="img">
        <img
          src={require("../../../../images/recent-order.png")}
          alt="order"
          loading="lazy"
        />
      </div>
      <div className="details">
        <div className="name">Fish Burger</div>
        <div className="price">
          <span>$</span> 15.59
        </div>
        <div className="delivery">Delivery time <span>.</span> 21 min</div>
        <button className="Button">Recorder</button>
      </div>
    </div>
  );
};

export default RecentOrder;
