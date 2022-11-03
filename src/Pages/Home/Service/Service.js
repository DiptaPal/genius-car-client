import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Service = ({ service }) => {
    const { img, price, title } = service
    return (
        <div className=''>
            <div className="p-6 border rounded-md card card-compact bg-base-100">
                <figure><img src={img} className='w-full h-[210px] object-cover rounded-lg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl text-red-500 font-semibold'>Price: ${price}</p>
                        <button className="text-2xl text-red-500"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;