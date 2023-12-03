import React from 'react'
import Stoimimg1 from '../Components/images/Stoimimg1.png'
import Stoimimg2 from '../Components/images/Stoimimg2.png'
import Stoimimg3 from '../Components/images/Stoimimg3.png'

const HomeTab2Bolak = () => {
    return (
        <div>
            <p className='font-inter text-xl font-light leading-[19px] mb-[15px]'>Цена рассчитывается индивидуально по согласованному <br /> техническому заданию</p>

            <h3 className='text-inter text-[32px] mb-3'>Получить расчет:</h3>
            <div className='flex'>
                <div className='mr-3'>
                    <a href="https://t.me/MrBoi_Uz">
                    <button className='bg-[#E10B20] px-[40px] py-[15px] rounded-md mb-5'>
                        <div className='flex items-center justify-center'>
                            <h1 className='mr-[10px] text-white text-center font-inter text-xl font-semibold leading-[14px]'>
                                Telegram
                            </h1>
                            {/* Telegram Svg */}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18px" height="20px"><path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" fill='#fff' /></svg>
                            </div>
                        </div>
                    </button>
                    </a>
                </div>
                <div>
                    <div className='bg-[#2F7B80] rounded-md'>
                        <div className='flex justify-center'>
                            <a href='tel:+998934541009' className='text-white text-center font-inter text-xl font-semibold leading-[14px] py-[18px] px-[18px] max-1100:px-[10px] max-1090:hidden'>
                                998 93 454 10 09
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTab2Bolak