import React, { useState } from 'react'
import logo from '../../assets/Logo.jpeg'




export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }

  return (
    <header className='bg-[rgb(255,255,255)] shadow-2xl '>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto' >
            <div>
            <h1 className='text-4xl font-semibold md:text-5xl text-pink-500'>SKIMO</h1>
            </div>
            <div className={`duration-500 md:static bg-[rgb(255,255,255)] absolute text-gray-900 md:min-h-fit min-h-[40vh] left-0 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                    <li>
                        <a className='hover:text-pink-500' href=''>Home</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href=''>Nosotros</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href=''>Productos</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href=''>Comic</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href=''>SkimoFans</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href=''>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-pink-500 text-white px-5 py-2 rounded-full duration-300 hover:bg-[#1f71b8]'>
                    Comprar
                </button>
                <div onClick={onToggleMenu} className={`text-3xl bg-[#ffffff] border-2 border-pink-500 pt-2 px-2 rounded-lg cursor-pointer text-pink-500 md:hidden`}>
                <ion-icon name={isMenuOpen ? 'close' : 'menu'} ></ion-icon>
                </div>
            </div>
        </nav>

    </header>
  )
}
