import React, { useState } from 'react'
import Nav from './Componentes/Nav/nav'
import Footer from './Componentes/Footer/footer'
import Player from './Views/Player/player';
import LandingPage from './Views/Landing/landingPage'
import SkimoFans from './Views/SkimoFans/skimofans';
import {Route, Routes, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const location = useLocation()
  const [isZ, setisZ] = useState(false)
 
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
     
      {
            location.pathname !== "" ? <Footer /> : null
         }
    </div>
  )
}
