import React, { useContext } from 'react'
import DarkModeContext from '../../Context/darkModeContext'

export default function SocialIcons({Icons}) {
  const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className='text-[rgb(95,96,188)]-500'>
        {Icons.map((icon)=>(
            <span key={icon.name} className={`p-2 cursor-pointer inline-flex items-center rounded-full bg-white border-2 border-[rgb(95,96,188)] mx-1.5 text-xl hover:text-gray-100 hover:bg-[rgb(95,96,188)] ${isDarkMode && '!bg-[rgb(95,96,188)]-700 text-white'}` }>
                <ion-icon name={icon.name}></ion-icon>
            </span>
        ))}
    </div>
  )
}
