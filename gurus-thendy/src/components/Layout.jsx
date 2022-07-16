import React from 'react'
import NavBar from './NavBar'
import Menusito from '../components/Menusito/Menusito'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailCointainer'
import { BrowserRouter,Outlet, Routes, Route } from "react-router-dom";
const Layout = ({children}) => {
   const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);





  return (
    
    <div className='h-screen'>
    
     <NavBar toggle={toggle}/>
      {isOpen && <Menusito toggleNuevo={toggle}/>}
      
      {children}
    </div>
     
   
  )
}

export default Layout