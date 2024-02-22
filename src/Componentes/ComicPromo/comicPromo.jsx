import React from 'react'
import skimo from '../../assets/Skimo4.jpeg'

export default function ComicPromo() {
  return (
    <>
    <h2 className='text-5xl text-gray-500 mx-10 text-center md:text-5xl mt-40 md:mt-60'>Comic Animado</h2>
    <div className='grid cols-1 md:grid-cols-2 md:mx-8 mt-10 md:mt-20 '>
    <div className='right'>
    <img src={skimo} className='0 md:rounded-lg shadow-xl' alt="" />
    </div>
    <div className='mt-10 md:mt-8 md:mx-8'>
    <h2 className='text-5xl text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl '>Mira ya las aventuras de Skimo!</h2>
    <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <p className='text-center text-lg mx-4 mt-2 md:text-2xl md:mx-0 md:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam sint alias rerum debitis doloremque, officiis eum adipisci, corporis assumenda tenetur quisquam recusandae sunt quasi vitae velit ipsa quod veritatis.</p>
    <div className='flex justify-center mt-12 md:mt-0'>
    <button className='md:mt-10 bg-pink-500 hover:bg-pink-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
            Ver mas
    </button>
    </div>

      </div>
  
   
    </div>
    
    </>

  )
}
