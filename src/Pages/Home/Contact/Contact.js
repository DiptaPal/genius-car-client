import React from 'react';
import calander from '../../../assets/icons/contact/Group 32.svg'
import call from '../../../assets/icons/contact/Group 34.svg'
import location from '../../../assets/icons/contact/Group 35.svg'

const Contact = () => {
    return (
        <div className='flex flex-row flex-wrap gap-10 sm:gap-4 justify-center text-center sm:text-left sm:justify-between items-center bg-black px-16 text-white rounded-md py-16 mx-6'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <img src={calander} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <img src={call} alt="" />
                <div>
                    <p>Have a question?</p>
                    <p className='text-2xl'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <img src={location} alt="" />
                <div>
                    <p>Need a repair? our address</p>
                    <p className='text-2xl'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;