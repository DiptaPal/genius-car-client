import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import shop from '../../../assets/icons/Shop.svg'
import './PopularProduct.css'

const PopularProduct = ({ product }) => {
    const { title, img, price } = product
    return (
        <div>
            <div className="relative p-6 border rounded-md card card-compact bg-base-100 hover_effect hover:cursor-pointer">
                <div>
                    <figure className='bg-gray-200 p-7 rounded-lg'><img src={img} className='w-[156px] h-[153px] rounded-lg' alt="Shoes" /></figure>
                    <div className="card-body flex items-center justify-center">
                        <div className='text-center flex flex-col gap-2'>
                            <div className='flex items-center justify-center gap-1 text-center'>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                            </div>
                            <h2 className="card-title text-3xl font-bold">{title}</h2>
                            <p className='text-2xl text-red-500 font-semibold'>Price: ${price}</p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-12 top-14 hidden icon_effect'>
                    <img src={shop} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;