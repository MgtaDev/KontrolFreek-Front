import React from 'react'

export default function Item({Links, title}) {
  return (
   <ul>
    <h1 className='mb-1 font-semibold'>{title}</h1>
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
