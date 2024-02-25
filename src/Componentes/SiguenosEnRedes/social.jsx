import React, { useContext, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skimo1 from '../../assets/Skimo4.jpeg'
import DarkModeContext from '../../Context/darkModeContext';

  
export default function Social({title, data}) {
  const { isDarkMode } = useContext(DarkModeContext) 
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src='https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/left-arrow.svg' alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src='https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/right-arrow.svg' alt="nextArrow" {...props} />
      );
     
      var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    {/* Desktop Slider */}
    <div className="slider-container">
    <section class="text-gray-600 body-font">

    <h2 className={`${isDarkMode && 'text-white'} text-5xl text-gray-500 mx-10  text-center md:text-6xl mt-20 md:mt-40`}>Siguenos en Redes Sociales #SKIMO</h2>
  <div class="container px-5 py-14 mx-auto flex flex-wrap">
    <div class="flex w-full mb-10 text-center flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mx-6 md:mx-0 text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>
<button class="flex mx-auto mb-20 text-white bg-pink-600 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">Ir a instagram</button>

    </div>
      </>
    )
}

