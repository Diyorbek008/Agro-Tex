import React from 'react'
import OtpravitBtn from './TelegramBtn'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className='bg-[#B5D7D9]'>
            <div className='pb-[88px] pt-[79px]'>
                <div className='w-full max-w-[1440px] px-5 mx-auto'>
                    <div>
                        <h2 className='text-center font-inter text-5xl font-semibold mb-[35px] uppercase max-550:text-4xl'>Не нашли, что искали?</h2>

                        <h3 className='w-full max-w-[1320px] text-center font-inter text-4xl mb-[35px] max-550:text-3xl'>
                            Отправьте заявку — подберем необходимое оборудование или комплектующие, рассчитаем стоимость постройки или производства!
                        </h3>

                        <div className='flex justify-center'>
                            <Link to='https://t.me/MrBoi_Uz' className='mr-[14px]'>
                                <OtpravitBtn />
                            </Link>
                            <Link to='tel:998934541009'>
                                <div className='bg-[#2F7B80] rounded-md w-full max-w-[430px]'>
                                    <div className='flex justify-center max-850:hidden'>
                                        <a href='tel:+998934541009' className=' text-white text-center font-inter text-xl font-semibold leading-[14px] py-[18px] px-[130px]'>
                                            998 93 454 10 09
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA