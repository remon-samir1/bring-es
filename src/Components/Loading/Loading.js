import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Laoding.css'
const Loading = () => {
  return (
    <div className='Loading'>
        <Spinner animation="border" role="status" variant='danger'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Loading;
