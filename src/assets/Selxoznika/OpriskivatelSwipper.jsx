import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import OpriskivatelImg1 from './images/OpriskivatelImg1.png'
import OpriskivatelImg2 from './images/OpriskivatelImg2.png'
import OpriskivatelImg3 from './images/OpriskivatelImg3.png'

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
                <div className='w-[1120px]'>
                    <SwiperSlide>
                        <img src={OpriskivatelImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={OpriskivatelImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={OpriskivatelImg3} alt="Boron Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={OpriskivatelImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={OpriskivatelImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={OpriskivatelImg3} alt="Boron Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
