import React from 'react'
import "./Team.css";
import { Icon } from '@iconify/react';

const NonTechnical = () => {
    return (
        <div className='relative flex flex-col text-center gap-[50px] pt-[100px]'>
            <div className='header'>
                <h1>Our Team</h1>
            </div>
            <div className="hidden xl:block absolute top-8 left-[15vw] w-[25vw]">
                <img src="/assets/images/tech.png" alt="" />
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

export default NonTechnical