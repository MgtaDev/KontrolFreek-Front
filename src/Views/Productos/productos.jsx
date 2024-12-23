import React, { useContext, useEffect, useState } from 'react';
import DarkModeContext from '../../Context/darkModeContext';
import axios from 'axios'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 

function Productos({isZ}) {
  const { isDarkMode } = useContext(DarkModeContext)
  const [backendProducts, setBackendProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const [pageNumber, setPageNumber] = useState(0);
  const fakeProducts = Array.from({ length: 140 }, (_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    price: (Math.random() * 1000).toFixed(2), // Genera un precio aleatorio entre 0 y 1000
    image: `https://sensustienda.com/cdn/shop/collections/DSC_59382_b3abe6b0-2d2f-4163-a838-ea399c590651.jpg?v=1729096669&width=352` // Imagen placeholder
  }));
  const lastProduct = currentPage * itemsPerPage;
  const firtsProduct = lastProduct - itemsPerPage
  const ProductsPerPage = fakeProducts.slice(firtsProduct,lastProduct)


  let filteredProducts;
  function filterProducts(filterType) {
    const products = fakeProducts; // Reemplaza por la variable que contiene tus productos
  
    switch (filterType) {
      case 'name-asc':
        filteredProducts = orderByNameAZ(products);
        break;
      case 'name-desc':
        filteredProducts = orderByNameZA(products);
        break;
      case 'price-asc':
        filteredProducts = orderByPriceAsc(products);
        break;
      case 'price-desc':
        filteredProducts = orderByPriceDesc(products);
        break;
      default:
        filteredProducts = products;
    }
  }
  
    // Aplica el filtro en const ProductsPerPage = ...
    const firstProduct = 0;
    // const lastProduct = ProductsPerPage - 1;
    const filteredProductsSlice = filteredProducts?.slice(firstProduct, lastProduct);
  
  function orderByNameAZ(products) {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  function orderByNameZA(products) {
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }
  
  function orderByPriceAsc(products) {
    return products.sort((a, b) => a.price - b.price);
  }
  
  function orderByPriceDesc(products) {
    return products.sort((a, b) => b.price - a.price);
  }

// Paginado
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(fakeProducts?.length / itemsPerPage); i++) {
    pageNumbers.push({number:i, selected: i === selectedPage});
  }
  return pageNumbers;
};
  const pageNumbers = generatePageNumbers();


  return (
    <div className={`${isDarkMode && 'bg-gray-900'}`}>
       <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
       <div className='md:mx-16 md:-mb-[8%] md:-mt-[7%] -mb-[8%] md:py-20'>
      <h1 className={`${isDarkMode && 'text-white'} text-4xl font-semibold md:text-5xl md:mt-8  text-gray-700 mx-6 pt-8`}>Nuestros Productos</h1>
      <p className={`${isDarkMode && 'text-gray-300'} text-xl mt-2 mx-6 md:mt-3 md:text-2xl`}>Bienvenido a nuestro catalogo, aquí encontrarás los productos más populares de nuestra tienda.</p>
    </div>
    <div className='mt-16 md:mx-16'>

<select id="filter-select" class="border focus:ring-indigo-500 focus:border-indigo-500 mx-6 block w-40 pl-3 pr-10 py-2 text-base leading-6 bg-white border-gray-300 rounded-md shadow-sm">
  <option>Filtrar por...</option>
  <option value="name-asc" onclick={()=>filterProducts('name-asc')}>Nombre (A-Z)</option>
  <option value="name-desc" onclick={()=>filterProducts('name-desc')}>Nombre (Z-A)</option>
  <option value="price-asc" onclick={()=>filterProducts('price-desc')}>Precio (Menor a Mayor)</option>
  <option value="price-desc" onclick={()=>filterProducts('price-asc')}>Precio (Mayor a Menor)</option>
</select>
    </div>
    
            </motion.div>
            )}
            </InView>

            {/* <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            > */}
    <div className='pb-20'>

<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto md:mx-28 mt-10'>
{fakeProducts&& (
    ProductsPerPage?.map((product)=>(
      <div
      key={product.id}
      className="relative group w-[300px] bg-white px-8 rounded-lg mt-10 overflow-hidden transform transition duration-305"
    >
      {/* Imagen del producto */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Botón Agregar al carrito */}
        <button
          className="absolute inset-x-0 bottom-0 bg-pink-600 text-white font-semibold py-2 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Agregar al carrito
        </button>
      </div>
      {/* Información del producto */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 truncate">{product.name}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-600">${product.price}</p>
      </div>
    </div>
    ))
)}
</div>
 {/* Pagination Buttons */}
 {
        fakeProducts.length > 2 && (
      <div className="flex justify-center py-8">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              setSelectedPage(selectedPage - 1);
            }
          }}
          className="border-solid rounded-full border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-white "
        >
          {"<"}
        </button>
   
    
        <button
          onClick={() => {
            if (currentPage < Math.ceil(backendProducts?.length / itemsPerPage)) {
              setCurrentPage(currentPage + 1);
              setSelectedPage(selectedPage + 1);
            }
          }}
          className="border-solid rounded-full border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
          >
          {">"}
        </button>
      </div>
        )
      }
</div>
            {/* </motion.div> */}
            {/* )} */}
            {/* </InView> */}
   
   
  
    </div>
  );
}

export default Productos;

  