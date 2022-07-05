import {Link} from 'react-router-dom';
import CardWidget from './CardWidget';
import React from 'react'
import Imagen from './guitarra.png';


const NavBar = ({abrirCerrar}) => {
  return (
     <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm text-xl w-full ">
         <Link to="/" className="pl-8">
                 <img src={Imagen} alt="" className="h-11 w-11 rounded-full"/>
         </Link>
       <h1>GurusThendy</h1>
      <div className="px-4 cursor-pointer md:hidden" onClick={abrirCerrar}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
     </div> 
         
        <div className="pr-8 hidden md:block   ">
             <Link to="/"className="p-4">
                 Home
             </Link>
             <Link to="Instrumentos"className="p-4">
                 Instrumentos
             </Link>
             <Link to="Contact"className="p-4">
                 Contacto
             </Link>
             <Link to="Carrito"className="p-4 ">
                 Carrito
                 
             </Link>
             
             

        </div>
        
        <CardWidget />
       

     
     </nav>
      

  )

  

}

export default NavBar