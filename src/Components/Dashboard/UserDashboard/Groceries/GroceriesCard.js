import React from 'react';
import './GroceriesCard.css'
const GroceriesCard = () => {
  return (
    <div className='GroceriesCard'>
      <img src={require('../../../../images/abo-alkher.png')} alt="Groceries" loading='lazy' />
      <p>abo alkheir</p>
    </div>
  );
}

export default GroceriesCard;
