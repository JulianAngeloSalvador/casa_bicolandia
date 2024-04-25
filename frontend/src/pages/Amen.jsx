import React from "react";
import "./Amen.css";


//import Carousel from 'react-bootstrap/Carousel';

// Swiper:
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Styles:
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// css:
import './Amen.css'

// Images:
import logo from "/assets/logo.png";
import img_1 from "/assets/img_1.jpg";
import img_2 from "/assets/img_2.jpg";
import img_3 from "/assets/img_3.jpg";
import img_4 from "/assets/img_4.jpg";
import img_5 from "/assets/img_5.jpg";



//Icons: 
import { LuParkingCircle } from "react-icons/lu";
import { LuConciergeBell } from "react-icons/lu";
import { BiSolidCctv } from "react-icons/bi";
import { GiPowerGenerator } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { GrRestaurant } from "react-icons/gr";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";


import { TbAirConditioning } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { TbBrandIntercom } from "react-icons/tb";
import { FaPumpSoap } from "react-icons/fa6";





export default function Amen() {
    return (
      <section className="container p-5">
        <div className="row">
          <div className="col-sm">
            <h3 className="Hotel-amenities">Hotel Amenities</h3>
            <ul className="ul">
              <li>
                <LuParkingCircle /> Indoor and Outdoor Parking{" "}
              </li>
              <li>
                <LuConciergeBell /> 24-hour Front Desk{" "}
              </li>
              <li>
                <BiSolidCctv /> 24/7 CCTV{" "}
              </li>
              <li>
                <GiPowerGenerator /> Full-Backup Generator{" "}
              </li>
              <li>
                <ImSpoonKnife /> Complimentary Breakfast{" "}
              </li>
              <li>
                <GrRestaurant /> Restaurant{" "}
              </li>
              <li>
                <FaWifi /> Wifi Service{" "}
              </li>
              <li>
                <MdOutlinePets /> Pet Friendly{" "}
              </li>
            </ul>
          </div>

          <div className="col-sm">
            <h3>In-Room Amenities</h3>
            <ul className="ul">
              <li>
                <TbAirConditioning /> Airconditioned Room{" "}
              </li>
              <li>
                <FaShower /> Hot and Cold Shower{" "}
              </li>
              <li>
                <PiTelevisionSimpleBold /> LED Television with cable{" "}
              </li>
              <li>
                <TbBrandIntercom /> Intercom{" "}
              </li>
              <li>
                {" "}
                <FaPumpSoap />
                Guest Hotel Kit
              </li>
              <li>
                <FaWifi /> Wifi Service{" "}
              </li>
            </ul>
          </div>

          <div className="col-sm">
            <img src={logo} alt="" className="logo" />
          </div>
        </div>



        {/* Gallery Testing */}


        <div className="body">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>


        {/* Gallery testing  */}



   
      </section>
    );
  }
  