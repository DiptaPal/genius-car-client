import React, { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import customer1 from '../../../assets/images/feedback/img1.svg';
import customer2 from '../../../assets/images/feedback/img2.svg';
import question from '../../../assets/icons/quote.svg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Customer = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='my-20 px-6 py-10'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Testimonial</p>
                <h1 className='text-5xl font-bold'>What Customer Says</h1>
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
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
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
                    <SwiperSlide>
                        <div className='flex flex-col gap-6 border rounded-md p-12'>
                            <div className='flex items-center gap-12'>
                                <div className='flex flex-wrap items-center gap-6'>
                                    <img src={customer1} alt="" />
                                    <div>
                                        <h3 className='text-2xl font-bold'>Awlad Hossain</h3>
                                        <p className='text-lg font-bold text-gray-400'>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={question} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <div className='flex items-center justify-start gap-1 text-center'>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-6 border rounded-md p-12'>
                            <div className='flex items-center gap-12'>
                                <div className='flex flex-wrap items-center gap-6'>
                                    <img src={customer2} alt="" />
                                    <div>
                                        <h3 className='text-2xl font-bold'>Awlad Hossain</h3>
                                        <p className='text-lg font-bold text-gray-400'>Businessman</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={question} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <div className='flex items-center justify-start gap-1 text-center'>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                                <AiFillStar className='text-xl text-orange-500'></AiFillStar>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Customer;