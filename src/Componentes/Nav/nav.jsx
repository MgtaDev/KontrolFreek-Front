import React, { useState } from 'react'
import logo from '../../assets/react.svg'




export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }

  return (
    <header className='bg-[rgb(17,24,40)]'>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto' >
            <div>
            <img src={logo} alt="logo-img" className='w-14' />
            </div>
            <div className={`duration-500 md:static absolute text-white md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[13%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                    <li>
                        <a className='hover:text-teal-500' href=''>Home</a>
                    </li>
                    <li>
                        <a className='hover:text-teal-500' href=''>Nosotros</a>
                    </li>
                    <li>
                        <a className='hover:text-teal-500' href=''>Productos</a>
                    </li>
                    <li>
                        <a className='hover:text-teal-500' href=''>Comic</a>
                    </li>
                    <li>
                        <a className='hover:text-teal-500' href=''>SkimoFans</a>
                    </li>
                    <li>
                        <a className='hover:text-teal-500' href=''>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-teal-400 text-white px-5 py-2 rounded-full duration-300 hover:bg-teal-500'>
                    Comprar
                </button>
                <div onClick={onToggleMenu} className={`text-3xl bg-[#616466] pt-2 px-2 rounded-lg cursor-pointer text-white md:hidden`}>
                <ion-icon name={isMenuOpen ? 'close' : 'menu'} ></ion-icon>
                </div>
            </div>
        </nav>

    </header>
  )
}
