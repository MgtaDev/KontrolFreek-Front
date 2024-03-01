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
  const [itemsPerPage] = useState(4)
  const lastProduct = currentPage * itemsPerPage;
  const firtsProduct = lastProduct - itemsPerPage
  const ProductsPerPage = backendProducts.slice(firtsProduct,lastProduct)
  const [pageNumber, setPageNumber] = useState(0);
  // Filtrado
  function filterProducts(filterType) {
    const products = backendProducts; // Reemplaza por la variable que contiene tus productos
  
    let filteredProducts;
  
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
  
    // Aplica el filtro en const ProductsPerPage = ...
    const firstProduct = 0;
    const lastProduct = ProductsPerPage - 1;
    const filteredProductsSlice = filteredProducts.slice(firstProduct, lastProduct);
  
    // Actualiza tu vista aquí para mostrar los productos filtrados
  }

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
    for (let i = 1; i <= Math.ceil(backendProducts?.length / itemsPerPage); i++) {
    pageNumbers.push({number:i, selected: i === selectedPage});
  }
  return pageNumbers;
};
  const pageNumbers = generatePageNumbers();

  useEffect(() => {
    axios('http://localhost:3001/products')
      .then((response) => {
        setBackendProducts(response.data);
        console.log('Respuesta exitosa:', response.data);
      })
      .catch((error) => {
        // Maneja el error aquí
        console.error('Error al realizar la solicitud:', error);
      });
  }, []); // No hay ninguna dependencia aquí

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
      <h1 className={`${isDarkMode && 'text-white'} text-4xl font-semibold md:text-6xl md:mt-8  text-gray-400 mx-6 pt-8`}>Nuestros Productos</h1>
      <p className={`${isDarkMode && 'text-gray-300'} text-xl mt-2 mx-6 md:mt-3 md:text-2xl`}>Consulta nuestros productos disponibles</p>
    </div>
    <div className='mt-16'>

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

            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
    <div className='pb-20'>

<div className='grid grid-cols-2 mt-10'>
{backendProducts && (
    ProductsPerPage.map((product)=>(
        <div key={product.id} className={`${isDarkMode && '!text-white bg-gray-500'} m-4 rounded-xl shadow-xl `}>
            <img src={product.image} className='rounded-t-xl' alt="" />
            <p className='mx-2 mt-2 capitalize text-1xl text-gray-70'>
            {product.name}
            </p>
            <p className={`${isDarkMode && '!text-white'} mx-2 my-2 capitalize text-1xl text-gray-500`}>
            {product.price}
            </p>
        </div>
    ))
)}
</div>
 {/* Pagination Buttons */}
 {
        backendProducts.length > 2 && (
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
        {pageNumbers.map(({ number, selected }) => (
          <button
            key={number}
            onClick={() => {
              setCurrentPage(number);
              setSelectedPage(number);
            }}
          className={`border-solid rounded-full border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-white ${
          selected ? "bg-pink-600 !text-white" : ""
            }`}
            >
              
            {number}
          </button>
        ))}
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
            </motion.div>
            )}
            </InView>
   
   
  
    </div>
  );
}

export default Productos;

  