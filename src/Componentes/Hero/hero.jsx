import React, { useContext, useState } from 'react'
import Banner from '../../assets/sex-shop-neon-sign-sex-shop-neon-sign-conceptual-d-rendering-illustration-133408232.webp'
import DarkModeContext from '../../Context/darkModeContext'
import { inView, motion } from "framer-motion" 
import { InView, useInView } from 'react-intersection-observer';

export default function Hero() {
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <div className={` ${isDarkMode && 'text-white bg-gray-900'}`}>
    <img src={Banner} className='md:w-full w-auto md:h-[650px]' alt="" />
    <div className='grid cols-1 md:grid-cols-2 md:mx-8 mt-5 md:mt-20'>
    <div className='mt-4  md:mt-8 md:mx-8'>
      {/* h2 */}
            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
    <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl md:text-left`}>Bienvenido a KontrolFreek</h2>
       
            </motion.div>
            )}
            </InView>
      {/* text */}
            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            </motion.div>
            )}
            </InView>
  
      </div>
    
            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
            <div className='right'>
            <img src={Banner} className='mt-5  md:rounded-lg shadow-xl' alt="" />
            </div>
            <div className='right'>
            <img src={Banner} className='mt-5  md:rounded-lg shadow-xl' alt="" />
            </div>
            <div className='right'>
            <img src={Banner} className='mt-5  md:rounded-lg shadow-xl' alt="" />
            </div>
            </motion.div>
            )}
            </InView>

            
    </div>
    </div>
  )
}
