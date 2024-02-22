import React, { useContext, useState } from 'react'
import ItemsContainer from './itemsContainer'
import {Icons} from './menus'
import SocialIcons from './socialIcons'
import DarkModeContext from '../../Context/darkModeContext'

export default function Footer() {
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={`bg-gray-100 text-black ${isDarkMode && 'bg-gray-900'}`}>
        <hr  className={`${isDarkMode && 'bg-black'}`}/>
        <div className={`md:flex md:justify-between md:items-center sm:px-12 px-4 ${isDarkMode && 'bg-gray-900 text-white'} bg-[#ffffffe0] py-7`}>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                <span className='text-pink-500'>
                Skimo
                </span>{' '}
                 para refrescar y saborizar tu vida
            </h1>
            <div className='right-side'>
            <button className='bg-pink-500 hover:bg-pink-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
            Comprar
            </button>
        </div>
        </div>
        <hr className={`${isDarkMode && 'bg-black'}`}/>
        <ItemsContainer/>   
        <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>2024 Skimo. Todos los derechos reservados</span>
        <span>Terminos y condiciones</span>
        <SocialIcons Icons={Icons}/>
        </div>
    </div>
  )
}
