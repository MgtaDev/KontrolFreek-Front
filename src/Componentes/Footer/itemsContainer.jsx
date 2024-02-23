import React from 'react'
import Item from './items'
import {PRODUCTOS, NOSOTROS, COMIC, CONTACTO} from './menus'

export default function ItemsContainer() {
  return (

   <div className='grid grid-cols-2 mx-16 pl-[6%] items-center sm:grid-cols-3 lg:ml-[10%] lg:grid-cols-4 gap-6 sm:px-5 py-16'>
        <Item Links={PRODUCTOS} title='PRODUCTOS'/>
        <Item Links={NOSOTROS} title='NOSOTROS'/>
        <Item Links={COMIC} title='COMIC'/>
        <Item Links={CONTACTO} title='CONTACTO'/>
    </div>
 
  )
}
