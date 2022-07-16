import React from 'react'
import {Link} from 'react-router-dom'

const Menusito = ({toggleNuevo}) => {


  return (
    <div className='grid grid-rows-5 text-center bg-white text-black'onClick={toggleNuevo}>
     <Link to='/'className='p-4'>
         Home
    </Link>
    <Link to='/About'className='p-4'>
         About
    </Link>
    <Link to='/Contact'className='p-4'>
         Contacto
    </Link>
    <Link to='/Instrumentos'className='p-4'>
         Instrumentos
    </Link>
    <Link to='/Carrito'className='p-4'>
         Carrito
    </Link>
    </div>
  )
}

export default Menusito