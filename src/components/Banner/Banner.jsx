import React from 'react'
import { banner } from '../../assets';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex flex-row items-center justify-between lg:mt-[0px] mt-[120px]'>
            <div className='z-50 flex flex-col ml-[20px] xl:ml-[200px] md:ml-10 gap-1 h-[80vh] md:h-fit'>
                <h1 className='poppins font-extrabold xl:text-[100px] lg:text-[80px] md:text-[70px] text-[60px] leading-[6rem]'>APOORV</h1>
                <h2 className='poppins font-medium lg:text-[50px] md:text-[40px] text-[32px]'>Mar 22 - 24</h2>
                <p className='poppins-regular text-[#000000] lg:text-[16px] md:text-[14px] text-[14px] xl:w-[500px] lg:w-[450px] md:[350px] w-[350px] tracking-wide leading-5 font-medium'>A fest that celebrates both the innumerous shades of our culture and the bluey horizons of technology with a tint of literature in it too.</p>
                <Link to="https://unstop.com/college-fests/apoorv-2024-indian-institute-of-information-technology-iiit-kottayam-224937" className='lg:text-[26px] md:text-[20px] text-[14px] text-[#F5C98A] bg-[#023047] w-max px-3 py-1 rounded-md mt-4 '>Register Now</Link>
            </div>
            <div className="absolute md:relative top-[30vh] md:top-0 mt-[5rem] lg:mt-[1rem]">
                <img className='w-[130vw] md:w-[900px]' src={banner} alt="" />
            </div>
        </div>
    )
}

export default Banner;