import React from "react";
import MainGroupSend from "../images/MainGroupSand.png";
import names from "../images/names.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import halfCircle from "../images/halfCircle.png";
import events from "../images/events.png";
import tiers from "../images/tiers.png";
import gold from "../images/gold.png";
import silver from "../images/silver.png";
import bronze from "../images/bronze.png";
import event from "../images/event.png";
import platinum from "../images/platinum.png";
import title from "../images/title.png";
import presponsor1 from "../images/presponsor1.png";
import presponsor2 from "../images/presponsor2.png";

const Sponsor = () => {
  return (
    <div className="sponsor relative">
      <div className="relative">
        <div className="mt-[115px]">
          <p className="w-[896px] h-[264px] ml-[52px] poppins-regular font-bold text-9xl text-[#E5D1A6] z-10 ">
            WHY SPONSOR US?
          </p>
          <span className="w-[201px] h-[41px] absolute top-[397px] ml-[52px] text-[#E5D1A6] poppins-regular font-semibold text-[40px] leading-[40.8px]">
            ABOUT US
          </span>
          <p className="poppins-regular absolute top-[495px] text-[#000000] font-medium text-[36px] leading-10 w-[650px] text-[#E5D1A6] h-[346px] ml-[52px] text-justify">
            Lorem ipsum dolor sit amet consectetur. Condimentum et aenean nunc
            vel sagittis nullam lacus vehicula ut. Sit viverra gravida nunc et
            amet vitae eget placerat. Ut tellus sed mauris turpis ut etiam
            condimentum augue. Nunc sed pretium tellus vel aliquam ullamcorper
            habitasse tempus.
          </p>
        </div>
      </div>
      <img
        className="absolute top-[-4px] right-0"
        src={MainGroupSend}
        width={680}
        height={1199.36}
        alt="MainGroupSend"
      />

      <div className="mt-[850px] relative left-6">
        <img
          className="absolute top-11 left-[100px]"
          src={halfCircle}
          width={1105.92}
          height={965.62}
          alt="halfCircle"
        />
        <img src={names} width={1391.01} height={603.71} alt="names" />
      </div>

      <div className="mt-[300px] absolute left-[100px]">
        <img src={events} width={1263.27} height={655.95} alt="evnts" />
      </div>
      <div className="mt-[1100px]">
        <h1 className="font-normal text-8xl poppins-regular w-[708px] h-[130px] text-[#E5D1A6] ml-[24px]">
          SPONSORSHIP TIERS
        </h1>
        <img
          className="ml-[20px] mt-[100px]"
          src={tiers}
          width={1363}
          height={805}
          alt="alt"
        />
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
        <p className="text-[#E5D1A6] w-[566px] h-[78px] text-[82.45px] leading-[77.89px] font-bold">
          Title Sponsor
        </p>
        <p className="text-[#E5D1A6] w-[205.87px] h-[43.84px] text-[36.68px] leading-[34.65px] font-bold">
          Rs 3 Lakhs
        </p>
        <img src={title} width={1133} height={708.99} alt="title" />
      </div>
      <div className="flex flex-col justify-center items-center mt-[158px] gap-[85px]">
        <p className="text-[#E5D1A6] w-[892px] h-[79px] text-[84px] leading-[79.36px] font-bold">
          PREVIOUS SPONSORS
        </p>
        <img src={presponsor1} width={1369} height={672.07} alt="sponsors" />
        <img src={presponsor2} width={1340} height={654.31} alt="sponsors" />
      </div>
    </div>
  );
};

export default Sponsor;
