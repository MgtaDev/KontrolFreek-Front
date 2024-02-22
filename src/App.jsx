import React, { useState } from 'react'
import Nav from './Componentes/Nav/nav'
import Footer from './Componentes/Footer/footer'
import Player from './Views/Player/player';
import LandingPage from './Views/Landing/landingPage'
import SkimoFans from './Views/SkimoFans/skimofans';
import {Route, Routes, useLocation, useNavigate } from "react-router-dom";
import WhatsappIcon from './assets/social.png'

export default function App() {
  const location = useLocation()
  const [isZ, setisZ] = useState(false)
  const sendWhatsappMessage = () => {
    window.open("https://wa.me/584121968978", "_blank")
  };
 
  return (
    <div>
      {
            location.pathname !== "" ? <Nav isZ={isZ} setisZ={setisZ}/> : null
         }
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/Player" element={<Player isZ={isZ} />} />
        <Route path="/Skimofans" element={<SkimoFans />} />
      </Routes>
      <div className="flex fixed bottom-0 w-20 right-0 m-2 p-4 rounded-full cursor-pointer">
            <img onClick={()=> sendWhatsappMessage()} className="w-20 hover:transform hover:scale-110" src={WhatsappIcon} alt=""/>
      </div> 
     
      {
            location.pathname !== "" ? <Footer /> : null
         }
    </div>
  )
}
