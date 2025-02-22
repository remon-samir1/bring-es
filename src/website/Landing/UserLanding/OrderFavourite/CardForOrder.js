import React from 'react';

const CardForOrder = (props) => {
  return (
    <div className={`CardForOrder col-lg-5 col-10 ${props.class}`}  style={{borderRadius: props.left ? '0px 20px 20px 20px ' :
      props.right && '20px 0px 20px 20px'
     }}>
      <div className="content">
        <img src={require(`../../../../images/${props.image}`)} alt="" loading='lazy' />
        <div className="cardtext">
          <h4>{props.header}</h4>
          <p>{props.description} </p>
        </div>
      </div>
      <button className='Button col-12'>make order</button>
    </div>
  );
}

export default CardForOrder;
