import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex flex-row justify-between items-center">
            <div className="xl:w-[550px]">
                <img src="/assets/images/AboutImage.png" alt="" />
            </div>
            <div className="flex flex-col items-center mr-[80px]">
                <h1 className='poppins-bold lg:text-[74px]'>About</h1>
                <p className='poppins-medium xl:text-[24px] xl:w-[700px] text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a facilis, debitis vel vero ad, placeat necessitatibus deleniti mollitia molestias omnis hic nesciunt, architecto nostrum quisquam autem praesentium quaerat iste?
                    Temporibus architecto non iusto, iure perspiciatis minus, recusandae fugiat cumque necessitatibus repellendus sunt amet aut maxime vel sit aliquam maiores neque reiciendis beatae soluta unde omnis! Aliquid iusto accusamus voluptate.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About;