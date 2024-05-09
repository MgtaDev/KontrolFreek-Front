import React, { useContext } from 'react'
import banner from '../../assets/Banner2.webp'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 
import about1 from '../../assets/about1.webp'
import about2 from '../../assets/about2.webp'


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
                <img src={banner} className='md:w-full md:h-[600px]' alt="" />
     <section class={`text-gray-600 body-font ${isDarkMode && ' bg-gray-900'}`}>
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class={`lg:w-1/2 w-full mb-6 lg:mb-0`}>
      <h1 className={`${isDarkMode && '!text-white'} text-5xl  text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl `}>Sobre Nosotros</h1>      
        <div class="h-1 w-full bg-[rgb(95,96,188)]-500 rounded"></div>
      </div>
      <p class={`${isDarkMode && '!text-white'} lg:w-1/2 w-full leading-relaxed text-center text-gray-500`}>KontrolFreek es el creador de Performance Gaming Gear™ y el líder de FreekNation, una comunidad global de más de cuatro millones de jugadores. Al combinar lo último en ergonomía y materiales avanzados, las líneas de KontrolFreeks de Performance Thumbsticks®, Performance Grips™, Gaming Cables™ y otros productos de alta calidad mejoran la experiencia del jugador al maximizar la comodidad y la precisión.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={about1} alt="content"/>
          <h3 class="tracking-widest text-[rgb(95,96,188)]-500 text-xs font-medium title-font">ARTICULO</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Celebrando el Día de la Tierra con el compromiso de KontrolFreek con la sostenibilidad</h2>
          <p class="leading-relaxed text-base">En un mundo donde la sostenibilidad se está volviendo cada vez más vital, incluso la industria del juego está dando un paso al frente para reducir su huella ambiental. Como marca líder en accesorios para controladores, KontrolFreek se enorgullece de anunciar que todos nuestros embalajes están fabricados con materiales 100% reciclados. </p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={about2} alt="content"/>
          <h3 class="tracking-widest text-[rgb(95,96,188)]-500 text-xs font-medium title-font">ARTICULO</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Los mejores consejos de bateo de MLB The Show 24 Ft. Tu amigoKyle</h2>
          <p class="leading-relaxed text-base">MLB The Show 24 ya lleva una semana disponible y nos encanta la última entrega de esta querida franquicia. Ya seas un jugador experimentado o simplemente estés dando un paso al frente en MLB The Show 24, comprender los matices del bateo puede mejorar significativamente tu experiencia de juego. Con el enfoque correcto y algunos consejos de expertos, puedes elevar tus habilidades de bateo a nuevas alturas y comenzar a conectar jonrones como un profesional. YourFriendKyle, creador de contenido de MLB The Show y embajador de KontrolFreek, publicó recientemente un video que repasa sus MEJORES consejos de bateo en MLB The Show 2024, ¡así que juguemos a la pelota y aprendamos a hacer swing como los profesionales!</p>
        </div>
      </div>
  
     
    </div>
  </div>
    </section>

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
    <h1 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl md:text-left`}>Por que esocojernos?</h1>      
      <p class={`${isDarkMode && '!text-white'} text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500`}>KontrolFreek crea productos que mejoran la experiencia de juego y al mismo tiempo fomentan una comunidad de jugadores decididos y ambiciosos en todo el mundo. Con sede en Atlanta, GA, todos nuestros productos están diseñados en los EE. UU.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-[rgb(95,96,188)] inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[rgb(95,96,188)] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`${isDarkMode && '!text-white'} text-gray-900 text-lg title-font font-medium mb-3`}>Elevar los sticks</h2>
          <p class={`${isDarkMode && '!text-white'} leading-relaxed text-base`}>Uno de los usos principales de los Thumbsticks es aumentar el tamaño de los propios sticks. Al colocar los accesorios en el mando se logran que los sticks sean más altos, por lo que el recorrido que hay que hacer para moverlos es menor, algo que viene realmente bien en shooters y géneros similares. Existen diferentes alturas, y aunque no es fácil adaptarse a algunas de ellas, cuando encuentras el punto que mejor se adapta a tus necesidades, se hace difícil volver a jugar sin los Thumbsticks.</p>
          <a class="mt-3 text-[rgb(95,96,188)] inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[rgb(95,96,188)] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`${isDarkMode && '!text-white'} text-gray-900 text-lg title-font font-medium mb-3`}>Combinaciones</h2>
          <p class={`${isDarkMode && '!text-white'} leading-relaxed text-base`}>Tal y como se suele decir: para gustos los colores, o en este caso, las combinaciones. Tener Thumbsticks de diferentes tamaños o formas es importante si queremos realizar diferentes combinaciones de los mismo, o incluso tenemos la opción de por ejemplo sólo utilizarlos en el stick derecho y no en el izquierdo, o viceversa. Buscar la posibilidad que mejor se adapta a las necesidades de cada uno es simplemente cuestión de probar y ver qué tal son las sensaciones en cada caso.</p>
          <a class="mt-3 text-[rgb(95,96,188)] inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[rgb(95,96,188)] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class={`${isDarkMode && '!text-white'} text-gray-900 text-lg title-font font-medium mb-3`}>Personalizacion</h2>
          <p class={`${isDarkMode && '!text-white'} leading-relaxed text-base`}>Nos gusta personalizar todo, eso es un hecho, y los mandos no iban a ser menos. Hay Thumbsticks para todos los gustos, de cantidad de colores y diseños. Dar un toque diferente a nuestros mandos con estos accesorios es sencillo e incluso los hay que brillan en la oscuridad. Hay diseños de Call of Duty o de Destiny, así como otros muchos genéricos.</p>
          <a class="mt-3 text-[rgb(95,96,188)] inline-flex items-center">Learn More
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
