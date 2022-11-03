import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import slider1 from '../../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../../assets/images/homeCarousel/4.jpg';
import './Banner.css'
import BannerItem from './BannerItem';


const bannerData = [
    {
        image: slider1,
        id: '01'
    },
    {
        image: slider2,
        id: '02'
    },
    {
        image: slider3,
        id: '03'
    },
    {
        image: slider4,
        id: '04'
    }
]

const Banner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className='h-[600px] relative w-full my-10 px-4'>
            <button
                ref={prevRef}
                className='absolute p-[18px] bg-prevColor rounded-full right-32 bottom-8 z-50'
            >
                <span className='text-center text-xl text-white opacity-100'>
                    <AiOutlineArrowLeft />
                </span>
            </button>
            <button
                ref={nextRef}
                className='absolute p-[18px] bg-red-500 right-14 rounded-full bottom-8 z-50'
            >
                <span className='text-center text-xl text-white'>
                    <AiOutlineArrowRight />
                </span>
            </button>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="">

                {
                    bannerData.map(slider =>
                            <SwiperSlide key={slider.id} >
                                <BannerItem slider={slider}>

                                </BannerItem>
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </div>
    );
};

export default Banner;