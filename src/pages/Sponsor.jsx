import React from "react";
import MainGroupSend from "../images/MainGroupSand.png";
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
import { useEffect } from "react";

const Sponsor = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sponsor pb-[100px]">
      <div className="xl:ml-[120px]">
        <div className=" min-h-[50vh]">
          <div className="flex flex-col mx-auto gap-4 my-auto absolute top-1/2  transform -translate-y-1/2 xl:w-[700px] lg:w-[450px] md:[350px] w-[350px] ml-[20px] md:ml-[52px]">
            <p className="poppins font-extrabold xl:text-[100px] lg:text-[80px] md:text-[70px] text-[60px] leading-[6rem] text-[#FFB703] md:text-[#E5D1A6] z-10 media pt-[100px]">
              WHY SPONSOR US?
            </p>
            <h3 className="flex flex-wrap border-box poppins-regular lg:text-[26px] md:text-[22px] text-[20px] tracking-wide leading-10 font-semibold text-[#FFB703] md:text-[#E5D1A6] text-justify para">About Us</h3>
            <p className="flex flex-wrap border-box poppins-regular lg:text-[16px] md:text-[14px] text-[14px] tracking-wide leading-7 font-medium text-[#FFB703] md:text-[#E5D1A6] text-justify para">
              In the peaceful setting of Kottayam, Kerala, this campus is blessed with abundant verdant greenery, creating an ideal environment for students to learn and grow together. The beauty of IIIT Kottayam transcends its academic prowess, integrating elements that cultivate an environment conducive to learning, stimulate creativity, and inspire students to push the frontiers of knowledge and talent alike.<br />
              We are proud to present the much awaited second edition of Apoorv, our annual techno-cultural fest! True to its name, Apoorv is a one of a kind extravaganza where technology and culture comes together like never before. Every individual is bound to find something that resonates with them in this grand fest
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="absolute right-0 top-0 w-[40rem] z-0 opacity-30"
            src={MainGroupSend}
            // width={680}
            // height={1199.36}
            alt="MainGroupSend"
          />
        </div>

        <div className="flex items-center justify-center mt-[100vh]">
          <img
            className="block md:hidden w-[80vw]"
            src={circle}
            alt="SmallScreenImage"
          />
          <img className="hidden md:block w-[70vw]" src={circle1} alt="evnts" />
        </div>

        <div className="flex items-center justify-center ">
          <img
            className="block md:hidden w-[80vw]"
            src={events1}
            alt="SmallScreenImage"
          />
          <img className="hidden md:block w-[70vw]" src={events} alt="evnts" />
        </div>
        <div className="flex flex-col items-center justify-center mt-[50px] lg:mt-[100px] w-full">
          <h1 className="font-normal xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl poppins-regular text-[#E5D1A6]">
            SPONSORSHIP TIERS
          </h1>
          <div className="w-[80vw] lg:w-[70vw]">
            <img
              className="lg:ml-[20px] xl:mt-[100px] mt-[50px]"
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
              <span
                classn="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-[#E5D1A6] w-[320px] md:w-[566px] h-[78px] xl:text-[82.45px] lg:text-[70px] md:text-[60px] text-[25px] text-center leading-[77.89px] font-bold">
            Title Sponsor
          </p>
          <p className="text-[#E5D1A6] xl:w-[205px] lg:w-[200px] md:w-[205px] h-[43.84px] text-[25px] xl:leading-[30.65px] lg:leading-[25.65px] md:leading-[20.65px] leading-[15.65px] font-bold">
            Rs 3 Lakhs
          </p>
          <div className="xl:w-[1130px] lg:w-[900px] md:w-[730px] sm:w-[630px] w-[400px]">
            <img src={title} alt="title" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center xl:mt-[158px] lg:mt-[150px] md:mt-[140px] sm:mt-[130px] mt-5 gap-[85px]">
          <p className="text-[#E5D1A6] w-[300px] md:w-[700px] lg:w-[892px] h-[79px] xl:text-[84px] lg:text-[80px] md:text-[64px] sm:text-[54px] text-[25px] text-center md:leading-[79.36px] font-bold">
            PREVIOUS SPONSORS
          </p>
          <div className="flex flex-col gap-11 xl:mt-0 lg:mt-0 md:mt-1 sm:mt-1 -mt-[90px]  xl:w-[1110px] lg:w-[900px] md:w-[750px] sm:w-[600px] w-[380px]">
            <img src={presponsor1} alt="sponsors" />
            <img src={presponsor2} alt="sponsors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
