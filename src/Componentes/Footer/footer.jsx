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
       
        <hr className={`${isDarkMode && 'bg-black'}`}/>
        <ItemsContainer/>   
        <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>2024 SexShopVzla. Todos los derechos reservados</span>
        <span>Terminos y condiciones</span>
        <SocialIcons Icons={Icons}/>
        </div>
    </div>
  )
}
