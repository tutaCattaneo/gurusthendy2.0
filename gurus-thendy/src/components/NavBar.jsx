import React from 'react'
import {Link} from 'react-router-dom'
import CardWidget from './CardWidget'
import Guitarra from './guitarra.png'


const NavBar = ({toggle}) => {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm'>
    <Link to="/Home" className="pl-8">
               <img src={Guitarra} alt="Guitarra" className="h-8 w-8"/> 
         </Link>

     <div className='px-4 cursor-pointer md:hidden'onClick={toggle}>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
     </div>

     <div className='pr-8 hidden md:block'>
      <Link to='/Home'className='pl-8'> Home</Link>
      <Link to='/About'className='pl-8'>
        About
      </Link>
      <Link to='/Contact'className='pl-8'>
        Contacto
      </Link>
      <Link to='/Instrumentos'className='pl-8'>
        Instrumentos
      </Link>
      <Link to='/Carrito'className='pl-8'>
        Carrito
      </Link>
     </div>
      <CardWidget />

    </nav>
  )
}

export default NavBar