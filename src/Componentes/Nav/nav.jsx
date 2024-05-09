import React, { useContext, useState } from 'react'
import logo from '../../assets/Logo.jpeg'
import DarkModeContext from '../../Context/darkModeContext'




export default function Nav({isZ, setisZ}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext) 

    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setisZ(!isZ)
      }
      const sendWhatsappMessage = () => {
        window.open("https://wa.me/584121968978", "_blank")
      };

  return (
    <header className={`bg-[rgb(254,253,253)]  shadow-2xl ${isDarkMode  && 'text-white bg-gray-900'}`}>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto ' >
            <div>
            <img src={logo} className='w-90' alt="" />
            </div>
            <div className={`md:static ${isDarkMode && 'bg-gray-900 text-white'} bg-[rgb(255,255,255)] absolute text-gray-900 md:min-h-fit min-h-[40vh] left-0 ${isMenuOpen ? 'top-[8.2%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/nosotros'>Nosotros</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/productos'>Productos</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/comic/showcase'>Categorias</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/skimofans'>FreekBlog</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='http://localhost:5173/#contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button onClick={()=> sendWhatsappMessage()} className='bg-[rgb(95,96,188)] text-white px-5 py-2 rounded-full duration-300 hover:bg-[rgb(95,96,188)]'>
                    Comprar
                </button>
                <div onClick={onToggleMenu} className={`text-3xl ${isDarkMode && 'bg-gray-900 text-white'} bg-[#ffffff] border-2 border-[rgb(95,96,188)] pt-2 px-2 rounded-lg cursor-pointer text-[rgb(95,96,188)]-500 md:hidden`}>
                <ion-icon name={isMenuOpen ? 'close' : 'menu'} ></ion-icon>
                </div>
            </div>
        </nav>

    </header>
  )
}
