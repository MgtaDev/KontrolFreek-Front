import React, { useContext, useState } from 'react'
import Hero from '../../Componentes/Hero/hero'
import Products from '../../Componentes/Productos/products'
import ComicPromo from '../../Componentes/ComicPromo/comicPromo'
import Faqs from '../../Componentes/Faqs/faqs'
import DarkModeContext from '../../Context/darkModeContext'
import Contacto from '../../Componentes/Contacto/contacto'
import axios from 'axios'



export default function LandingPage() {
  const productsData = axios('http://localhost:3001/products')
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={` ${isDarkMode && 'text-white bg-gray-900'}`}>
      <Hero/>
      <Products title="Productos" data={productsData}/>
      <ComicPromo/>
      <Faqs/>
      <Contacto/>
    </div>
  )
}
