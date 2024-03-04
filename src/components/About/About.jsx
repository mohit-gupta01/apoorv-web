import React from 'react'

const About = () => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <div className="xl:w-[550px]">
                    <img src="/assets/images/AboutImage.png" alt="" />
                </div>
                <div className="flex flex-col items-center mr-[80px]">
                    <h1 className='poppins-bold xl:text-[74px] lg:text-[55px] md:text-[40px]'>About</h1>
                    <p className='poppins-medium xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:w-[650px] md:w-[350px] text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a facilis, debitis vel vero ad, placeat necessitatibus deleniti mollitia molestias omnis hic nesciunt, architecto nostrum quisquam autem praesentium quaerat iste?
                        Temporibus architecto non iusto, iure perspiciatis minus, recusandae fugiat cumque necessitatibus repellendus sunt amet aut maxime vel sit aliquam maiores neque reiciendis beatae soluta unde omnis! Aliquid iusto accusamus voluptate.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;