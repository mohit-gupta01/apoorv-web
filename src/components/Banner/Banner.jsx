import React from 'react'

const Banner = () => {
    return (
        <div className='flex flex-row gap-5 m-[15px] md:m-[54px]'>
            <div className='flex flex-col'>
                <h1 className='poppins-extrabold lg:text-[80px] md:text-[60px] text-[54px]'>APOORV</h1>
                <h2 className='poppins-medium lg:text-[50px] md:text-[40px] text-[32px]'>Mar 22 - 24</h2>
                <p className='poppins-regular text-[#000000] lg:text-[18px] md:text-[16px] text-[12px] md:w-[540px] w-[350px]'>A fest that celebrates both the innumerous shades of our culture and the bluey horizons of technology with a tint of literature in it too</p>
                <button className='md:text-[32px] text-[20px] text-[#F5C98A] bg-[#023047] w-max px-3 py-1 rounded-xl mt-4 '>Register Now</button>
            </div>
        </div>
    )
}

export default Banner;