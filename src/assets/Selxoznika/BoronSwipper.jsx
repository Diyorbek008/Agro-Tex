import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BoronImg1 from './images/BoronSwipperImg1.png'
import BoronImg2 from './images/BoronSwipperImg2.png'
import BoronImg3 from './images/BoronSwipperImg3.png'

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
                        <img src={BoronImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BoronImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BoronImg3} alt="Boron Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BoronImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BoronImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BoronImg3} alt="Boron Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
