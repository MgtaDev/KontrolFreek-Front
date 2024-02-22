import React, { useContext, useState } from 'react'
import Hero from '../../Componentes/Hero/hero'
import Products from '../../Componentes/Productos/products'
import ComicPromo from '../../Componentes/ComicPromo/comicPromo'
import Faqs from '../../Componentes/Faqs/faqs'
import DarkModeContext from '../../Context/darkModeContext'
const productsData = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
]  
export default function LandingPage() {
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={` ${isDarkMode && 'text-white bg-gray-900'}`}>
      <Hero/>
      <Products title="Productos" data={productsData}/>
      <ComicPromo/>
      <Faqs/>
    </div>
  )
}
