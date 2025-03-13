import React from "react";

const PopulerProductCard = (props) => {
  return (
    <div className="PopulerProductCard">
      <div className="img">
        <img
          src={props.src}
          alt="food"
          loading="lazy"
        />
      </div>
      <div className="data">
        <p className="name">{props.title}</p>
        <p className="delivery">$2.00 Delivery</p>
      </div>
      <div className="data-2">
        <div className="rating">
          <img src={require('../../../images/gold-star.png')} alt="*" loading="lazy" />
          <p>4.5 <span>(63)</span>
          </p>
        </div>
        <div className="category">
          <img src={require('../../../images/category-icon.png')} loading="lazy" />
          <p>{props.category}</p>
        </div>
        <div className="delivery">
          <img src={require('../../../images/delivery-icon.png')} loading="lazy" />
          <p>10 - 20 min</p>
        </div>
      </div>
    </div>
  );
};

export default PopulerProductCard;
