import React from 'react';
import group from '../../../assets/icons/group.svg';
import clock from '../../../assets/icons/clock.svg';
import support from '../../../assets/icons/person.svg';
import check from '../../../assets/icons/check.svg';
import delivery from '../../../assets/icons/deliveryt.svg';
import wrench from '../../../assets/icons/Wrench.svg';


const ChooseUs = () => {
    return (
        <div className='my-20 px-6 py-10'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Core Features</p>
                <h1 className='text-5xl font-bold'>Why Choose Us</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2  flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={group} alt="" />
                    <p className='text-xl font-bold'>Expert Team</p>
                </div>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={clock} alt="" />
                    <p className='text-xl font-bold'>Timely Delivery</p>
                </div>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={support} alt="" />
                    <p className='text-xl font-bold'>24/7 Support</p>
                </div>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={wrench} alt="" />
                    <p className='text-xl font-bold'>Best Equipment</p>
                </div>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={check} alt="" />
                    <p className='text-xl font-bold'>100% Guranty</p>
                </div>
                <div className='col-span-6 sm:col-span-4 lg:col-span-2 flex flex-col justify-center items-center border rounded-lg py-7 px-3 gap-3 hover:bg-red-500 transition-colors duration-300 hover:text-white cursor-pointer'>
                    <img src={delivery} alt="" />
                    <p className='text-sm font-bold'>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;