import React, { useContext, useState } from 'react'
import skimo from '../../assets/Skimo4.jpeg'
import { useLocation, useNavigate } from 'react-router-dom'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 

export default function ComicPromo() {
  const navigate = useNavigate()
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <>
     
    <h2 className={`text-5xl text-gray-500 ${isDarkMode && 'text-white'} mx-10 text-center md:text-5xl mt-40 md:mt-60`}>Comic Animado</h2>
    <div className='grid cols-1 md:grid-cols-2 md:mx-8 mt-10 md:mt-20 '>
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
            <img src={skimo} className='0 md:rounded-lg shadow-xl' alt="" />
            </div>
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
            <div className='mt-10 md:mt-8 md:mx-8'>
            <h2 className={`text-5xl  ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl`}>Mira ya las aventuras de Skimo!</h2>
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
            <div className='flex justify-center mt-12 md:mt-0'>
            <button onClick={()=>navigate('/player/comic/cap-1')} className='md:mt-10 bg-pink-500 hover:bg-pink-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
                    Ver mas
            </button>
            </div>

      </div>
            </motion.div>
            )}
    </InView>
    </div>
    
    </>

  )
}
