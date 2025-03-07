import React from 'react';
import { Link } from 'react-router-dom';

const CardInfo = (props) => {
  return (
    <div ref={props.ref} className={`cardinfo ${props.order} `} style={{height: props.height && props.height}}>
      <div className='card-data'>

      <div className="image ">
        <img src={require(`../../../../images/${props.image}`)} alt="" loading='lazy' />
      </div>
      <div className="cardcontent">
        <h4>{props.head}</h4>
        <p>{props.description}</p>

        </div>
        <div>

      {props.btn && 
        <Link to='' className='Button readmore'>
        
        <span className=''>Read More</span>

        <img src={require('../../../../images/uiw_d-arrow-right.png')} alt="arrow" width='15px' loading='lazy' />
       
       </Link>}
          </div>
      </div>
    </div>
  );
}

export default CardInfo;
