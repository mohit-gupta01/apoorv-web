import React from "react";
import "./Event.css";


import eventimg from "../../src/assets/event.jpg";

const Event = () => {

  return (
    <div className="flex flex-row items-center gap-[4vw] px-[10vw] h-[90vh] w-full">
      <div className="">
        <img
          src={eventimg}
          className="w-[30vw]"
          alt="event image"

        />
      </div>
      <div className="flex flex-col w-[40vw]">
        <h1 className="font-poppins text-6xl font-bold leading-123 tracking-normal text-left" style={{ color: "#210240" }}>Event Name</h1>
        <br></br>
        <p className="font-poppins text-lg font-medium leading-15 tracking-normal text-justify" style={{ color: "#210240" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          malesuada eget odio ac vehicula. Phasellus faucibus urna eget velit
          maximus tristique. Aenean interdum maximus nisl vel convallis. In hac
          habitasse platea dictumst. Ut vestibulum efficitur sapien et feugiat.
          Maecenas non orci imperdiet, eleifend neque ac, venenatis nibh. In
          lobortis neque vel odio iaculis, quis accumsan nisi varius. Ut
          ultricies ex euismod libero porta ullamcorper.
        </p>
        <br></br>
        <button className="register-btn" style={{ width: "150px", height: "40px", backgroundColor: "#023047", borderRadius: "4px", color: "white", fontSize: "20px", }}>Register</button>
      </div>
    </div>
  );
};

export default Event;
