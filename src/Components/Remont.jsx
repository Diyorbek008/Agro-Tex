import React from 'react'
import RemontImg from '../Components/images/RemontImg.png' 
import StoimBolak from './StoimBolak'

const Remont = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[400px] max-1000:h-[600px] max-1000:object-cover max-1000:object-center max-850:hidden' src={RemontImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Ангары бескаркасные</h3>

                    <div>
                        <StoimBolak />
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>В зависимости от назначения сооружения, могут <br /> быть выполнены следующие виды работ:</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li>Установка естественного освещения.</li>
                        <li>Монтаж естественной системы вентиляции.</li>
                        <li>Монтаж приточной и принудительной систем вентиляции.</li>
                        <li>Утепление сооружения.</li>
                        <li>Какие-либо другие виды работ, требуемые Заказчиком.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Remont