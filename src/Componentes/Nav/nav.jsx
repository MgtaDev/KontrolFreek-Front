import React, { useState } from 'react'
import logo from '../../assets/Logo.jpeg'




export default function Nav({isZ, setisZ}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setisZ(!isZ)
      }
      const sendWhatsappMessage = () => {
        window.open("https://wa.me/584121968978", "_blank")
      };

  return (
    <header className='bg-[rgb(254,253,253)] shadow-2xl '>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto' >
            <div>
            <h1 className='text-4xl font-semibold md:text-5xl text-pink-500'>SKIMO</h1>
            </div>
            <div className={`duration-500 md:static bg-[rgb(255,255,255)] absolute text-gray-900 md:min-h-fit min-h-[40vh] left-0 ${isMenuOpen ? 'top-[8.2%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                    <li>
                        <a className='hover:text-pink-500' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href='#about'>Nosotros</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href='http://localhost:5173/#products'>Productos</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href='/Player'>Comic</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href='/skimofans'>SkimoFans</a>
                    </li>
                    <li>
                        <a className='hover:text-pink-500' href='#contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button onClick={()=> sendWhatsappMessage()} className='bg-pink-500 text-white px-5 py-2 rounded-full duration-300 hover:bg-pink-600'>
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
