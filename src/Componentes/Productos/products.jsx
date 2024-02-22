import React, { useContext, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skimo1 from '../../assets/Skimo4.jpeg'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { easeIn } from 'framer-motion';
import DarkModeContext from '../../Context/darkModeContext';

  
export default function Products({title, data}) {
  const { isDarkMode } = useContext(DarkModeContext) 
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <FaArrowLeft className='text-white' {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <FaArrowRight className='text-white'  alt="nextArrow" {...props} />
      );
     
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
    <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-10 text-center md:text-5xl mt-20 md:mt-60'>Nuestros Ice Pops</h2><div className="slider-container`}>Nuestros Ice Pops</h2>
    {/* Desktop Slider */}
    <div className="mt-4 ">
        <Slider {...settings} className="">
          {data.map((item, index) => {
            return (
              <div
              className=""
              key={index}>
                

                <img src={skimo1} alt="hero_img" />
              
                <div className=" text-center  text-1xl md:text-3xl">
                  <p>Skimo Ice</p>

                  <p className={`${isDarkMode && 'text-gray-200'} text-gray-500`}>1.99$</p>
                </div>


                
              </div>
            );
          })}
        </Slider>
    </div>
      </>
    )
}

