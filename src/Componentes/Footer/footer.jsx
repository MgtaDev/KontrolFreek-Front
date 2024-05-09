import React, { useContext, useState } from 'react'
import ItemsContainer from './itemsContainer'
import {Icons} from './menus'
import SocialIcons from './socialIcons'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import logo from '../../assets/Logo.jpeg'

export default function Footer() {
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={`bg-gray-100 text-black ${isDarkMode && 'bg-gray-900'}`}>
        <hr  className={`${isDarkMode && 'bg-black'}`}/>
        <div className={`md:flex md:justify-between md:items-center sm:px-12 px-4 ${isDarkMode && 'bg-gray-900 text-white'} bg-[#ffffffe0] py-7`}>
                <div className='flex flex-col'>
                <img src={logo} alt="" />{' '}
                <h1 className='lg:text-4xl text-center text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                Mejora tu punteria!
                </h1>
                </div>
           
            <div className='right-side'>
            <button className='bg-[rgb(95,96,188)]-500 w-full hover:bg-[rgb(95,96,188)]-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
            Comprar
            </button>
        </div>
        </div>
        <hr className={`${isDarkMode && 'bg-black'}`}/>
        <ItemsContainer/>   
        <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>2024 KontrolFreek. Todos los derechos reservados</span>
        <span>Terminos y condiciones</span>
        <SocialIcons Icons={Icons}/>
        </div>
    </div>
  )
}
