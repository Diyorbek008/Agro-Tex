import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainRoot = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainRoot