import React, { useEffect } from 'react';
import Technical from '../components/Team/Technical';


const Developer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Technical />
        </div>
    )
}

export default Developer;