import React from "react";
import "./Event.css";
import { Cards } from "../data/data";
import { Link, useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  // console.log(id);
  const data = Cards[id];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[4vw] px-[10vw] h-fit lg:h-[90vh] w-full mt-[12vh] xl:mt-0">
      <div className="w-[60vw] lg:w-[30vw]">
        <img
          src={data.image}
          alt=""
        />
      </div>
      <div className="flex flex-col w-[75vw] lg:w-[60vw] gap-4">
        <h1 className="poppins font-bold xl:text-[80px] lg:text-[80px] md:text-[70px] text-[40px] leading-[3rem] lg:leading-[6rem] text-center lg:text-left" style={{ color: "#210240" }}>{data.event_name}</h1>

        <p className="poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[14px] tracking-wide leading-6 font-medium text-center lg:text-left" style={{ color: "#210240" }}>
          {data.description}
        </p>

        <Link to={data.url} className="register-btn self-center lg:self-start py-2 px-8 w-fit" style={{ backgroundColor: "#023047", borderRadius: "4px", color: "white", fontSize: "20px", }}>Register</Link>
      </div>
    </div>
  );
};

export default Event;
