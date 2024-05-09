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
            <Accordion title='Cual es el tiempo estimado en envio?' message='Hasta el momento realizamos los envios con mrw o zoom, el tiempo estimado es de 2 a 3 dias habiles'/>
            <Accordion title='Cuales son las opciones de pago disponibles?' message='Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias como formas de pago seguras'/>
            <Accordion title='Como me vuelvo partner para obtener descuentos y regalos?' message='Para ser partner en KontrolFreeks solo debes ir a la pagina de registro y escojer un plan!'/>
            <Accordion title='A que paises o estados en Venezuela realizan envios?' message='Se realizan envios a toda venezuela, y envios internacionales solo a paises suramericanos'/>
            </div>
            </motion.div>
            )}
            </InView>

    </div>
  )
}
