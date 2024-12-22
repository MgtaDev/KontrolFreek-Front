import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 
import skimoPortada from '../../assets/Skimo4.jpeg'
import Faqs from '../../Componentes/Faqs/faqs';

export default function ComicShowcase() {
  const { isDarkMode } = useContext(DarkModeContext) 
  const navigate = useNavigate()
  return (
    <section class={`${isDarkMode && '!bg-gray-900 text-white'} text-gray-600 body-font pb-20 overflow-hidden`}>
 <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
       
            </motion.div>
            )}
            </InView>
            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
            <Faqs/>
            </motion.div>
            )}
            </InView>

    </section>
  )
}
