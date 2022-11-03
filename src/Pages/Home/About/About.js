import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-36">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className='relative lg:w-1/2'>
                    <img src={person} alt="" className='w-[520px] h-[560px] lg:mx-auto object-cover object-left rounded-xl' />
                    <img src={parts} alt="" className='rounded-xl w-[330px] h-[330px] absolute object-cover right-0 sm:-right-12 -bottom-20 border-8 border-white' />
                </div>
                <div className='lg:w-1/2'>
                    <div className=' text-center lg:text-left'>
                        <h3 className='text-red-500 text-xl font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6 text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-xl'>The Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn text-white font-semibold btn-error mt-8">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;