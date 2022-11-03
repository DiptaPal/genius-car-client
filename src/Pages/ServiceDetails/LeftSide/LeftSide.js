import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import downIcon from '../../../assets/icons/Download.svg'
import logo from '../../../assets/logo.svg'

const LeftSide = ({price}) => {
    return (
        <div>
            <div className='bg-slate-200 rounded-lg p-10 mb-8'>
                <h3 className='text-2xl font-bold mb-5'>Services</h3>
                <div className='flex flex-col gap-5'>
                    <button className='w-full rounded-md bg-white hover:bg-red-500 text-black hover:text-white py-3'>
                        <div className='flex justify-between items-center px-4'>
                            <p className='font-semibold'>Full Car Repair</p>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </button>
                    <button className='w-full rounded-md bg-white hover:bg-red-500 text-black hover:text-white py-3'>
                        <div className='flex justify-between items-center px-4'>
                            <p className='font-semibold'>Engine Repair</p>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </button>
                    <button className='w-full rounded-md bg-white hover:bg-red-500 text-black hover:text-white py-3'>
                        <div className='flex justify-between items-center px-4'>
                            <p className='font-semibold'>Automatic Services</p>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </button>
                    <button className='w-full rounded-md bg-white hover:bg-red-500 text-black hover:text-white py-3'>
                        <div className='flex justify-between items-center px-4'>
                            <p className='font-semibold'>Engine Oil Change</p>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </button>
                    <button className='w-full rounded-md bg-white hover:bg-red-500 text-black hover:text-white py-3'>
                        <div className='flex justify-between items-center px-4'>
                            <p className='font-semibold'>Battery Charge</p>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </div>
                    </button>
                </div>
            </div>

            <div className='bg-black rounded-lg p-10 mb-8 text-white'>
                <h3 className='text-2xl font-bold mb-5'>Download</h3>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between flex-wrap items-center'>
                        <div className='flex items-center flex-wrap gap-4'>
                            <img src={downIcon} alt="" />
                            <div>
                                <h3 className='text-xl'>Our Brochure</h3>
                                <p className='font-light'>Download</p>
                            </div>
                        </div>
                        <button className='bg-red-500 rounded-md p-4'>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                    <div className='flex justify-between flex-wrap items-center'>
                        <div className='flex items-center flex-wrap gap-4'>
                            <img src={downIcon} alt="" />
                            <div>
                                <h3 className='text-xl'>Company Details</h3>
                                <p className='font-light'>Download</p>
                            </div>
                        </div>
                        <button className='bg-red-500 rounded-md p-4'>
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='bg-black rounded-lg p-10 mb-8 pb-16 text-white flex flex-col gap-5 justify-center items-center'>
                <img src={logo} alt="" />
                <p className='text-2xl font-semibold text-center'>Need Help? We Are Here <br />To Help You</p>
                <div className='relative'>
                    <div className='bg-white rounded-md p-8 pb-14 text-center'>
                        <p className='text-2xl font-semibold text-black'><span className='text-red-500'>Car Doctor</span> Special</p>
                        <p className='text-black'>Save up to <span className='text-red-500'>60% off</span></p>
                    </div>
                    <button className='absolute -bottom-5 left-1/4 w-[50%] mx-auto rounded-md bg-red-500 text-white py-3'>Get A Quote</button>
                </div>
            </div>

            <h2 className='mb-8 text-3xl font-bold'>Price ${price}</h2>
            <button className='w-full rounded-md bg-red-500 text-white py-3'>Proceed Checkout</button>
        </div>
    );
};

export default LeftSide;