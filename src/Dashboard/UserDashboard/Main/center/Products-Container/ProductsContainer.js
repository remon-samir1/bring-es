import React from 'react';
import CategoryCard from '../../../../../Components/Dashboard/Category/CategoryCard';
import { Link } from 'react-router-dom';
import './ProductsContainer.css'
const ProductsContainer = (props) => {
  return (
    <div className="ProductsContainer mt-4">
        <div className="head mb-3">
          <h4>{props.header}</h4>
          <Link className="link" to={props.to}>view all <img src={require('../../../../../images/acordionArrow.png')} alt=">" loading="lazy" /></Link>
        </div>
        <div className="category-container">
          {props.data}
        
        </div>
      </div>
  );
}

export default ProductsContainer;
