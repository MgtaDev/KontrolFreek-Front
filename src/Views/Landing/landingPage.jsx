import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../Componentes/Hero/hero'
import Products from '../../Componentes/Productos/products'
import ComicPromo from '../../Componentes/ComicPromo/comicPromo'
import Faqs from '../../Componentes/Faqs/faqs'
import DarkModeContext from '../../Context/darkModeContext'
import Contacto from '../../Componentes/Contacto/contacto'
import axios from 'axios'
import { InView, useInView } from 'react-intersection-observer';



export default function LandingPage() {
  
  const [backendProducts, setBackendProducts] = useState([])
  useEffect(() => {
    axios('http://localhost:3001/products')
      .then((response) => {
        setBackendProducts(response.data);
        console.log('Respuesta exitosa:', response.data);
      })
      .catch((error) => {
        // Maneja el error aquí
        console.error('Error al realizar la solicitud:', error);
      });
  }, []); // No hay ninguna dependencia aquí
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <div className={` ${isDarkMode && 'text-white bg-gray-900'}`}>
      <Hero/>
      <Products title="Productos" data={backendProducts}/>
      <ComicPromo/>
      <Faqs/>
      <Contacto/>
    </div>
  )
}
