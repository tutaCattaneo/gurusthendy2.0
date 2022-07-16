import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailCointainer'
import NavBar from './components/NavBar'

import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <div className="App">
        <NavBar/>
        </div>
          <Outlet/>
        </div>
      <Routes>
        <Route path="/Instrumentos" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/category/:nombreCategoria" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/producto/:Item" element={<ItemDetailContainer/>} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
   
  
);
