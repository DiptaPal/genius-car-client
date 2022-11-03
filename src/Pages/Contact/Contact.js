import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/checkout/checkout.png';

const Contact = () => {
    return (
        <div className='px-6 my-10'>
            <div className='mb-32'>
                <div className='relative'>
                    <div className='bg-image-blur'>
                        <img src={img1} className='w-full h-[300px] object-cover object-center rounded-xl' alt="" />
                    </div>
                    <div className='absolute top-[42%] left-6 md:left-16'>
                        <p className='text-xl md:text-4xl font-bold text-white'>Contact</p>
                    </div>
                    <div className='absolute clipper px-6 sm:px-10 left-14 sm:left-[39%] py-4 lg:px-16 text-center text-base md:text-xl bottom-0 bg-red-500'>
                        <Link to='/home' className='text-white'>Home</Link>
                        <span className='text-white'>/</span>
                        <Link className='text-white'>Contact</Link>
                    </div>
                </div>
            </div>
            <form className='bg-slate-200 p-6 md:p-24 rounded-lg flex flex-col gap-9'>
                <div className='flex flex-col md:flex-row w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="text" name="first_name" id="first_name" placeholder='First Name' required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="text" name="last_name" id="last_name" placeholder='Last Name' required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="number" name="number" id="number" placeholder='Your Phone' required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="email" name="email" id="email" placeholder='Your Email' required />
                    </div>
                </div>
                <div>
                    <textarea className='rounded-md w-full resize-none' name="about" id="about" rows="10"></textarea>
                </div>
                <button type='submit' className='w-full rounded-md bg-red-500 text-white py-3'>Order Confirm</button>

            </form>
        </div>
    );
};

export default Contact;