import React from "react";
import "./RecentCart.css";
const RecentCart = () => {
  return (
    <div className="RecentCart">
      <div className="cart">
        <img
          src={require("../../../../../images/Mastercard.webp")}
          alt="card"
          loading="lazy"
          width="45px"
        />
        <div className="details">
          <div>
            <p className="name">
              Remon Samir
            </p>
            <p className="cvc">
              03/26
            </p>
          </div>
          <div className="number">
          3254   5214   2541   2154
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCart;
