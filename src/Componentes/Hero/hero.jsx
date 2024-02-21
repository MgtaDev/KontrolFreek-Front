import React from 'react'
import skimo from '../../assets/Skimo4.jpeg'

export default function Hero() {
  return (
    <>
    <img src={skimo} className='md:w-full md:h-[700px]' alt="" />
    <div className='grid cols-1 md:grid-cols-2 md:mx-8'>
    <div className='mt-4 md:mt-8 md:mx-8'>
    <h2 className='text-4xl text-gray-600 text-center md:text-5xl md:text-left '>Bienvenido a Skimo</h2>
    <p className='text-center mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className='text-center mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className='text-center mx-4 mt-2 md:text-2xl md:mx-0 md:text-left md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    
      </div>
  
    <div className='right'>
    <img src={skimo} className='mt-5  md:rounded-lg shadow-xl' alt="" />
    </div>
    </div>
    </>
  )
}
