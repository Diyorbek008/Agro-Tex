import React from 'react'
import Navbar from '../../Components/Navbar'
import Afzalliklarimiz from '../../Components/Afzalliklarimiz'
import CTA from '../../Components/CTA'
import ONas from '../../Components/ONas'
import Texts from './Texts'

const OKompaneHome = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className='mb-10 font-inter text-5xl font-semibold uppercase w-full max-w-[1440px] px-5 mx-auto pt-[103px] max-1000:pt-[10px]'>
          О компании ООО «АГРО-ТЕХ»
        </h2>
        <ONas />
      </div>
      <Texts/>
      <Afzalliklarimiz />
      <CTA />
    </div>
  )
}

export default OKompaneHome