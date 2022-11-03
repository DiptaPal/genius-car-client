import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Team = ({ image }) => {
    const { img, title, expert } = image;
    return (
        <div className="p-6 border rounded-md card card-compact bg-base-100">
            <figure><img src={img} className='w-full h-[210px] object-cover rounded-lg' alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl font-bold">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl text-gray-500 font-semibold'>{expert}</p>
                </div>
                <div className='flex items-center justify-center gap-3 mt-2'>
                    <div className='bg-blue-700 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsFacebook className='text-white text-5xl'></BsFacebook></div>
                    <div className='bg-sky-600 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsTwitter className='text-white text-5xl'></BsTwitter></div>
                    <div  className='bg-blue-500 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsLinkedin className='text-white text-5xl'></BsLinkedin></div>
                    <div  className='bg-pink-700 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsInstagram className='text-white text-5xl'></BsInstagram></div>
                </div>
            </div>
        </div>
    );
};

export default Team;