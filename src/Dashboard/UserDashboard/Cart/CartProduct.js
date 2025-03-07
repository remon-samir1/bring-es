
import React from 'react';

const CartProduct = () => {
  return (
    <div className='CartProduct'>
      <div className="data">
        <img src={require('../../../images/recent-order.png')} alt="order" loading='lazy' />
        <span className="count">x1</span>
        <div className="texts">
          <h5 className="name">Pepperoni Pizza</h5>
          <p className="price"><span>$</span> 5.54</p>
        </div>
      </div>
      <div className="delete">
      <img src={require('../../../images/trash.png')} alt="order" loading='lazy' />

      </div>

    </div>
  );
}

export default CartProduct;
