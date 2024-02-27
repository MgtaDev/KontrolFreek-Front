import React, { useContext, useEffect, useState } from 'react';
import DarkModeContext from '../../Context/darkModeContext';
import axios from 'axios'

function Productos({isZ}) {
  const { isDarkMode } = useContext(DarkModeContext)
  const [backendProducts, setBackendProducts] = useState([])
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
 

  console.log(backendProducts);
  console.log(isZ);

  return (
    <div className={`${isDarkMode && 'bg-gray-900'}`}>
    <div className='md:mx-16 md:-mb-[8%] md:-mt-[7%] -mb-[8%] md:py-20'>
      <h1 className={`${isDarkMode && 'text-white'} text-4xl font-semibold md:text-6xl md:mt-8  text-gray-400 mx-6 pt-8`}>Nuestros Productos</h1>
      <p className={`${isDarkMode && 'text-gray-300'} text-xl mt-2 mx-6 md:mt-3 md:text-2xl`}>Consulta nuestros productos disponibles</p>
    </div>
    <div className='mt-14'>
    <select className='w-[40%] mx-4 py-2 px-4 shadow-xl' name="precio" id="">
        <option value="">Precio</option>
    </select>
    </div>
    <div className='mb-20'>

    <div className='grid grid-cols-2 mt-2'>
    {backendProducts && (
        backendProducts.map((product)=>(
            <div key={product.id} className=' m-4 rounded-xl shadow-xl '>
                <img src={product.image} className='rounded-t-xl' alt="" />
                <p className='mx-2 mt-2 capitalize text-1xl text-gray-70'>
                {product.name}
                </p>
                <p className='mx-2 my-2 capitalize text-1xl text-gray-500'>
                {product.price}
                </p>
            </div>
        ))
    )}
    </div>
    </div>
   
  
    </div>
  );
}

export default Productos;

  