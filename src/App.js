import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./website/Landing/UserLanding/Landing";
import PartnerLanding from "./website/Landing/PartnerLanding/PartnerLanding";
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard";
import SideBar from "./Dashboard/UserDashboard/SideBar/SideBar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/partner" element={<PartnerLanding/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      {/* user dashboard */}
      <Route path="/user-dashboard" element={<UserDashboard/>}>
      

      </Route>
    </Routes>
    
    
  );
}

export default App;
