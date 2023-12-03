import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainRoot from './Layouts/MainRoot'
import Home from './Components/Home'
import SelxoznikaHome from './assets/Selxoznika/SelxoznikaHome'
import OKompaneMain from './assets/OKompanii/OKompaneMain'
import KontaktMain from './assets/Kontakt/KontaktMain'
import RabotiHome from './assets/NashiRaboti/RabotiHome'
import Detail from './Components/Detail'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='selxoznika' element={<SelxoznikaHome/>}/>
        <Route path='selxoznika/:id' element={<Detail/>}/> 
        <Route path='o_kompanii' element={<OKompaneMain/>}/>
        <Route path='kontakt' element={<KontaktMain/>}/>
        <Route path='nashi_raboti' element={<RabotiHome/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App