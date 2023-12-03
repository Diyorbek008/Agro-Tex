import React from 'react'
import Navbar from '../../Components/Navbar'
import KontaktHero from './KontaktHero'
import Sxema from './Sxema'
import Diler from './Diler'
import CTA from '../../Components/CTA'

const KontaktMain = () => {
  return (
    <div>
      <Navbar/>
      <KontaktHero/>
      <Sxema/>
      <Diler/>
      <CTA/>
    </div>
  )
}

export default KontaktMain