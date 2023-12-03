import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TentoviyImg1 from './images/TentoviySwipperImg1.png'
import TentoviyImg2 from './images/TentoviySwipperImg2.png'
import TentoviyImg3 from './images/TentoviySwipperImg3.png'

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
                        <img src={TentoviyImg1} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TentoviyImg2} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TentoviyImg3} alt="Angar Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TentoviyImg1} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TentoviyImg2} alt="Angar Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TentoviyImg3} alt="Angar Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
