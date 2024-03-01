import React, { useContext, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skimo1 from '../../assets/Skimo4.jpeg'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import DarkModeContext from '../../Context/darkModeContext';
import axios from 'axios'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 

  
export default function Products({title, data}) {
 
  const { isDarkMode } = useContext(DarkModeContext)
  const sendWhatsappMessage = () => {
    window.open("https://wa.me/584121968978", "_blank")
  };
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <FaArrowLeft className='text-white' {...props} />
      );
     
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <FaArrowRight className='text-white'  alt="nextArrow" {...props} />
      );
     
      var settings = {
        dots: false, 
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
    <div className='flex flex-col justify-center'>
    <h2 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-10 text-center md:text-5xl mt-20 md:mt-60`}>Nuestros Ice Pops</h2>
    {/* Desktop Slider */}
    <div className={`mt-4 justify-center`}>
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
     <Slider {...settings} className="">
          {data.map((item, index) => {
            return (
              <div
              className=""
              key={index}>
                

                <img src={skimo1} alt="hero_img" />
              
                <div className=" text-center  text-1xl md:text-3xl">
                  <p>Skimo Ice</p>

                  <p className={`${isDarkMode && 'text-gray-100'} text-gray-500`}>1.99$</p>
                </div>


                
              </div>
            );
          })}
        </Slider>
       
            </motion.div>
            )}
            </InView>
    
    <div className='flex justify-center mt-12 md:mt-0'>
    <button onClick={()=>navigate('/products')} className='md:mt-10 bg-pink-500 hover:bg-pink-600 duration-300 px-5 py-2.5 font-sans rounded-md text-white md:w-auto'>
            Ver mas
    </button>
    </div>
    </div>
      </div>
    )
}

