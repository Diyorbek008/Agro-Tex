import React from 'react'
import BoronImg from '../Components/images/BoronImg.png'
import HomeTab2Bolak from './HomeTab2Bolak'

const Boron = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[500px] max-1000:object-cover max-1000:object-center max-850:hidden' src={BoronImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Бороны</h3>
                    

                    <div>
                        <HomeTab2Bolak/>
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Применение:</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li>обработки почвы до стадии появления всходов и после;</li>
                        <li>работ по сохранению нормальной влажности почвы;</li>
                        <li>для выравнивания верхнего почвенного слоя;</li>
                        <li>для борьбы с сорняками на их ранней (ниточковой) фазе.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Boron