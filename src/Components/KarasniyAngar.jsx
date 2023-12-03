import React from 'react'
import KarkasniyImg from '../Components/images/KarkasniyAngarImg.png'
import { Link } from 'react-router-dom'
import StoimBolak from './StoimBolak'

const KarasniyAngar = () => {
  return (
    <div>
      <div className='flex'>
        <img className='mr-[30px] max-1000:w-[400px] max-1000:h-[600px] max-1000:object-cover max-1000:object-center max-850:hidden' src={KarkasniyImg} alt="Angar img" />
        <div>
          <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Каркасные ангары</h3>
          <div className='flex mb-[31px] max-1000:hidden'>
            <div className='flex flex-col text-[#2F7B80] font-inter text-lg font-medium leading-[17px] underline mr-[31px] space-y-2'>
              <Link>Каркасные ангары</Link>
              <Link>Тока, каркасные навесы</Link>
              <Link>Прямостенные ангары</Link>
            </div>
            <div className='flex flex-col text-[#2F7B80] font-inter text-lg font-medium leading-[17px] underline space-y-2'>
              <Link>Автомойки и автосервисы</Link>
              <Link>Магазины</Link>
              <Link>Навесы</Link>
            </div>
          </div>

          <div>
            <StoimBolak />
          </div>

          <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Каркасные навесы:</h3>
          <ul className='font-inter text-xl leading-[19px] max-850:space-y-3'>
            <li>1. Скорость строительства (от 25 дней)</li>
            <li>2. Заказчик может выбрать цвет зашивки стен</li>
            <li>3. Возможность утепления закрытого сооружения</li>
            <li>4. Удобство загрузки и выгрузки продукции за счёт широких <br /> <span className='ml-[20px]'>проездов</span></li>
            <li>5. Возможность выбора профиля зашивки кровли и боковых <br /> <span className='ml-[20px]'>стен в зависимости от назначения</span></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default KarasniyAngar