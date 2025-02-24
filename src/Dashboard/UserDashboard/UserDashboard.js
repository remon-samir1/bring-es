import React from 'react';
import SideBar from './SideBar/SideBar';
import './Userdashboard.css'
import { Outlet } from 'react-router-dom';
const UserDashboard = () => {
  
  return (
    <div className='Userdashboard'>
      <SideBar/>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDashboard;
