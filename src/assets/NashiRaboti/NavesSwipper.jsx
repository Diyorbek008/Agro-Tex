import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavesImg1 from './images/NavesSwipperImg1.png'
import NavesImg2 from './images/NavesSwipperImg2.png'
import NavesImg3 from './images/NavesSwipperImg3.png'

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
                        <img src={NavesImg1} alt="Naves Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={NavesImg2} alt="Naves Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={NavesImg3} alt="Naves Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={NavesImg1} alt="Naves Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={NavesImg2} alt="Naves Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={NavesImg3} alt="Naves Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
