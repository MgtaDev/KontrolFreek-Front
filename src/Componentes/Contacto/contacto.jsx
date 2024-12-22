import React, { useContext } from 'react'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
import { inView, motion } from "framer-motion" 


export default function Contacto() {

  const { isDarkMode } = useContext(DarkModeContext) 
    

return (
  <>
  <InView threshold={0.25}>
    {({ ref, inView }) => (
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100 }}
        transition={{ duration: 0.8 }}
        id=''
      >
        <section  class="text-gray-600 body-font relative">
          <div id='#contacto' class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 className={`text-5xl ${isDarkMode && 'text-white'} text-gray-500 mx-4 mb-4 md:mx-0 text-center md:text-5xl md:text-left lg:text-center`}>Contactanos</h1>
              <p class={`lg:w-2/3 mx-auto leading-relaxed text-base ${isDarkMode && '!text-white'} `}>Tienes otra duda o quieres contactar con soporte? Envianos un correo electronico</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class={`${isDarkMode && '!text-white'} leading-7 text-sm text-gray-600`}>Nombre</label>
                    <input type="text" id="name" placeholder='Ingrese su nombre' name="name" class={`${isDarkMode && '!bg-white'} w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class={`${isDarkMode && '!text-white'} leading-7 text-sm text-gray-600`}>Correo</label>
                    <input type="email" id="email" placeholder='Ingrese su correo electronico' name="email" class={`${isDarkMode && '!bg-white'}  w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class={`${isDarkMode && '!text-white'} leading-7 text-sm text-gray-600`}>Mensaje</label>
                    <textarea id="message" placeholder='Escriba su mensaje aqui' name="message" class={`${isDarkMode && '!bg-white'} w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-[rgb(95,96,188)]-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                </div>
              
                <div class={`p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center ${isDarkMode && '!text-white'} `}>
                <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
            transition={{duration: 0.8}}
            id=''
            >
  <a class="text-[rgb(95,96,188)]">freeks4life@gmail.com</a>
                  <p class="leading-normal my-5">Nueva esparta, Venezuela
                    <br />Porlamar, PO 6301
                  </p>
                  <span class="inline-flex">
                    <a class={`${isDarkMode && '!text-white'} text-gray-500`}>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class={`${isDarkMode && '!text-white'} ml-4 text-gray-500`}>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class={`${isDarkMode && '!text-white'} ml-4 text-gray-500`}>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class={`${isDarkMode && '!text-white'} ml-4 text-gray-500`}>
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
            </motion.div>
            )}
                </InView>
                  
                </div>
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
