import React, { useContext, useState } from 'react'
import Accordion2 from './accordion'
import DarkModeContext from '../../Context/darkModeContext'
import Accordion3 from './accordionProximamente';

export default function Faqs() {
  const { isDarkMode } = useContext(DarkModeContext) 
  console.log(isDarkMode);
  return (
    <div className='pb-40'>
    <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-10 mb-4 md:mb-8 text-center md:text-6xl mt-10 md:mt-0`}>Capitulos</h2>
    <div className='flex flex-col gap-6 md:gap-10 mx-2 md:mx-40 md:mb-40 p-4 rounded-lg'>
    <Accordion2 title='Capitulo 1: El Viaje de Skimo' message='En este capitulo, es donde empieza todo...No te lo pierdas, No lo creeras si te lo cuentan, Disfruta junto a #Skimo!'/>
    <Accordion3 title='Capitulo 2: Proximamente' message='Proximamente'/>
    <Accordion3 title='Capitulo 3: Proximamente' message='Proximamente'/>
    </div>
    </div>
  )
}
