import React from "react";
import { About_Image } from "../../assets";

const About = () => {
    return (
        <div id="about">
            <div className="flex flex-row justify-between items-center">
                <div className="hidden md:block xl:w-[550px] xl:ml-[100px]">
                    <img src={About_Image} alt="" />
                </div>
                <div className="flex flex-col items-center xl:w-[650px] m-10 md:m-0 lg:mr-[20px] xl:mr-[80px] gap-5">
                    <h1 className="poppins font-extrabold xl:text-[100px] lg:text-[80px] md:text-[70px] text-[60px] leading-[6rem]">
                        About
                    </h1>
                    <p className="poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[14px] xl:w-full lg:w-[450px] md:[350px] w-[350px] tracking-wide leading-7 font-medium text-center">
                        In the essence of its name, Apoorv stands as a beacon of the
                        unprecedented, the extraordinary. It epitomizes our unwavering
                        commitment to cultivating a vibrant, inclusive, and genuinely
                        one-of-a-kind environment. At Apoorv, we embark on a mission with a
                        singular goal: to provide a dynamic platform that not only
                        encourages students to showcase their myriad talents but also
                        fosters meaningful connections with like-minded individuals. It's a
                        celebration of uniqueness, a canvas where creativity knows no
                        bounds, and memories are woven into the fabric of a lifetime. Join
                        us in crafting experiences that transcend the ordinary, making
                        Apoorv a journey that resonates with the extraordinary in each one
                        of us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
