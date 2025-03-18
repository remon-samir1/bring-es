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

        <Route path="main/payment" element={<Payment />}>
          <Route path="visa" element={<ByVisa />} />
        </Route>
        <Route path="message" element={<Message />} />
      <Route path="admin-main" element={<AdminDahboard/>}/>
      </Route>
      <Route path="/PopulerProducts" element={<PopulerProducts />} />

      {/* admin dahsboard */}
    </Routes>
  );
}

export default App;
