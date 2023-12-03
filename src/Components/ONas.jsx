import React from 'react'
import OnasImg1 from './images/OnasImg1.png'
import OnasImg2 from './images/OnasImg2.png'
import OnasImg3 from './images/OnasImg3.png'
import ONas2qism1 from './images/ONas2qism1.png'
import ONas2qism2 from './images/ONas2qism2.png'
import ONas2qism3 from './images/ONas2qism3.png'
import PastkiImg1 from './images/O_Nasimg1.png'
import PastkiImg2 from './images/O_Nasimg2.png'
import PastkiImg3 from './images/O_Nasimg3.png'
import PastkiImg4 from './images/O_Nasimg4.png'

const ONas = () => {
    return (
        <div className='pb-[103px] max-720:pb-[0px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                
                <div className='grid grid-cols-2 gap-[41px] max-1300:grid-cols-1'>
                    <div>
                        <p className='mb-[21px] w-full max-w-[762px] font-inter text-2xl max-590:text-xl'>
                            ООО “АГРО-ТЕХ” было создано с целью удовлетворения потребностей отечественных сельхозпроизводителей в надежной и практичной технике. В настоящее время это успешно развивающаяся компания с внушительным опытом работы в производственной и строительной сфере.
                            <br /> <br />
                            ООО “АГРО-ТЕХ” уже на протяжении длительного времени является одной из наиболее заметных компаний изготовителей на рынке сельскохозяйственной техники. Основная сфера нашей деятельности это – ангары и сельхозтехника от производителя.
                        </p>

                        <div>
                            <div className='mb-[22px] py-[27px] pl-6 bg-[#F8F9FA]'>
                                {/* 1 */}
                                <div className='mb-[19px] flex items-start'>
                                    <img className='mr-[31px]' src={OnasImg1} alt="Logo" />
                                    <div>
                                        <span className='mb-[11px] font-inter text-2xl font-semibold uppercase max-590:text-xl'>
                                            Качество и приемлемая цена
                                        </span>
                                        <p className='text-[#646464] font-inter text-lg max-590:text-[15px]'>
                                            предприятие создает столь же качественные, недорогие и адаптированные к российским реалиям отечественные аналоги сельскохозяйственной техники.
                                        </p>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className='mb-[19px] flex items-start'>
                                    <img className='mr-[31px]' src={OnasImg2} alt="Logo" />
                                    <div>
                                        <span className='mb-[11px] font-inter text-2xl font-semibold uppercase max-590:text-xl'>
                                            СЕРТИФИКАТЫ
                                        </span>
                                        <p className='text-[#646464] font-inter text-lg max-590:text-[15px]'>
                                            все предлагаемые машины сертифицированы, во многих из них используются собственные запатентованные разработки.
                                        </p>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className='flex items-start'>
                                    <img className='mr-[31px]' src={OnasImg3} alt="Logo" />
                                    <div>
                                        <span className='mb-[11px] font-inter text-2xl font-semibold uppercase max-590:text-xl'>
                                            Партнерство
                                        </span>
                                        <p className='text-[#646464] font-inter text-lg max-590:text-[15px]'>
                                            компания имеет десятки фирм-партнеров как на территории России, так и в странах ближнего и дальнего зарубежья.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='max-1300:hidden'>
                            <img className='w-full h-full max-h-[408px] mb-5' src={ONas2qism1} alt="Img" />
                            <div className='flex'>
                                <img className='w-full h-full max-h-[328px] mr-[23px]' src={ONas2qism2} alt="Img" />
                                <img className='w-full h-full max-h-[328px]' src={ONas2qism3} alt="Img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <img className='max-950:ml-[100px] max-850:hidden' src={PastkiImg1} alt="O Nas img" />
                    <img className='max-950:mr-[100px] max-850:hidden' src={PastkiImg2} alt="O Nas img" />
                    <img className='max-950:hidden' src={PastkiImg3} alt="O Nas img" />
                    <img className='max-1200:hidden' src={PastkiImg4} alt="O Nas img" />
                </div>
            </div>
        </div>
    )
}

export default ONas