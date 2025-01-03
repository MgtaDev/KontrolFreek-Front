import React, { useContext, useEffect, useState } from 'react';
import DarkModeContext from '../../Context/darkModeContext';
import axios from 'axios'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate()


  let filteredProducts;
  function filterProducts(filterType) {
    const products = fakeProducts; // Reemplaza por la variable que contiene tus productos
  
    switch (filterType) {
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
//     <div className={`${isDarkMode && 'bg-gray-900'}`}>
//        <InView threshold={0.25}>
//             {({ref, inView})=>(
//             <motion.div 
//             ref={ref}
//             initial={{ x: -100, opacity: 0 }}
//             animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
//             transition={{duration: 0.8}}
//             id=''
//             >
//        <div className='md:mx-16 md:-mb-[8%] md:-mt-[7%] -mb-[8%] md:py-20'>
//       <h1 className={`${isDarkMode && 'text-white'} text-4xl font-semibold md:text-5xl md:mt-8  text-gray-700 mx-6 pt-8`}>Nuestros Productos</h1>
//       <p className={`${isDarkMode && 'text-gray-300'} text-xl mt-2 mx-6 md:mt-3 md:text-2xl`}>Bienvenido a nuestro catalogo, aquí encontrarás los productos más populares de nuestra tienda.</p>
//     </div>
//     <div className='mt-16 md:mx-16'>

// <select id="filter-select" class="border focus:ring-indigo-500 focus:border-indigo-500 mx-6 block w-40 pl-3 pr-10 py-2 text-base leading-6 bg-white border-gray-300 rounded-md shadow-sm">
//   <option>Filtrar por...</option>
//   <option value="name-asc" onclick={()=>filterProducts('name-asc')}>Nombre (A-Z)</option>
//   <option value="name-desc" onclick={()=>filterProducts('name-desc')}>Nombre (Z-A)</option>
//   <option value="price-asc" onclick={()=>filterProducts('price-desc')}>Precio (Menor a Mayor)</option>
//   <option value="price-desc" onclick={()=>filterProducts('price-asc')}>Precio (Mayor a Menor)</option>
// </select>
//     </div>
    
//             </motion.div>
//             )}
//             </InView>

//             {/* <InView threshold={0.25}>
//             {({ref, inView})=>(
//             <motion.div 
//             ref={ref}
//             initial={{ x: -100, opacity: 0 }}
//             animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
//             transition={{duration: 0.8}}
//             id=''
//             > */}
//     <div className='pb-20'>

// <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto md:mx-28 mt-10'>
// {fakeProducts&& (
//     ProductsPerPage?.map((product)=>(
//       <div
//       key={product.id}
//       className="relative group w-[300px] bg-white px-8 rounded-lg mt-10 overflow-hidden transform transition duration-305"
//     >
//       {/* Imagen del producto */}
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover"
//         />
//         {/* Botón Agregar al carrito */}
//         <button
//           className="absolute inset-x-0 bottom-0 bg-pink-600 text-white font-semibold py-2 opacity-0 group-hover:opacity-100 transition duration-300"
//         >
//           Agregar al carrito
//         </button>
//       </div>
//       {/* Información del producto */}
//       <div className="p-4">
//         <h3 className="text-sm font-bold text-gray-800 truncate">{product.name}</h3>
//         <p className="mt-1 text-lg font-semibold text-gray-600">${product.price}</p>
//       </div>
//     </div>
//     ))
// )}
// </div>
//  {/* Pagination Buttons */}
//  {
//         fakeProducts.length > 2 && (
//       <div className="flex justify-center py-8">
//         <button
//           onClick={() => {
//             if (currentPage > 1) {
//               setCurrentPage(currentPage - 1);
//               setSelectedPage(selectedPage - 1);
//             }
//           }}
//           className="border-solid rounded-full border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-white "
//         >
//           {"<"}
//         </button>
   
    
//         <button
//           onClick={() => {
//             if (currentPage < Math.ceil(backendProducts?.length / itemsPerPage)) {
//               setCurrentPage(currentPage + 1);
//               setSelectedPage(selectedPage + 1);
//             }
//           }}
//           className="border-solid rounded-full border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
//           >
//           {">"}
//         </button>
//       </div>
//         )
//       }
// </div>
//             {/* </motion.div> */}
//             {/* )} */}
//             {/* </InView> */}
   
   
  
//     </div>
<section class="bg-gray-50 py-8 px-8 relative top-14 antialiased dak:bg-gray-900 md:py-12">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* <!-- Heading & Filters --> */}
    <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dak:text-gray-400 dak:hover:text-white">
                <svg class="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Inicio
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                </svg>
                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dak:text-gray-400 dak:hover:text-white md:ms-2">Catalogo</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 dak:text-gray-400 md:ms-2">Lubricantes</span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 class="mt-3 text-xl font-semibold text-gray-900 dak:text-white sm:text-2xl">Electronics</h2>
      </div>
      <div class="flex items-center space-x-4">
        <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dak:border-gray-600 dak:bg-gray-800 dak:text-gray-400 dak:hover:bg-gray-700 dak:hover:text-white dak:focus:ring-gray-700 sm:w-auto">
          <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
          Filters
          <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
        <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dak:border-gray-600 dak:bg-gray-800 dak:text-gray-400 dak:hover:bg-gray-700 dak:hover:text-white dak:focus:ring-gray-700 sm:w-auto">
          <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
          </svg>
          Sort
          <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
        <div id="dropdownSort1" class="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dak:bg-gray-700" data-popper-placement="bottom">
          <ul class="p-2 text-left text-sm font-medium text-gray-500 dak:text-gray-400" aria-labelledby="sortDropdownButton">
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> The most popular </a>
            </li>
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> Newest </a>
            </li>
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> Increasing price </a>
            </li>
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> Decreasing price </a>
            </li>
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> No. reviews </a>
            </li>
            <li>
              <a href="#" class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dak:text-gray-400 dak:hover:bg-gray-600 dak:hover:text-white"> Discount % </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {fakeProducts?.map(product => (
      <div key={product.id} onClick={()=> navigate('/detalle')} class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img class="object-cover" src={product.image} alt="product image" />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900">{product.name}</h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-2xl font-bold text-slate-900">{product.price}</span>
          </p>
          <div class="flex items-center">
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
         Agregar al carrito</a>
      </div>
    </div>
      ))}
    </div>
    <div class="w-full text-center">
      <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dak:border-gray-600 dak:bg-gray-800 dak:text-gray-400 dak:hover:bg-gray-700 dak:hover:text-white dak:focus:ring-gray-700">Show more</button>
    </div>
  </div>
  {/* <!-- Filter modal --> */}

</section>

  );
}

export default Productos;

  