import React from "react";
import "./OrderTrack.css";
import { useState } from "react";
const OrderTrack = () => {
  const [currentStep, setSurrentStep] = useState(1);
  const data = [
    "Order created",
    "Payment success",
    "On delivery",
    "Order deliverd",
  ];
  const showData = data.map((data, index) => (
    <>
      <div className={`track-item ${currentStep >= index && 'active'}`}>
        <div></div>
        <div>{data}</div>
        <p>02 Feb 11:49 am</p>
        
      </div>
    </>
  ));
  return (
    <div className="OrderTrack mt-4">
      <h3 className="header">
        track order
      </h3>
      <div className="d-flex justify-content-between align-items-center w-100" >
        {showData}
      </div>
    </div>
  );
};

export default OrderTrack;
