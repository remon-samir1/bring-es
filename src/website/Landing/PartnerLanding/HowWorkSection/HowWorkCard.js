import React from 'react';
import './HowWork.css'

const HowWorkCard = (props) => {
  return (
    
    <div style={{borderRadius:'20px'}} className='HowWorkCard col-lg-2 col-md-3 col-5'>
      <div className="card-icon">
        <img src={require(`../../../../images/${props.image}`)} alt="imageOfCard" loading='lazy' />
      </div>
      <div className="card-content">
        <h6>{props.header}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HowWorkCard;
