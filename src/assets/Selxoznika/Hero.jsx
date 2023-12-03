import React from 'react'
import { Link } from 'react-router-dom'
import TelegramBtn from './TelegramBtn'
import { Number } from './Number'

const Hero = () => {
  return (
    <div className='background-img bg-no-repeat bg-cover'>
      <div className='bg-black bg-opacity-[68%]'>
        <div className='pt-[115px] pb-[93px]'>
          <div className='w-full max-w-[1440px] px-5 mx-auto'>
            <div>
              <h2 className='w-full max-w-[859px] text-white font-inter text-5xl font-medium mb-[22px] max-450:text-3xl'>ПРОИЗВОДИМ СЕЛЬХОЗТЕХНИКУ:</h2>
              <p className='text-white font-inter text-2xl mb-[28px]'>Ангары, Бороны, Опрыскиватели, Сельхозтехника, Запчасти</p>
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
                <Link to='https://t.me/MrBoi_Uz'>
                  <TelegramBtn />
                </Link>
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

export default Hero