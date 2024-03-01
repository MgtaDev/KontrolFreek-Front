import React, { useContext, useState } from 'react'
import Accordion from './accordion'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 


export default function Faqs() {
  const { isDarkMode } = useContext(DarkModeContext) 
  console.log(isDarkMode);
  return (

    <div className='pb-20'>
         <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
            <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-10 mb-4 md:mb-8 text-center md:text-6xl mt-40 md:mt-40`}>Preguntas Frecuentes</h2>
            <div className='flex flex-col gap-6 md:gap-10 mx-2 md:mx-40 md:mb-40 p-4 rounded-lg'>
            <Accordion title='Cuales son las opciones de pago disponibles?' message='Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias como formas de pago seguras'/>
            <Accordion title='Cuantos sabores tienen los helados skimo?' message='Hasta el momento contamos con 7 sabroes, mango, piña, fresa, parchita, limon, uva, naranja y chicle'/>
            <Accordion title='Cuales son las opciones de pago disponibles?' message='Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias como formas de pago seguras'/>
            <Accordion title='Cuantos sabores tienen los helados skimo?' message='Hasta el momento contamos con 7 sabroes, mango, piña, fresa, parchita, limon, uva, naranja y chicle'/>
            <Accordion title='Cuantos sabores tienen los helados skimo?' message='Hasta el momento contamos con 7 sabroes, mango, piña, fresa, parchita, limon, uva, naranja y chicle'/>
            </div>
            </motion.div>
            )}
            </InView>

    </div>
  )
}
