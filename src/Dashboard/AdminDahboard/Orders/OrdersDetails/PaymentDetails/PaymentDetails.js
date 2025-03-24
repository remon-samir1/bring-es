import React from 'react';
import './PaymentDetails.css'
const PaymentDetails = () => {
  return (
    <div className='PaymentDetails'>
      <div className="header">

    <h4>total payment</h4>
      </div>
    <div className="element-container">

    <div className="element">
      <p>Subtotal</p>
      <span>68 EGP</span>
    </div>
    <div className="element">
      <p>Discount</p>
      <span>20%</span>
    </div>
    <div className="element">
  <p>Shipping</p>
      <span>Free</span>
    </div>
    <div className="element">
      <p>total</p>
      <span>84 EGP</span>
    </div>
  
    </div>
    </div>
  );
}

export default PaymentDetails;
