import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skimo1 from '../../assets/Skimo4.jpeg'

  
export default function Products({title, data}) {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src='https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/left-arrow.svg' alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src='https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/right-arrow.svg' alt="nextArrow" {...props} />
      );
     
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
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
    <h2 className='text-5xl text-gray-500 mx-10 text-center md:text-5xl mt-40 md:mt-60'>Nuestros Ice Pops</h2><div className="slider-container">
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

                  <p className='text-gray-500'>1.99$</p>
                </div>


                
              </div>
            );
          })}
        </Slider>
    </div>
    </div>
      </>
    )
}

