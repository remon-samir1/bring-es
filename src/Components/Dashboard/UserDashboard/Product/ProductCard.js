import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="ProductCard">
      <div className="badges">
        <div className="off">15% off</div>
        <div className="fav">
          <img
            src={require("../../../../images/fav.png")}
            alt="favourite"
            loading="lazy"
          />
        </div>
      </div>
      <div className="img">
        <img
          src={require("../../../../images/fresh-tasty-burger.png")}
          alt="food"
          loading="lazy"
        />
      </div>
      <div className="stars">
        <img
          src={require("../../../../images/gold-star.png")}
          alt="gold-star"
          loading="lazy"
        />
        <img
          src={require("../../../../images/gold-star.png")}
          alt="gold-star"
          loading="lazy"
        />
        <img
          src={require("../../../../images/gold-star.png")}
          alt="gold-star"
          loading="lazy"
        />
        <img
          src={require("../../../../images/gold-star.png")}
          alt="gold-star"
          loading="lazy"
        />
        <img
          src={require("../../../../images/gold-star.png")}
          alt="gold-star"
          loading="lazy"
        />
      </div>
      <div className="details">
        <div className="data">
          <p className="name">fish burger</p>
          <p className="price">
            <span>$</span>5.59
          </p>
        </div>
        <div className="add">
          <img
            src={require("../../../../images/plus.png")}
            alt="plus"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
