import React from 'react';
import './category-card.css'
const CategoryCard = () => {
  return (
    <div className='category-card'>
      <img src={require('../../../images/category.png')} alt="category" loading='lazy' />
      <h5>Backer</h5>
    </div>
  );
}

export default CategoryCard;
