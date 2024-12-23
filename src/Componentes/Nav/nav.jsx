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


      // cart logic
     
    
      const [cart, setCart] = useState([
        { id: 1, name: "Lubricante 1", price: 8.0, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Lubricante 2", price: 218.0, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Lubricante 3", price: 27.0, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Lubricante 4", price: 14.0, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Lubricante 5", price: 50.0, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Lubricante 6", price: 120.0, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 11, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 12, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 13, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
        { id: 14, name: "Lubricante 7", price: 75.0, image: "https://via.placeholder.com/150" },
      ]); // Estado del carrito
      const [currentPage, setCurrentPage] = useState(1); // Página actual
      const itemsPerPage = 4; // Productos por página
    
      // Función para agregar productos al carrito
      const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
    
      // Calcular los productos por página
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);
    
      // Cambiar de página
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

  return (
    <header className={`bg-black  shadow-2xl`}>
        <nav className='flex justify-between items-center py-4 w-[92%] mx-auto ' >
            <h3 className='text-white text-3xl'>
            SexShopVzla
            </h3>
            <div className={`md:static ${isDarkMode && 'bg-gray-900 text-white'} bg-black absolute text-gray-900 md:min-h-fit min-h-[40vh] left-0 ${isMenuOpen ? 'top-[8.2%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] text-white gap-6'>
                    
                    <li>
                        <a className='block md:hidden' href='/'>Inicio</a>
                    </li>
                    <li>
                        <a className='' href='/nosotros'>Nosotros</a>
                    </li>
                    <li>
                        <a className='' href='/productos'>Catalogo</a>
                    </li>
                    <li>
                        <a className='' href='/preguntas-frecuentes'>Preguntas</a>
                    </li>
                    <li>
                        <a className='' href='/contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <div className='text-white gap-4 flex'>
                    
                <ion-icon size='large' name='search'></ion-icon>
            
           
<button type="button" class="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right" data-hs-overlay="#hs-offcanvas-right">
<ion-icon size='large' name='cart'></ion-icon>
</button>

<div id="hs-offcanvas-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-right-label">
  <div class="flex justify-between items-center py-3 px-4 border-gray-400 border-b  dark:border-neutral-700">
    <h3 id="hs-offcanvas-right-label" class="font-semibold text-2xl text-gray-700">
     Carrito de compras
    </h3>
    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none " aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
      <span class="sr-only">Close</span>
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4  h-[490px] overflow-y-scroll ">

    {cart.length === 0 ? (
            <p className="text-gray-800">El carrito está vacío.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b">
                  <div className='flex flex-row gap-2 items-center'>
                  <img src='https://sensustienda.com/cdn/shop/collections/DSC_59382_b3abe6b0-2d2f-4163-a838-ea399c590651.jpg?v=1729096669&width=352' className='h-10 rounded shadow w-10' alt="" />
                  <span className="text-gray-800">{item.name}</span>
                  </div>
                  <div>
                  <span className="font-bold text-gray-900">${item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
  

  </div>
  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-lg shadow-sm">
  {/* Subtotal */}
  <div className="flex items-center justify-between">
    <p className="text-lg font-medium text-gray-900">Subtotal</p>
    <span className="text-lg font-semibold text-gray-900">$145.00</span>
  </div>
  {/* Total de items */}
  <div className="flex items-center border-t py-2 justify-between mt-1">
    <p className="text-sm font-medium text-gray-500">Total de items</p>
    <span className="text-sm font-medium text-gray-500">8</span>
  </div>
</div>


  <div className='flex flex-row  w-full gap-0.5  absolute bottom-0.5 '>

    <button
          className=" bottom-0 w-full rounded bg-gray-500 px-2 rounde text-white font-semibold py-2 transition duration-300"
        >
          Ver catalogo
        </button>
        <button
          className=" bottom-0 w-full items-center rounded mr-0.5 bg-pink-600 px-2 rounde text-white font-semibold py-2 transition duration-300"
        >
          Comprar <ion-icon name='cart'></ion-icon>
        </button>
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
