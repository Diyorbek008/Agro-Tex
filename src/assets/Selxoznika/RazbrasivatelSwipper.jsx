import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RazbrasivatelImg1 from './images/razbrasivatelImg1.png'
import RazbrasivatelImg2 from './images/razbrasivatelImg2.png'
import RazbrasivatelImg3 from './images/razbrasivatelImg3.png'

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
                        <img src={RazbrasivatelImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RazbrasivatelImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RazbrasivatelImg3} alt="Boron Img " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RazbrasivatelImg1} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RazbrasivatelImg2} alt="Boron Img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={RazbrasivatelImg3} alt="Boron Img " />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}
