import React from 'react';
import OurService from './OurService/OurService';
import video from '../../../assets/images/banner/2.jpg';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const RightSide = ({ service }) => {
    const { img, title, description, facility } = service
    return (
        <div className='flex flex-col gap-8'>
            <div>
                <img src={img} className='w-full object-cover object-center rounded-lg' alt="" />
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-justify'>{description}</p>
            <div className='grid grid-cols-12 gap-4'>
                {
                    facility.map((fact, i) =>
                        <div className='col-span-12 md:col-span-6 p-10 bg-slate-200 rounded-md border-t-2 border-red-500' key={i}>
                            <OurService
                                fact={fact}
                            ></OurService>
                        </div>)
                }
            </div>
            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <h2 className='text-4xl font-bold'>3 Simple Steps to Process</h2>
            <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

            <div className='flex flex-col md:flex-row items-center  gap-7 text-center'>
                <div className='border flex justify-center items-center flex-col gap-6 rounded-md p-8'>
                    <span className='bg-red-500 border-8 border-red-300 px-5 py-4 inline text-white text-xl rounded-full'>01</span>
                    <h3 className='text-xl font-bold uppercase '>Step One</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className='border flex justify-center items-center flex-col gap-6 rounded-md p-8'>
                    <span className='bg-red-500 px-5 py-4 border-8 border-red-300 text-white text-xl rounded-full'>02</span>
                    <h3 className='text-xl font-bold uppercase '>Step Two</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className='border flex justify-center items-center flex-col gap-6 rounded-md p-8'>
                    <span className='bg-red-500 border-8 border-red-300 px-5 py-4 text-white text-xl rounded-full'>03</span>
                    <h3 className='text-xl font-bold uppercase '>Step Three</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            <div className='relative'>
                <img src={video} className='w-full object-cover object-center rounded-lg' alt="" />
                <button className='absolute left-[46%] top-[46%]'>
                    <AiOutlinePlayCircle className='text-7xl font-light text-red-500'></AiOutlinePlayCircle>
                </button>
            </div>
        </div>
    );
};

export default RightSide;