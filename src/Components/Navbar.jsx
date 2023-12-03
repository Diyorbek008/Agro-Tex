import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#2F7B80] py-[22px] max-1000:hidden'>
      <div className='w-full max-w-[1440px] px-5 mx-auto'>
        <ul className='flex items-center justify-between'>
          <li className='text-white font-inter text-xl'>
            <NavLink to='/'>ГЛАВНЫЙ</NavLink>
          </li>
          <li className='text-white font-inter text-xl'>
            <NavLink to='/selxoznika'>СЕЛЬХОЗТЕХНИКА</NavLink>
          </li>
          <li className='text-white font-inter text-xl'>
            <NavLink to='/o_kompanii'>О КОМПАНИИ</NavLink>
          </li>
          <li className='text-white font-inter text-xl'>
            <NavLink to='/kontakt'>КОНТАКТЫ</NavLink>
          </li>
          <li className='text-white font-inter text-xl'>
            <NavLink to='/nashi_raboti'>НАШИ РАБОТЫ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar