import React, { useState } from 'react'
import Nav from './Componentes/Nav/nav'
import Footer from './Componentes/Footer/footer'
import Player from './Views/Player/player';
import LandingPage from './Views/Landing/landingPage'
import SkimoFans from './Views/SkimoFans/skimofans';
import {Route, Routes, useLocation, useNavigate } from "react-router-dom";
import WhatsappIcon from './assets/social.png'
import DarkModeContext from './Context/darkModeContext';
import { BsMoon, BsSun, BsWhatsapp } from "react-icons/bs";
import Productos from './Views/Productos/productos';
import Nosotros from './Views/Nosotros/Nosotros';
import ComicShowcase from './Views/ComicShowCase/comicShowcase';

export default function App() {
  const location = useLocation()
  const [isZ, setisZ] = useState(false)
  const [isDarkMode, setisDarkMode] = useState(false)
  const sendWhatsappMessage = () => {
    window.open("https://wa.me/584121968978", "_blank")
  };
  
 
  return (
    <div>
          <DarkModeContext.Provider value={{ isDarkMode, setisDarkMode }}>

  
      {
            location.pathname !== "" ? <Nav isZ={isZ} setisZ={setisZ}/> : null
         }
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/comic/showcase" element={<ComicShowcase isZ={isZ} />} />
        <Route path="/skimofans" element={<SkimoFans />} />
        
      </Routes>
      <button
      className={`fixed bottom-6 right-5 bg-white  w-[3.5rem] h-[3.4rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all ${isDarkMode && '!bg-gray-900 !border-1 !border-gray-100 text-white'}`}
      onClick={()=> sendWhatsappMessage()}
    >
      <BsWhatsapp size={20} className={`${isDarkMode && 'text-white'} text-gray-500`} />
    </button>
      <button
      className={`fixed bottom-6 left-5 bg-white  w-[3.5rem] h-[3.4rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all ${isDarkMode && '!bg-gray-900 !border-1 !border-gray-100 text-white'}`}
      onClick={()=> setisDarkMode(!isDarkMode)}
    >
      {isDarkMode === true ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
     
      {
            location.pathname !== "" ? <Footer /> : null
         }
      </DarkModeContext.Provider>
    </div>
  )
}
