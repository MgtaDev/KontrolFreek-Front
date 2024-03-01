import React, { useContext } from 'react'
import skimo from '../../assets/Skimo4.jpeg'
import DarkModeContext from '../../Context/darkModeContext'
import img from '../../assets/Skimo4.jpeg'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 

export default function HeroFans() {
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <>

  
    {/* Skimofans */}
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
                 <img src={skimo} className='md:w-full md:h-[600px]' alt="" />
  
    <section class={`text-gray-600 body-font`}>
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl md:text-left`}>Skimo Fans</h1>      
        <div class="h-1 w-full bg-pink-600 rounded"></div>
      </div>
      <p class={`${isDarkMode && 'text-white'} lg:w-1/2 w-full leading-relaxed text-center text-gray-500`}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class={`${isDarkMode && 'bg-gray-200'} bg-gray-100 p-6 rounded-lg`}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content"/>
          <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class={`${isDarkMode && 'bg-gray-200'} bg-gray-100 p-6 rounded-lg`}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content"/>
          <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class={`${isDarkMode && 'bg-gray-200'} bg-gray-100 p-6 rounded-lg`}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content"/>
          <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class={`${isDarkMode && 'bg-gray-200'} bg-gray-100 p-6 rounded-lg`}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content"/>
          <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
    </section>
            </motion.div>
            )}
      </InView>


    {/* Videos*/}
      <h1 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 md:mx-0 mt-20 text-center md:text-5xl md:text-left`}>Videos del Team</h1>      
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
            <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src={skimo}/>
                </div>
                <h2 class={`${isDarkMode && 'text-white'} title-font text-2xl font-medium text-gray-900 mt-6 mb-3`}>Skimo fans en Margarita!</h2>
                <p class={`${isDarkMode && 'text-white'} leading-relaxed text-base`}>Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                <button class="flex mx-auto mt-6 text-white bg-pink-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src={skimo}/>
                </div>
                <h2 class={`${isDarkMode && 'text-white'} title-font text-2xl font-medium text-gray-900 mt-6 mb-3`}>Mandanos tu video y se parte del SkimoFans Team</h2>
                <p class={`${isDarkMode && 'text-white'} leading-relaxed text-base`}>Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                <button class="flex mx-auto mt-6 text-white bg-pink-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
            </div>
          </div>
            </section>
            </motion.div>
            )}
      </InView>


    </>
  )
}
