import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./website/Landing/UserLanding/Landing";
import PartnerLanding from "./website/Landing/PartnerLanding/PartnerLanding";
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard";
import SideBar from "./Dashboard/UserDashboard/SideBar/SideBar";
import MainUserDashboard from "./Dashboard/UserDashboard/Main/MainUserDashboard";
import Message from "./Dashboard/UserDashboard/Message/Message";
import Payment from "./Dashboard/UserDashboard/Payment/Payment";
import ByVisa from "./Dashboard/UserDashboard/Payment/ByVisa/ByVisa";
import PopulerProducts from "./Dashboard/UserDashboard/Products/PopulerProducts";
import AdminDahboard from "./Dashboard/AdminDahboard/AdminDahboard";
import AdminOrders from "./Dashboard/AdminDahboard/Orders/AdminOrders";
import OrdersDetails from "./Dashboard/AdminDahboard/Orders/OrdersDetails/OrdersDetails";
import Customers from "./Dashboard/AdminDahboard/Customers/Customers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/partner" element={<PartnerLanding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* user dashboard */}
      <Route path="/dashboard" element={<UserDashboard />}>
        <Route path="main" element={<MainUserDashboard />} />
       {/* start payment method for user */}
        <Route path="main/payment" element={<Payment />}>
          <Route path="visa" element={<ByVisa />} />
        </Route>
       {/* End payment method for user */}

        <Route path="message" element={<Message />} />
        <Route path="admin-main" element={<AdminDahboard />} />
        <Route path="admin-orders" element={<AdminOrders />} />
         <Route path="/dashboard/admin-orders/details" element={<OrdersDetails/>}/>
        <Route path="admin-customers" element={<Customers />} />

      </Route>
      <Route path="/PopulerProducts" element={<PopulerProducts />} />
    </Routes>
  );
}

export default App;
