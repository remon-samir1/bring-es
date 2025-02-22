import React from 'react';
import './Benefits.css'
const Benefits = () => {
  return (
    <div className='Benefits '>
      <h4>Benefits of Partnering with Us</h4>
      <div className="section">
        <div className='d-flex flex-column gap-4 cards order-2 order-md-1'>

        <div className="content">
          <div className="image">
            <img src={require('../../../../images/food1.png')} alt="food" loading='lazy' />

          </div>
          <div className="text">
            <h5>Access to a Large Customer Base</h5>
            <p>opportunity to reach a broad base of customers who use the platform to discover new restaurants and easily order food.</p>
          </div>
        </div>
        <div className="content">
          <div className="image">
            <img src={require('../../../../images/food2.png')} alt="food" loading='lazy' />

          </div>
          <div className="text">
            <h5>Opportunities for Growth</h5>
            <p>By being listed on the platform, a restaurant can offer services to customers in new areas, increasing its customer base.</p>
          </div>
        </div>
        <div className="content">
          <div className="image">
            <img src={require('../../../../images/food3.png')} alt="food" loading='lazy' />

          </div>
          <div className="text">
            <h5>Efficient Order Management</h5>
            <p>The partner will have access to advanced tools for managing food orders efficiently, including order acceptance, tracking order status, and adjusting delivery times.</p>
          </div>
        </div>
        </div>
        <div className="images order-1 order-md-2">
        <img src={require('../../../../images/chefes.png')} alt="chef" loading='lazy' />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
