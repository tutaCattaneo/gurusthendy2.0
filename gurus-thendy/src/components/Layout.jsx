import React from 'react'
import MiniMenu from './MiniMenu'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'

import Footer from '../paginas/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
const Layout = ({children}) => {
    const[aparecer, setAparecer]= useState(false);

    useEffect(()=>{
        const ocultarMenu = () => {
         if(window.innerWidth >768 && aparecer){
           setAparecer(false);
         }
        };
   
        window.addEventListener("resize",ocultarMenu);
        
        return()=>{
          window.removeEventListener("resize",ocultarMenu);
        }
    });
   
   
   
    const toggleOpen = () => {
         setAparecer(!aparecer);
     };
   


  return (
    <div className="h-screen"> 
           <NavBar abrirCerrar={toggleOpen}  />
           {aparecer && <MiniMenu abrirCerrarNuevo={toggleOpen}/>}
           
           
           
           {children}
           <Footer/>
            
           
    </div>
  )
}

export default Layout