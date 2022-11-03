import React from 'react';

const BannerItem = ({ slider }) => {
    return (
        <div className="h-[600px] relative rounded-2xl">
            <div className="img-gradient">
                <img
                    src={slider.image}
                    className="absolute object-cover object-center w-full h-full rounded-2xl"
                    alt=""
                />
            </div>
            <div className='relative py-16 px-10 sm:p-24'>
                <div className='flex flex-col gap-4 sm:gap-8'>
                    <h1 className='text-2xl sm:text-5xl text-white font-bold text-center sm:text-left'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <h2 className='text-white text-base sm:text-xl w-2/3 mx-auto sm:mx-0 text-center sm:text-left'>There Are Many Variations Of Passages Of  Available, <br /> But The Majority Have Suffered Alteration In Some Form</h2>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;