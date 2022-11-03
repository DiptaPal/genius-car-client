import React, { useRef } from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/3.jpg'
import img3 from '../../../assets/images/team/2.jpg'
import Team from '../Team/Team';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper";



const Teams = () => {
    const images = [
        {
            id: '01',
            img: img1,
            title: 'Car Engine Plug',
            expert: 'Engine Expert'
        },
        {
            id: '02',
            img: img2,
            title: 'Car Engine Plug',
            expert: 'Engine Expert'
        },
        {
            id: '03',
            img: img3,
            title: 'Car Engine Plug',
            expert: 'Engine Expert'
        }
    ]

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (

        <div className='my-20 px-6'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Team</p>
                <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
            </div>
            <div className='relative'>
                <button
                    ref={prevRef}
                    className='absolute p-[16px] bg-gray-400 rounded-full -left-8 top-1/2 z-50'
                >
                    <span className='text-center text-xl text-white opacity-100'>
                        <AiOutlineArrowLeft />
                    </span>
                </button>
                <button
                    ref={nextRef}
                    className='absolute p-[16px] bg-red-500  rounded-full -right-8 top-1/2  z-50'
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
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay,Navigation]}
                    className="mySwiper"
                >
                    {
                        images.map(image => <SwiperSlide key={image.id}>
                            <Team image={image}></Team>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Teams;