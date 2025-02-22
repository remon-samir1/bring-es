import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import GetAppDivider from "./GetAppDivider/GetAppDivider";
import OrderFavourite from "./OrderFavourite/OrderFavourite";
import Service from "./ServicePage/Service";
import CitiesWeServe from "./CitiesWeServe/CitiesWeServe";
import Footer from "../../../Components/Footer/Footer";


const Landing = () => {
  return (
    <div style={{background:'#FAFAFA'}}>
      <Navbar link1="Corporate" path1="" link2='Become a Partner' path2='/partner' link3='Countact us' path3=''/>
      <HeroSection />
      <WhyChooseUs />
       <GetAppDivider /> 
      <OrderFavourite />
      <Service />
      <CitiesWeServe />
      <Footer />
    </div>
  );
};

export default Landing;
