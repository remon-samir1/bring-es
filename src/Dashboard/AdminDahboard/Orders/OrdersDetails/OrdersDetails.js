import React from 'react';
import './OrdersDetails.css'
import TopBar from '../../TopBar/TopBar';
import OrderTrack from './OrderTrack/OrderTrack';
import CustomerDetails from './CustomerDetails/CustomerDetails';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import Table from '../../../../Components/Dashboard/Table/Table';

const OrdersDetails = () => {
  return (
    <div className='orderDetails px-3'>
      <TopBar/>
      <OrderTrack/>
      <div className="boxes mt-5 d-flex gap-5">
        <CustomerDetails/>
        <PaymentDetails/>
      </div>
      <div className="table-custom mt-5">
        <Table/>
      </div>
    </div>
  );
}

export default OrdersDetails;
