import React, { useContext, useState } from 'react'
import DarkModeContext from '../../Context/darkModeContext';
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 


  
export default function Social({title, data}) {
  const { isDarkMode } = useContext(DarkModeContext) 
   
    
  return (
    <>
    {/* Desktop Slider */}
    <div className="slider-container pb-20">
    <section class="text-gray-600 body-font">

    <h2 className={`${isDarkMode && 'text-white'} text-5xl text-gray-500 mx-10  text-center md:text-6xl mt-20 md:mt-40`}>Siguenos en Redes Sociales #SKIMO</h2>
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
  <div class="container px-5 py-14 mx-auto flex flex-wrap">
    <div class="flex w-full mb-10 text-center flex-wrap">
      <h1 class={`${isDarkMode && 'text-white'} sm:text-3xl text-2xl font-medium title-font mx-6 md:mx-0 text-gray-900 lg:w-1/3 lg:mb-0 mb-4`}>Master Cleanse Reliac Heirloom</h1>
      <p class={`${isDarkMode && 'text-white'} lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base`}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
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
            </motion.div>
            )}
    </InView>

</section>
<button class="flex mx-auto  text-white bg-pink-600 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">Ir a instagram</button>

    </div>
      </>
    )
}

