import React from 'react'
import Img1 from './images/Afzalliklarimizimg1.png'
import Img2 from './images/Afzalliklarimizimg2.png'
import Img3 from './images/Afzalliklarimizimg3.png'
import Img4 from './images/Afzalliklarimizimg4.png'
import Img5 from './images/Afzalliklarimizimg5.png'
import Img6 from './images/Afzalliklarimizimg6.png'

const Afzalliklarimiz = () => {
    return (
        <div className='pb-[106px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-11 font-inter text-5xl font-semibold uppercase max-450:text-2xl'>
                    Наши преимущества
                </h2>
                <div className='grid grid-cols-2 gap-[113px] max-590:gap-0 max-590:grid-cols-1'>
                    {/* 1 */}
                    <div>
                        {/* 1 */}
                        <div className='mb-[114px] flex items-start'>
                            <img className='mr-6 max-800:w-[50px] max-590:w-[100px]' src={Img1} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold max-800:text-[30px]'>
                                    Гарантия
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl max-800:text-[20px]'>
                                    На каждый наш объект мы даем гарантию на несущие конструкции
                                </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='mb-[104px] flex items-start max-930:mt-[210px] max-590:mt-[0px]'>
                            <img className='mr-6 max-800:w-[50px] max-590:w-[100px]' src={Img2} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold max-800:text-[30px]'>
                                    Опытные бригады
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl max-800:text-[20px]'>
                                    Мы не набираем "непонятные" бригады из интернета. Наши люди более 5 лет работают с нами
                                </p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex items-start max-930:hidden'>
                            <img className='mr-6' src={Img3} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold'>
                                    СРО
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl '>
                                    Мы саморегулируемая организация и у нас есть соответствующий допуск. Гарантия надёжности
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        {/* 1 */}
                        <div className='mb-[55px] flex items-start'>
                            <img className='mr-6 max-800:w-[50px] max-590:w-[100px]' src={Img4} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold max-800:text-[30px]'>
                                    Без скрытых платежей
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl max-800:text-[20px]'>
                                    В отличие от конкурентов, мы гарантируем, что цена в договоре неизменна при любых обстоятельствах
                                </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='mb-[55px] flex items-start'>
                            <img className='mr-6 max-800:w-[50px] max-590:w-[100px]' src={Img5} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold max-800:text-[30px]'>
                                    Своя база и техника
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl max-800:text-[20px]'>
                                    Мы обеспечиваем низкие цены за счёт того что у нас своя производственная база со всем необходимым оборудованием и спец.техникой
                                </p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='mb-[55px] flex items-start max-930:hidden'>
                            <img className='mr-6' src={Img6} alt="Logo" />
                            <div>
                                <h3 className='font-inter text-[40px] font-semibold'>
                                    Под ключ
                                </h3>
                                <p className='w-full max-w-[440px] font-inter text-2xl '>
                                    Выполняем полный комплекс работ - от проектирования до сдачи в эксплуатацию, помогаем с благоустройством, оформляем документы
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Afzalliklarimiz