import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/checkout/checkout.png';

const Blog = () => {
    return (
        <div className='px-6 my-10'>
            <div className='mb-32'>
                <div className='relative'>
                    <div className='bg-image-blur'>
                        <img src={img1} className='w-full h-[300px] object-cover object-center rounded-xl' alt="" />
                    </div>
                    <div className='absolute top-[42%] left-6 md:left-16'>
                        <p className='text-xl md:text-4xl font-bold text-white'>Blog</p>
                    </div>
                    <div className='absolute clipper px-6 sm:px-10 left-14 sm:left-[39%] py-4 lg:px-16 text-center text-base md:text-xl bottom-0 bg-red-500'>
                        <Link to='/home' className='text-white'>Home</Link>
                        <span className='text-white'>/</span>
                        <Link className='text-white'>Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;