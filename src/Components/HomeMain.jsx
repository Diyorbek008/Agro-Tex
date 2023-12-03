import React from 'react'
import { Link } from 'react-router-dom'
import { Number } from './Number'

const HomeMain = () => {
    return (
        <div className='background-img bg-no-repeat bg-cover'>
            <div className='bg-black bg-opacity-[68%]'>
                <div className='pt-[115px] pb-[93px]'>
                    <div className='w-full max-w-[1440px] px-5 mx-auto'>
                        <div>
                            <h2 className='text-white font-inter text-5xl font-medium mb-[22px] max-500:text-2xl'>ИДЕАЛЬНЫЕ АНГАРЫ <br /> ЗАВОДСКОГО ИЗГОТОВЛЕНИЯ</h2>
                            <p className='text-white font-inter text-2xl mb-[28px] max-400:text-xl'>Ангары, Бороны, Опрыскиватели, Сельхозтехника, Запчасти</p>
                            <ul className='text-white font-inter text-2xl font-medium mb-[29px]'>
                                <li className='element relative pl-6'>
                                    напрямую от производителя
                                </li>
                                <li className='element relative pl-6'>
                                    абсолютно любых размеров
                                </li>
                            </ul>
                            <h3 className='uppercase text-white font-inter text-[32px]'>получить консультацию:</h3>
                            <div>
                                <div className='max-400:hidden'>

                                    <button className='bg-[#E10B20] px-[157px] py-[15px] rounded-md mb-5 max-450:px-[140px] max-400:px-[10px]'>
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

                                </div>
                                <Link to='tel:+998934541009'>
                                    <Number />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain