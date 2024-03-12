import React from 'react'
import { About_Image } from '../../assets';

const About = () => {
    return (
        <div id='about'>
            <div className="flex flex-row justify-between items-center">
                <div className="xl:w-[550px] xl:ml-[100px]">
                    <img src={About_Image} alt="" />
                </div>
                <div className="flex flex-col items-center lg:mr-[20px] xl:mr-[80px]">
                    <h1 className='poppins-bold xl:text-[74px] lg:text-[55px] md:text-[40px]'>About</h1>
                    <p className='poppins-medium xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:w-[650px] md:w-[350px] text-center'>
                        In the essence of its name, Apoorv stands as a beacon of the unprecedented, the extraordinary. It epitomizes our unwavering commitment to cultivating a vibrant, inclusive, and genuinely one-of-a-kind environment. At Apoorv, we embark on a mission with a singular goal: to provide a dynamic platform that not only encourages students to showcase their myriad talents but also fosters meaningful connections with like-minded individuals. It's a celebration of uniqueness, a canvas where creativity knows no bounds, and memories are woven into the fabric of a lifetime. Join us in crafting experiences that transcend the ordinary, making Apoorv a journey that resonates with the extraordinary in each one of us.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;