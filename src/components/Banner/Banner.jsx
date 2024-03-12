import React from 'react'
import { banner } from '../../assets';


const Banner = () => {
    return (
        <div className='flex flex-row items-center justify-between xl:mt-[0px] mt-[120px]'>
            <div className='flex flex-col ml-[20px] xl:ml-[200px] md:ml-10 gap-1'>
                <h1 className='poppins font-extrabold xl:text-[100px] lg:text-[80px] md:text-[70px] text-[60px] leading-[6rem]'>APOORV</h1>
                <h2 className='poppins font-medium lg:text-[50px] md:text-[40px] text-[32px]'>Mar 22 - 24</h2>
                <p className='poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[12px] xl:w-[500px] lg:w-[450px] md:[350px] w-[350px] tracking-wide leading-5'>A fest that celebrates both the innumerous shades of our culture and the bluey horizons of technology with a tint of literature in it too.</p>
                <button className='lg:text-[26px] md:text-[20px] text-[14px] text-[#F5C98A] bg-[#023047] w-max px-3 py-1 rounded-md mt-4 '>Register Now</button>
            </div>
            <div className="mt-[5rem]">
                <img className='w-[900px] ' src={banner} alt="" />
            </div>
        </div>
    )
}

export default Banner;