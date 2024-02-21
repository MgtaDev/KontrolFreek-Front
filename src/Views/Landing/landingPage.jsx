import React from 'react'
import Hero from '../../Componentes/Hero/hero'
import Products from '../../Componentes/Productos/products'
import ComicPromo from '../../Componentes/ComicPromo/comicPromo'
const productsData = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
  
]  
export default function LandingPage() {
  return (
    <>
      <Hero/>
      <Products title="Productos" data={productsData}/>
      <ComicPromo/>
    </>
  )
}
