import React, { useContext, useState } from 'react'
import DarkModeContext from '../../Context/darkModeContext'

export default function Accordion3({title, message}) {

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
        
        <div className='overflow-hidden' >{message}</div>
    </div>
    </div>
  )
}
