import React from 'react';
import nepalMap from '../../../assets/NepalMap.png';

const WhereWeWork = () => {

    return (
        <div className="w-full overflow-hidden px-16 -mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-blue">
                Where We Work
            </h2>
            <img 
                src={nepalMap} 
                alt="Canopy Nepal's Impact Map"
                className="w-full h-auto hover:scale-105 mb-4" 
            />
        </div>
    );
};

export default WhereWeWork;
