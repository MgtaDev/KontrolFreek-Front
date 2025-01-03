import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../Componentes/Hero/hero'
import Products from '../../Componentes/Productos/products'
import ComicPromo from '../../Componentes/ComicPromo/comicPromo'
import Faqs from '../../Componentes/Faqs/faqs'
import DarkModeContext from '../../Context/darkModeContext'
import Contacto from '../../Componentes/Contacto/contacto'
import axios from 'axios'
import { InView, useInView } from 'react-intersection-observer';
import Gallery1 from '../../Componentes/Gallery1/gallery'



export default function LandingPage() {
  
  const [backendProducts, setBackendProducts] = useState([])
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={` ${isDarkMode && 'text-white bg-gray-900'}`}>
      <Hero/>
      <Products title="Productos" data={backendProducts}/>
      <Gallery1/>
      <Contacto/>
    </div>
  )
}
