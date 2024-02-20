import React from 'react'

export default function SocialIcons({Icons}) {
  return (
    <div className='text-[#41a6ff]'>
        {Icons.map((icon)=>(
            <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#41a6ff]'>
                <ion-icon name={icon.name}></ion-icon>
            </span>
        ))}
    </div>
  )
}
