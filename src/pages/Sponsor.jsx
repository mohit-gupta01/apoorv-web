import React from "react";
import MainGroupSend from "../images/MainGroupSand.png";
import names from "../images/names.png";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import halfCircle from "../images/halfCircle.png";
import events from "../images/events.png";
import events1 from "../images/events1.png";
import tiers from "../images/tiers.png";
import gold from "../images/gold.png";
import silver from "../images/silver.png";
import bronze from "../images/bronze.png";
import event from "../images/event.png";
import platinum from "../images/platinum.png";
import title from "../images/title.png";
import presponsor1 from "../images/presponsor1.png";
import presponsor2 from "../images/presponsor2.png";
import circle1 from "../images/circle1.png";
import circle from "../images/circle.png";

const Sponsor = () => {
  return (
    <div className="sponsor relative">
      <div className="relative">
        <div className="mt-[115px]">
          <p className="w-[896px] h-[264px] ml-[52px] poppins-regular font-bold xl:text-9xl lg:text-9xl md:text-7xl text-4xl text-[#E5D1A6] z-10 media">
            WHY SPONSOR US?
          </p>
          <span className="w-[210px] h-[41px] absolute top-[397px] ml-[52px] text-[#E5D1A6] poppins-regular font-semibold text-[40px] leading-[40.8px] mt-0">
            ABOUT US
          </span>
          <p className="flex flex-wrap border-box poppins-regular absolute top-[495px] font-medium text-[36px] leading-10 xl:w-[650px] lg:w-[600px] md:w-[550px] sm:w-[400px] w-[350px] text-[#E5D1A6] ml-[52px] text-justify para">
            Lorem ipsum dolor sit amet consectetur. Condimentum et aenean nunc
            vel sagittis nullam lacus vehicula ut. Sit viverra gravida nunc et
            amet vitae eget placerat. Ut tellus sed mauris turpis ut etiam
            condimentum augue. Nunc sed pretium tellus vel aliquam ullamcorper
            habitasse tempus.
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          className="absolute top-[-4px] right-0"
          src={MainGroupSend}
          width={680}
          height={1199.36}
          alt="MainGroupSend"
        />
      </div>

      <div className="xl:mt-[850px] lg:mt-[800px] md:mt-[800px] mt-[1100px] relative left-6 xl:w-[1400px] lg:w-[1150px] md:w-[740px] sm:w-[900px] w-[400px] xl:h-[800px] lg:h-[700px] md:h-[600px] h-[250px]">
      <img
            className="block md:hidden mt-[-60px]"
            src={circle}
            alt="SmallScreenImage"
          />
          <img className="hidden md:block" src={circle1} alt="evnts" />
      </div>

      <div className="xl:mt-[100px] lg:mt-[90px] md:mt-[0px] absolute left-[100px]  xl:w-[1300px] lg:w-[1000px] md:w-[650px] sm:w-[600px] w-[400px] xl:ml-0 lg:-ml-8  md:-ml-5 -ml-[80px]">
        <div className="relative">
          <img
            className="block md:hidden"
            src={events1}
            alt="SmallScreenImage"
          />
          <img className="hidden md:block" src={events} alt="evnts" />
        </div>
      </div>
      <div className="xl:mt-[1000px] lg:mt-[900px] md:mt-[800px] sm:mt-[700px] mt-[700px]">
        <h1 className="font-normal xl:text-8xl lg:text-7xl :text-6xl sm:text-5xl text-4xl poppins-regular w-[708px] h-[130px] text-[#E5D1A6] ml-[24px] xl:mt-0 lg:mt-0 md:-mt-[300px]">
          SPONSORSHIP TIERS
        </h1>
        <div className="xl:w-[1350px] lg:w-[1300px] md:w-[740px] sm:w-[1100px] w-[400px]">
          <img
            className="ml-[20px] xl:mt-[100px] lg:mt-[50px] md:mt-[-30px] sm:mt-[-10px] -mt-[50px]"
            src={tiers}
            alt="alt"
          />
        </div>
      </div>
      <div className="mt-5">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={platinum} className="d-block w-90" alt="platinum" />
            </div>
            <div className="carousel-item">
              <img src={gold} className="d-block w-90" alt="gold" />
            </div>
            <div className="carousel-item">
              <img src={silver} className="d-block w-90" alt="silver" />
            </div>
            <div className="carousel-item">
              <img src={bronze} className="d-block w-90" alt="bronze" />
            </div>
            <div className="carousel-item">
              <img src={event} className="d-block w-90" alt="event" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span classn="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-[#E5D1A6] w-[566px] h-[78px] xl:text-[82.45px] lg:text-[70px] md:text-[60px] text-[50px] text-center leading-[77.89px] font-bold">
          Title Sponsor
        </p>
        <p className="text-[#E5D1A6] xl:w-[205px] lg:w-[200px] md:w-[205px] h-[43.84px] text-[36.68px] xl:leading-[30.65px] lg:leading-[25.65px] md:leading-[20.65px] leading-[15.65px] font-bold">
          Rs 3 Lakhs
        </p>
        <div className="xl:w-[1130px] lg:w-[1030px] md:w-[730px] sm:w-[630px] w-[400px]"><img src={title} alt="title" /></div>
      </div>
      <div className="flex flex-col justify-center items-center xl:mt-[158px] lg:mt-[150px] md:mt-[140px] sm:mt-[130px] mt-5 gap-[85px]">
        <p className="text-[#E5D1A6] w-[892px] h-[79px] xl:text-[84px] lg:text-[80px] md:text-[64px] sm:text-[54px] text-[35px] text-center leading-[79.36px] font-bold">
          PREVIOUS SPONSORS
        </p>
  <div className="flex flex-col gap-11 xl:mt-0 lg:mt-0 md:mt-1 sm:mt-1 -mt-[90px]  xl:w-[1350px] lg:w-[1300px] md:w-[750px] sm:w-[600px] w-[380px]">
  <img src={presponsor1} alt="sponsors" />
  <img src={presponsor2}  alt="sponsors" />
  </div>
      </div>
    </div>
  );
};

export default Sponsor;
