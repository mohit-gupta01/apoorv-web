import React from 'react'
import "./Team.css";
import { ApoorvTeam } from '../../data/data';

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
                {ApoorvTeam?.map((item, i) => (
                    <div key={i} class="profilecard cardi" style={{ backgroundImage: `url(${item.image})` }}>
                        <div class="border">
                            <h2 className='card-title'>{item.name}</h2>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NonTechnical;