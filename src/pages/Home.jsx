import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex flex-col gap-[60px]'>
            <Banner />
            <About />
        </div>
    );
};

export default Home;