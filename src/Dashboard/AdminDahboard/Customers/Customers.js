import React from 'react';
import './Customers.css'
import TopBar from '../TopBar/TopBar';
import { Link } from 'react-router-dom';
import Table from '../../../Components/Dashboard/Table/Table';
const Customers = () => {
  return (
    <div className='Customers px-3'>
      <TopBar/>
    {/* will add braedcrumbs here */}

    <div className="options px-3">
    <div className="search px-4">
        <input type="text" placeholder="Search " />
        <img
          src={require("../../../images/Search.png")}
          alt="search"
          loading="lazy"
        />
      </div>
      <Link className='add'> 
      <img src={require('../../../images/plus.png')} loading='lazy' width='13px' />
      <span>add new user</span>
      </Link>
    </div>
    <div className="Table mt-4">
      <Table/>
    </div>
    </div>
  );
}

export default Customers;
