import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
    return (
        <div>
            <div className='text-white font-inter text-xl font-medium leading-[21px] -tracking-[0.2px] mb-[11px]'>
                <Link to='/'>
                    АНГАРЫ
                </Link>
            </div>
            <div className='text-white font-inter text-xl font-medium leading-[21px] -tracking-[0.2px] mb-[11px]'>
                <Link to='/selxoznika'>
                    СЕЛЬХОЗТЕХНИКА
                </Link>
            </div>
            <div className='text-white font-inter text-xl font-medium leading-[21px] -tracking-[0.2px] mb-[11px]'>
                <Link to='/o_kompanii'>
                    О КОМПАНИИ
                </Link>
            </div>
            <div className='mb-[11px] text-white font-inter text-xl font-medium leading-[21px] -tracking-[0.2px]'>
                <Link to='/kontakt'>
                    КОНТАКТЫ
                </Link>
            </div>
            <div className='text-white font-inter text-xl font-medium leading-[21px] -tracking-[0.2px]'>
                <Link to='/nashi_raboti'>
                    НАШИ РАБОТЫ
                </Link>
            </div>
        </div>
    )
}

export default Footer2