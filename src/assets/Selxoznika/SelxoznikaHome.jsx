import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './Hero'
import CTA from '../../Components/CTA'
import Katalog from './Katalog'
import Razbrasivatel from './Fotomaterial'

const SelxoznikaHome = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Katalog/>
      <Razbrasivatel/>
      <CTA/>
    </div>
  )
}

export default SelxoznikaHome