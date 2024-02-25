import React, { useContext, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img from '../../assets/Skimo1.jpeg'
import img2 from '../../assets/Skimo2.jpeg'
import img3 from '../../assets/Skimo3.jpeg'
import img4 from '../../assets/Skimo4.jpeg'
import DarkModeContext from '../../Context/darkModeContext';
import DownloadButton from '../../Componentes/Descarga/Descarga';
import ChaptersSection from '../../Componentes/CapiitulosShowCase/capsShowCase';

function Productos({isZ}) {
  const { isDarkMode } = useContext(DarkModeContext) 
  console.log(isZ);
  const slides = [
    {
      url: img,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const products = [
    {producto1: ''},
    {producto2: ''},
    {producto3: ''},
    {producto4: ''},
  ]

  return (
    <div className={`${isDarkMode && 'bg-gray-900'}`}>
    <div className='md:mx-16 md:-mb-[8%] md:-mt-[7%] -mb-[8%] md:py-20'>
      <h1 className={`${isDarkMode && 'text-white'} text-4xl font-semibold md:text-6xl md:mt-8  text-gray-700 mx-6 pt-8`}>Nuestros Productos</h1>
      <p className={`${isDarkMode && 'text-gray-300'} text-xl mt-2 mx-6 md:mt-3 md:text-2xl`}>Consulta nuestros productos disponibles</p>
    </div>
    <div className='mt-14'>
    <select className='w-[40%] mx-4 py-2 px-4 shadow-xl' name="precio" id="">
        <option value="">Precio</option>
    </select>
    </div>
    <div className='mb-20'>

    <div className='grid grid-cols-2 mt-2'>
    {products && (
        products.map((product)=>(
            <div className=' m-4 rounded-xl shadow-xl '>
                <img src={img2} className='rounded-t-xl' alt="" />
                <p className='mx-2 mt-2 capitalize text-1xl text-gray-70'>
                    producto 1
                </p>
                <p className='mx-2 my-2 capitalize text-1xl text-gray-500'>
                2.99$
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

  