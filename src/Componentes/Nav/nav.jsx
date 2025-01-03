import React, { useContext, useState } from 'react'
import logo from '../../assets/Logo.jpeg'
import DarkModeContext from '../../Context/darkModeContext'
import { Link } from 'react-router-dom'




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
    <header className={`bg-black shadow-2xl`}>
         <nav className={`flex justify-between items-center gap-2 md:gap-4 py-4 w-full px-8 fixed z-50 bg-black shadow-lg shadow-black  ${isDarkMode ? 'bg-gray-900' : ''}`}> {/* Clases de tailwind */}
           
           <div className='flex items-center'>
            <img src="/src/assets/sexshop-logo.png" className='bg-transparent -ml-4 w-14 md:w-10 md:h-10 mr-1 h-14' alt="" />
            <h3 className='text-white bg-black w-full text-3xl'>Sex <span className='text-red-500'>Shop</span></h3>
           </div>
            <div className={`
                md:static 
                
                bg-black 
                absolute 
                md:min-h-fit 
                min-h-[40vh] 
                left-0 
                ${isMenuOpen ? 'top-[-60%]' : 'top-[-450%]'} 
                md:w-auto 
                w-full 
                flex 
                items-center 
                px-5
                transition-all 
                duration-500 
                md:transition-none

            `}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] text-white gap-6'>
                    <li><Link to="/" className='block md:hidden'>Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/productos">Catalogo</Link></li>
                    <li><Link to="/preguntas-frecuentes">Preguntas</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>

            <div className='flex items-center gap-6'>
                <div className='text-white gap-4 flex'>
                   <ion-icon size='large' name='search'></ion-icon>

                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right" data-hs-overlay="#hs-offcanvas-right">
                      <ion-icon size='large' name='cart'></ion-icon>
                    </button>

                    <div id="hs-offcanvas-right" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full bg-white border-s" role="dialog" tabIndex="-1" aria-labelledby="hs-offcanvas-right-label">
                        <div className="flex justify-between items-center py-5 px-4 border-gray-400 border-b dark:border-neutral-700">
                            <h3 id="hs-offcanvas-right-label" className="font-semibold text-2xl text-gray-700">Carrito de compras</h3>
                            <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                                <span className="sr-only">Close</span>
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 h-[650px] md:h-[420px] mb-8 overflow-y-scroll ">
                          {cart.length === 0 ? (
                            <p className="text-gray-800">El carrito está vacío.</p>
                          ) : (
                            <ul>
                              {cart.map((item, index) => (
                                <li key={index} className="flex items-center justify-between py-6 border-b">
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
                        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg p-4">
    <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-900">Subtotal</p>
            <span className="text-lg font-semibold text-gray-900">$145.00</span>
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="text-sm font-medium text-gray-500">Total de items</p>
            <span className="text-sm font-medium text-gray-500">{cart.length}</span>
        </div>
        <div className="flex flex-col md:flex-row md:w-full gap-2 mt-4"> {/* Ancho completo en desktop */}
            <Link to="/productos" className="md:w-1/2 rounded bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 transition duration-300 text-center">Ver catalogo</Link>
            <button className="md:w-1/2 mt-2 md:mt-0 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 transition duration-300">
                Comprar <ion-icon name='cart'></ion-icon>
            </button>
        </div>
    </div>
</div>
                    </div>
                </div>
                <div onClick={onToggleMenu} className={`text-3xl text-white bg-black border-2 border-pink-600 pt-2 px-2 rounded-lg cursor-pointer md:hidden ${isDarkMode ? 'border-gray-500' : ''}`}> {/* Icono del menú hamburguesa */}
                                  <ion-icon name={isMenuOpen ? 'close' : 'menu'} ></ion-icon>
                </div>
            </div>
        </nav>
    </header>
  )
}
