import React from 'react'
import ProchayaImg from '../Components/images/ProchayaImg.png'
import HomeTab2Bolak from './HomeTab2Bolak'

const Prochaya = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[500px] max-1000:object-cover max-1000:object-center max-850:hidden' src={ProchayaImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Прочая сельхозтехника</h3>


                    <div>
                        <HomeTab2Bolak/>
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Продукция компании эргономична и современна:</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li className='w-full max-w-[570px]'>процесс подготовки её к работе занимает минимум времени и не требует специальных навыков;</li>
                        <li className='w-full max-w-[570px  ]'>вся продукция компании выверена отечественными ГОСТами, отвечает мировым стандартам качества и действующим нормативам ГНУ ВИЗР.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Prochaya