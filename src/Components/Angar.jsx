import React from 'react'
import angarimg from '../Components/images/angarimg.png'
import { Link } from 'react-router-dom'
import StoimBolak from './StoimBolak'

const Angar = () => {
  return (
    <div>
      <div className='flex'>
        <img className='mr-[30px] max-1000:w-[400px] max-1000:h-[600px] max-1000:object-cover max-1000:object-center max-850:hidden' src={angarimg} alt="Angar img" />
        <div>
          <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Ангары бескаркасные</h3>
          <div className='flex mb-[31px] max-1000:hidden'>
            <div className='flex flex-col text-[#2F7B80] font-inter text-lg font-medium leading-[17px] underline mr-[31px] space-y-2'>
              <Link>Бескаркасные ангары-свинарники</Link>
              <Link>Бескаркасные зернохранилища</Link>
              <Link>Бескаркасные склады, гаражи</Link>
              <Link>Производственные <br /> бескаркасные сооружения</Link>
            </div>
            <div className='flex flex-col text-[#2F7B80] font-inter text-lg font-medium leading-[17px] underline space-y-2'>
              <Link>Бескаркасные навесы</Link>
              <Link>Бескаркасные овощехранилища</Link>
              <Link>Ангары для животноводства</Link>
              <Link>Авиационные ангары</Link>
            </div>
          </div>

          <div>
            <StoimBolak />
          </div>

          <div className=''>
            <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Преимущества бескаркасных ангаров:</h3>
            <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
              <li>Быстрая окупаемость проекта</li>
              <li>Скорость строительства (20 дней)</li>
              <li>Герметичность и прочность конструкции</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Angar