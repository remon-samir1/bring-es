import React from 'react';
import './MainUserDashboard.css'
import MainUserDashboardCenter from './center/MainUserDashboardCenter';
import MainUserDashboardRight from './Right/MainUserDashboardRight';
const MainUserDashboard = () => {
  return (
    <div className='MainUserDashboard'>
      <MainUserDashboardCenter/>
      <MainUserDashboardRight/>

    </div>
  );
}

export default MainUserDashboard;

