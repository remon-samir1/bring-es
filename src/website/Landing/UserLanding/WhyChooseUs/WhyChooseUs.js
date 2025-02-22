import React from "react";
import "./WhyChooseUs.css";

import CardInfo from "./CardInfo";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const WhyChooseUs = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".class1", {
      x: -60,
      duration: 1,
      scrollTrigger: {
        trigger: ".whychoose ",
        scroller: "body",

        start: "top 50%",
      },
    });
    gsap.from(".class2", {
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: ".whychoose",
        scroller: "body",
    
        start: "top 50%",
      },
    });
    gsap.from(".class3", {
      x: 60,
      // opacity:0,
      duration: 1,
      scrollTrigger: {
        trigger: ".whychoose ",
        scroller: "body",

        start: "top 50%",
      },
    });
  });

  return (
    <div className="whychoose ">
      <div className="content">
        <h3>why choose us</h3>
        <p>
          Because we provide speed and quality to meet your needs effortlessly
        </p>
      </div>
      <Container className=" cards">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardInfo
              head="The Best Stores"
              description="Explore a selection of top-rated stores offering high-quality products to meet all your needs"
              image="stores.png"
              class="class1"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardInfo
              head="Fast Dlivery"
              description="A lightning-fast delivery service ensures your orders arrive on time, wherever you are"
              image="delivery.png"
              height="440px"
              btn
              class="class2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardInfo
              head="Quick Support"
              description="support to solve your problems and answer your questions with professionalism"
              image="quicksupport.png"
              class="class3"
            />{" "}
          </SwiperSlide>
        </Swiper>
      </Container>
      <div className="d-flex justify-content-center">
        <Link to="" className="Button readmore-res">
          <span className="">read more</span>

          <img
            src={require("../../../../images/uiw_d-arrow-right.png")}
            alt="arrow"
            width="15px"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
