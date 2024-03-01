import React, { useContext } from 'react'
import HeroFans from '../../Componentes/HeroFans/herofans'
import Social from '../../Componentes/SiguenosEnRedes/social'
import DarkModeContext from '../../Context/darkModeContext'
import { InView, useInView } from 'react-intersection-observer';
const productsData = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
]  
export default function SkimoFans() {
  const { isDarkMode } = useContext(DarkModeContext) 

  return (
    <div className={`${isDarkMode && 'bg-gray-900'}`}>
      <HeroFans/>
      <Social title="Siguenos en Redes #Skimo" data={productsData}/>
    </div>
  )
}
