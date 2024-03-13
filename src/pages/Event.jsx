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
      <div className="flex flex-col w-[75vw] lg:w-[40vw]">
        <h1 className="font-poppins text-6xl font-bold leading-123 tracking-normal text-center lg:text-left" style={{ color: "#210240" }}>{data.event_name}</h1>
        <br></br>
        <p className="font-poppins text-lg font-medium leading-15 tracking-normal text-justify" style={{ color: "#210240" }}>
          {data.description}
        </p>
        <br></br>
        <Link to={data.url} className="register-btn self-center lg:self-start py-2 px-8 w-fit" style={{ backgroundColor: "#023047", borderRadius: "4px", color: "white", fontSize: "20px", }}>Register</Link>
      </div>
    </div>
  );
};

export default Event;
