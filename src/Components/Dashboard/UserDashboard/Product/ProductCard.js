import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  
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
          src={props.src}
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
          <p className="name">{props.title}</p>
          <p className="price">
            <span>$</span>{props.price}
          </p>
        </div>
        <div className="add" onClick={props.handleAddtoCart}>
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
