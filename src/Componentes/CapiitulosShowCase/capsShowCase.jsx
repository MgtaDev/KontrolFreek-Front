import React, { useContext, useState } from 'react'
import Accordion1 from './accordion'
import DarkModeContext from '../../Context/darkModeContext'
import Accordion3 from './accordion3';
import Accordion2 from './accordion2';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

export default function Faqs() {
  const { isDarkMode } = useContext(DarkModeContext) 
  console.log(isDarkMode);
  return (
    <InView threshold={0.25}>
    {({ref, inView})=>(
    <motion.div 
    ref={ref}
    initial={{ x: -100, opacity: 0 }}
    animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
    transition={{duration: 0.8}}
    id=''
    >
    <div className='pb-40'>
    <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-10 mb-4 md:mb-8 text-center md:text-6xl mt-2 md:mt-0`}>Mas capitulos</h2>
    <div className='flex flex-col gap-6 md:gap-10 mx-2 md:mx-40 md:mb-40 p-4 rounded-lg'>
    <Accordion1 title='Capitulo 1: El Viaje de Skimo' message='En este capitulo, es donde empieza todo...No te lo pierdas, No lo creeras si te lo cuentan, Disfruta junto a #Skimo!'/>
    <Accordion2 title='Capitulo 2: Proximamente' message='Proximamente'/>
    <Accordion3 title='Capitulo 3: Proximamente' message='Proximamente'/>
    </div>
    </div>
    </motion.div>
    )}
    </InView>

  )
}
