import React from 'react';
import ErrorImg from '../../assets/images/Error/Frame.svg'
import Header from '../Shared/Header/Header';

const ErrorPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <div className='flex justify-center items-center mt-24 px-6'>
                <img src={ErrorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;