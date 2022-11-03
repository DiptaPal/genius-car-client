import React from 'react';

const OurService = ({fact}) => {
    const {name, details} = fact
    return (
        <div>
            <h4 className='text-xl font-bold pb-2'>{name}</h4>
            <p>{details}</p>
        </div>
    );
};

export default OurService;