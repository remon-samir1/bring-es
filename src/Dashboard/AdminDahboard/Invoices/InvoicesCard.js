import React from 'react';
const InvoicesCard = (props) => {
  return (
    <div className="box">
    <div className="img">
    <img src={props.image}  width='48px' height='48px' loading='lazy' />
    </div>
    <div className="texts">
      <h4>{props.header}</h4>
      <p>{props.mount}</p>
    </div>
  </div>
  );
}

export default InvoicesCard;
