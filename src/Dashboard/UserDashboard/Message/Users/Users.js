import React from 'react';
import './Users.css'
const Users = () => {
  return (
    <div className='Users'>
      <div className="user">
        <div className="user-data">
          
          <img src={require('../../../../images/user-EX.png')} alt="user" loading='lazy' />
          <div className="text">

          <p className="name">Kathryn, m. manager</p>
          <p className="desc">Monthly newsletter</p>
          </div>
          <span>5m</span>
        </div>
        <p className="message">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="user">
        <div className="user-data">
          
          <img src={require('../../../../images/user-EX.png')} alt="user" loading='lazy' />
          <div className="text">

          <p className="name">Kathryn, m. manager</p>
          <span className="desc">Monthly newsletter</span>
          </div>
          <span>5m</span>
        </div>
        <p className="message">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="user">
        <div className="user-data">
          
          <img src={require('../../../../images/user-EX.png')} alt="user" loading='lazy' />
          <div className="text">

          <p className="name">Kathryn, m. manager</p>
          <p className="desc">Monthly newsletter</p>
          </div>
          <span>5m</span>
        </div>
        <p className="message">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="user">
        <div className="user-data">
          
          <img src={require('../../../../images/user-EX.png')} alt="user" loading='lazy' />
          <div className="text">

          <p className="name">Kathryn, m. manager</p>
          <p className="desc">Monthly newsletter</p>
          </div>
          <span>5m</span>
        </div>
        <p className="message">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

    </div>
  );
}

export default Users;
