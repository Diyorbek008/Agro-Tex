import React from 'react'
import Navbar from './Navbar'
import HomeMain from './HomeMain'
import HomeQurilishlar from './HomeQurilishlar'
import { ChtoProizvodim } from './ChtoProizvodim'
import CTA from './CTA'
import ONas from './ONas'
import Afzalliklarimiz from './Afzalliklarimiz'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeMain />
      <HomeQurilishlar />
      <ChtoProizvodim />
      <CTA />
      <div>
        <h2 className='mb-10 font-inter text-5xl font-semibold uppercase w-full max-w-[1440px] px-5 mx-auto pt-[103px]'>
          О НАС
        </h2> 
        <ONas />
      </div>
      <Afzalliklarimiz />
    </div>
  )
}

export default Home