import React from "react";
import "./Restaurant.css";
const Restaurant = () => {
  return (
    <div className="Restaurant">
      <div className="img">
        <img
          src={require("../../../../images/KFC.png")}
          alt="restaurant"
          loading="lazy"
        />
      </div>
      <div className="data  ">
        <div className="first ">
          <p className="name">
            KFC fried chicken
          </p>
          <div className="rate">
            <img src={require('../../../../images/gold-star.png')} alt="star" loading="lazy" />
            <span>4.5</span>
          </div>
          </div>
          <div className="second">
            <div className="space">
              <img src={require('../../../../images/Discovery.png')} alt="" loading="lazy"/>
              <span>4.5 km</span>
            </div>
            <p className="delivery">
              free delivery
            </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
