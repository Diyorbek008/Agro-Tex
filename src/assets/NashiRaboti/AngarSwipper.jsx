import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AngarImg1 from './images/AngarSwipperImg1.png'
import AngarImg2 from './images/AngarSwipperImg2.png'
import AngarImg3 from './images/AngarSwipperImg3.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <button className='swiper-slider swiper-slider-next'>tyh</button>
                <div className='w-[1120px]'>
                    <SwiperSlide>
                        <img src={AngarImg1} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AngarImg2} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AngarImg3} alt="Angar Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AngarImg1} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AngarImg2} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AngarImg3} alt="Angar Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
