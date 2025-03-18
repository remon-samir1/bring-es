import React from 'react';
import './AdminDahboard.css'
import TopBar from './TopBar/TopBar';
import Invoices from './Invoices/Invoices';
import BChart from './Charts/BarChart/BarChart';
// import AdminSideBar from './SideBar/AdminSideBar';
const AdminDahboard = () => {
  return (
    <div className='px-3'>
      <TopBar/>
      <Invoices/>
      <div className='BarChart'>
       <div className="header">
        <h3>Revenue</h3>
       </div>
      <BChart/>
      </div>
    </div>
  );
}

export default AdminDahboard;
