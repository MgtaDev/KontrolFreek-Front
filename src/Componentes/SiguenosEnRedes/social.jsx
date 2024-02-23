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
    <h2 className={`${isDarkMode && 'text-white'} text-5xl text-gray-500 mx-10  text-center md:text-6xl mt-20 md:mt-40`}>Siguenos en Redes Sociales #SKIMO</h2><div className="slider-container">
    {/* Desktop Slider */}
    <div className="mt-4 mb-20 ">
        <Slider {...settings} className="">
          {data.map((item, index) => {
            return (
              <div
              className=""
              key={index}>
                <img src={skimo1} className='md:mx-14 shadow-xl md:w-[80%]' alt="hero_img" />
              </div>
            );
          })}
        </Slider>
    </div>
    </div>
      </>
    )
}

