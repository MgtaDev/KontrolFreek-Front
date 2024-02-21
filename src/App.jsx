import React from 'react'
import Nav from './Componentes/Nav/nav'
import Footer from './Componentes/Footer/footer'
import Player from './Views/Player/player';
import LandingPage from './Views/Landing/landingPage'
import SkimoFans from './Views/SkimoFans/skimofans';
import {Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const location = useLocation()
 
  return (
    <div>
      {
            location.pathname !== "" ? <Nav /> : null
         }
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/Player" element={<Player />} />
        <Route path="/Skimofans" element={<SkimoFans />} />
      </Routes>
     
      {
            location.pathname !== "" ? <Footer /> : null
         }
    </div>
  )
}
