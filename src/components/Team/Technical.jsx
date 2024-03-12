import React from 'react'
import "./Team.css";
import { Icon } from '@iconify/react';


const Technical = () => {
    return (
        <div className='relative flex flex-col text-center gap-5 mt-10'>
            <div className='header p-10'>
                <h1>Technical Team</h1>
            </div>
            <div className="hidden xl:block absolute top-0 left-[12vw] w-[20vw]">
                <img src="/assets/images/nontech.png" alt="" />
            </div>
            <div class="container">
                <div class="card cardi">
                    <div class="border">
                        <h2 className='card-title'>Al Pacino</h2>
                        <div class="icons">
                            <i class="fa" aria-hidden="true"><Icon icon="teenyicons:instagram-outline" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:linkedin" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:github" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:twitter" /></i>
                            {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
                        </div>
                    </div>
                </div>
                <div class="card cardi">
                    <div class="border">
                        <h2 className='card-title'>Ben Stiller</h2>
                        <div class="icons">
                            <i class="fa" aria-hidden="true"><Icon icon="teenyicons:instagram-outline" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:linkedin" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:github" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:twitter" /></i>
                            {/* <i class="fa" aria-hidden="true"></i> */}
                        </div>
                    </div>
                </div>
                <div class="card cardi">
                    <div class="border">
                        <h2 className='card-title'>Patrick Stewart</h2>
                        <div class="icons">
                            <i class="fa" aria-hidden="true"><Icon icon="teenyicons:instagram-outline" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:linkedin" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:github" /></i>
                            <i class="fa" aria-hidden="true"><Icon icon="bi:twitter" /></i>
                            {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technical