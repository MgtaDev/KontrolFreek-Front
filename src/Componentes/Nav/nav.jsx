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
    <header className={`bg-black  shadow-2xl`}>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto ' >
            <h3 className='text-white text-3xl'>
            SexShopVzla
            </h3>
            <div className={`md:static ${isDarkMode && 'bg-gray-900 text-white'} bg-black absolute text-gray-900 md:min-h-fit min-h-[40vh] left-0 ${isMenuOpen ? 'top-[8.2%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] text-white gap-6'>
                    
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/nosotros'>Nosotros</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/productos'>Catalogo</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/preguntas-frecuentes'>Preguntas</a>
                    </li>
                    <li>
                        <a className='hover:text-[rgb(95,96,188)]' href='/contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <div className='text-white gap-4 flex'>
                    
                <ion-icon size='large' name='search'></ion-icon>
            
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent  text-white disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" data-hs-overlay="#hs-offcanvas-example">
                <ion-icon size='large' name='cart'></ion-icon>
</button>

<div id="hs-offcanvas-example" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-example-label">
  <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    <h3 id="hs-offcanvas-example-label" class="font-bold text-gray-800">
     Carrito de compras
    </h3>
    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none " aria-label="Close" data-hs-overlay="#hs-offcanvas-example">
      <span class="sr-only">Close</span>
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800 ">
    Consulta aqui tu carrito de compras
    </p>
  </div>
</div>
                </div>
                <div onClick={onToggleMenu} className={`text-3xl text-white bg-black border-2 border-pink-600 pt-2 px-2 rounded-lg cursor-pointer md:hidden`}>
                <ion-icon name={isMenuOpen ? 'close' : 'menu'} ></ion-icon>
                </div>
            </div>
        </nav>

    </header>
  )
}
