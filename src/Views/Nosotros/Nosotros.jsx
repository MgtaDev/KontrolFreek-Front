import React, { useContext } from 'react'
import banner from '../../assets/sex-shop-neon-sign-sex-shop-neon-sign-conceptual-d-rendering-illustration-133408232.webp'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 


export default function Nosotros() {
    const { isDarkMode } = useContext(DarkModeContext) 
  return (
    <div className={`${isDarkMode && ' bg-gray-900'}`}>
  

    {/* Nosotros */}
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
             

<div class="grid gap-4">
    <div>
        <img class="h-auto w-full" src={banner} alt=""/>
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={banner} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={banner} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={banner} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={banner} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={banner} alt=""/>
        </div>
    </div>
</div>

            </motion.div>
            )}
    </InView>


    {/* Por que esocojernos */}
    <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
              
      <section class={`${isDarkMode && ' bg-gray-900'} text-gray-600 body-font`}>
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
    <h1 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl md:text-center`}>Por que esocojernos?</h1>      
      <p class={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500`}>Nuestra sex shop se distingue por ofrecer una experiencia única y satisfactoria para nuestros clientes, convirtiéndose en un espacio donde la exploración y el descubrimiento de la sexualidad se celebran con total libertad. Entendemos que cada persona es diferente y que sus deseos y necesidades varían, por lo que nos esforzamos por crear un ambiente inclusivo y acogedor.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-500 text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`text-gray-900 text-lg title-font font-medium mb-3`}>Variedad de productos</h2>
          <p class={`leading-relaxed text-base`}>
Ofrecemos una amplia gama de productos que abarcan desde juguetes sexuales, lencería, hasta artículos de bienestar sexual. Esto asegura que cada cliente encuentre lo que busca, sin importar sus preferencias o necesidades.
</p>
          <a class="mt-3  text-pink-700 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-500 text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`text-gray-900 text-lg title-font font-medium mb-3`}>Asesoría Profesional y Discreta</h2>
          <p class={`leading-relaxed text-base`}>TNuestro equipo está capacitado para brindar asesoría personalizada, ayudando a los clientes a elegir los productos que mejor se adapten a sus deseos. Además, garantizamos un ambiente discreto y respetuoso, donde la privacidad de nuestros clientes es nuestra prioridad.</p>
          <a class="mt-3  text-pink-700 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-500 text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`text-gray-900 text-lg title-font font-medium mb-3`}>Calidad y Seguridad</h2>
          <p class={`leading-relaxed text-base`}>Todos nuestros productos son de alta calidad y están fabricados con materiales seguros para el cuerpo. Realizamos un riguroso control de calidad para que puedas disfrutar de tus compras con total confianza y tranquilidad.</p>
          <a class="mt-3 text-pink-700 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-[rgb(95,96,188)]-500 border-0 py-2 px-8 focus:outline-none hover:bg-[rgb(95,96,188)]-600 rounded text-lg">Quiero comprar</button>
  </div>
    </section>
            </motion.div>
            )}
    </InView>
   
    </div>
  
  )
}
