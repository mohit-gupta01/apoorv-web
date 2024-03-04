import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';


const Home = () => {
    return (
        <div className='flex flex-col gap-[60px]'>
            <Banner />
            <About />
        </div>
    );
};

export default Home;