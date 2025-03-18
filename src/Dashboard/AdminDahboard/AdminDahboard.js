import React from 'react';
import './AdminDahboard.css'
import TopBar from './TopBar/TopBar';
import Invoices from './Invoices/Invoices';
// import AdminSideBar from './SideBar/AdminSideBar';
const AdminDahboard = () => {
  return (
    <div className='px-3'>
      <TopBar/>
      <Invoices/>
    </div>
  );
}

export default AdminDahboard;
