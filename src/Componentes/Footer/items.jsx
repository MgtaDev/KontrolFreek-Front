import React, { useContext, useState } from 'react'
import DarkModeContext from '../../Context/darkModeContext'

export default function Item({Links, title}) {
const { isDarkMode } = useContext(DarkModeContext) 
  return (
   <ul>
    <h1 className={`mb-1 ${isDarkMode && 'bg-gray-900 text-white'} font-semibold`}>{title}</h1>
    {
        Links.map((link) => (
            <li className='text-gray-400 hover:text-[#41a6ff] duration-300 text-sm cursor-pointer leading-6' key={link.name}>
                <a href={link.link}>
                    {link.name}
                </a>
            </li>
        ))
    }
   </ul>
  )
}
