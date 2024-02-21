import React from 'react'

export default function SocialIcons({Icons}) {
  return (
    <div className='text-pink-500'>
        {Icons.map((icon)=>(
            <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-white border-2 border-pink-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-pink-600'>
                <ion-icon name={icon.name}></ion-icon>
            </span>
        ))}
    </div>
  )
}
