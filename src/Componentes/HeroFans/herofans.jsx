import React, { useContext } from 'react'
import skimo from '../../assets/Skimo4.jpeg'
import DarkModeContext from '../../Context/darkModeContext'

export default function HeroFans() {
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <>
    <img src={skimo} className='md:w-full md:h-[600px]' alt="" />
    <div className='grid cols-1 md:grid-cols-2 md:mx-8 mt-5 md:mt-20'>
    <div className='mt-4 md:mt-8 md:mx-8'>
    <h2 className={` ${isDarkMode && 'text-white'} text-5xl text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl`}>Skimo Fans</h2>
    <p className={` ${isDarkMode && 'text-gray-300'} text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className={` ${isDarkMode && 'text-gray-300'} text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className={` ${isDarkMode && 'text-gray-300'} text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    
      </div>
  
    <div className='right'>
    <img src={skimo} className='mt-5  md:rounded-lg shadow-xl' alt="" />
    </div>
    </div>
    </>
  )
}