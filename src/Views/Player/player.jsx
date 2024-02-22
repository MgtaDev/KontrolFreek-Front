import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img from '../../assets/Skimo1.jpeg'
import img2 from '../../assets/Skimo2.jpeg'
import img3 from '../../assets/Skimo3.jpeg'
import img4 from '../../assets/Skimo4.jpeg'

function Player({isZ}) {
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
  

  return (
    <>
    <div className='md:mx-16 md:-mb-[8%] md:-mt-[7%] -mb-[8%] md:py-20'>
      <h1 className='text-4xl font-semibold md:text-6xl md:mt-8  text-gray-700 mx-6 pt-8'>Las aventuras de Skimo</h1>
      <p className='text-xl mt-2 mx-6 md:mt-3 md:text-2xl'>Mira online las aventuras de #Skimo</p>
      <p className='text-xl mt-2 mx-6 md:mt-3 md:text-2xl'>Capitulo #1</p>
    </div>
    <div className={`${isZ ? 'max-[768px]:-z-10 ': ''}max-w-[1200px] h-[700px] w-full m-auto py-16 px-4 relative group`}>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className=' group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className=' group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
      </>
  );
}

export default Player;

  