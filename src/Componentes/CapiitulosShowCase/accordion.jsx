import React, { useContext, useState } from 'react'
import DarkModeContext from '../../Context/darkModeContext'
import img3 from '../../assets/Skimo3.jpeg'
import { useNavigate } from 'react-router-dom'

export default function Accordion1({title, message}) {
  const navigate = useNavigate()

    const [accordeonIsOpen, setaccordeonIsOpen] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext) 
  

  return (
    <div className='py-0 '>
    <button onClick={()=> setaccordeonIsOpen(!accordeonIsOpen)} className={`flex ${isDarkMode && 'bg-gray-200'} bg-gray-100 shadow-xl py-2 md:py-3 items-center px-4 rounded-t-lg justify-between w-full`}>
        <span className='text-left font-semibold text-gray-700 md:text-lg'>{title}</span>
        <svg
          className="fill-pink-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordeonIsOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordeonIsOpen && "!rotate-180"
            }`}
          />
        </svg>
    </button>
    <div className={`grid overflow-hidden transition-all ${isDarkMode && 'bg-gray-200'} bg-gray-100 py-1 ${accordeonIsOpen ? 'md:pb-6' : ''}  rounded-b-lg px-4 duration-300 ease-in-out text-slate-600 text-sm
    ${accordeonIsOpen ? 'grid-rows-[1fr] opacity:100 ' : 'grid-rows-[0fr] opacity:0 '}`}>
        <div className='flex overflow-hidden'>
        <img src={img3} className='h-20 w-20 mx-4 my-1 rounded-lg'  alt="" />
        <div className='flex flex-col '>
        <div className='overflow-hidden'>{message}</div>
        <button onClick={()=> navigate('/player/comic/cap-1')} className='bg-pink-500 relative right-1 my-4 w-full hover:bg-pink-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
            Ver ahora
        </button>
        </div>
     
        </div>
    </div>
    </div>
  )
}
