import React from "react";
import Icons from "../../Main/Right/Icons";
import "./OrderSummary.css";
const OrderSummary = () => {
  return (
    <div className="OrderSummary mt-4">
      <Icons />
      <div className="content">
        <h3>Order summary</h3>
        <div className="prices">
          <div className="items">
            <p>item total</p>
            <p>
              <span>$</span>12.65
            </p>
          </div>
          <div className="delivery">
            <p>Delivery service</p>
            <p>
              <span>$</span>1.00
            </p>
          </div>
        </div>
        <div className="total">
          <p>Orders total</p>
          <p>
            <span>$</span>15.65
          </p>
        </div>
        <button className="Button">
        Payment details
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
