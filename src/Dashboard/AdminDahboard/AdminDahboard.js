import React from "react";
import "./AdminDahboard.css";
import TopBar from "./TopBar/TopBar";
import Invoices from "./Invoices/Invoices";
import BChart from "./Charts/BarChart/BarChart";
import Table from "../../Components/Dashboard/Table/Table";
import PChart from "./Charts/PieChart/PieChart";
const AdminDahboard = () => {
  return (
    <div className="px-3 AdminDahboard">
      <TopBar />
      <Invoices />
      <div className="BarChart">
        <div className="header">
          <h3>Revenue</h3>
        </div>
        <BChart />
      </div>
      <div className="d-flex justify-content-center align-items-start gap-3 mt-5">
        <div className="table-container">
          <h3>order report</h3>
          <Table />
        </div>
        <div className="pieChart-container">
          <h3>total</h3>
          <PChart/>
      
        </div>
      </div>
    </div>
  );
};

export default AdminDahboard;
