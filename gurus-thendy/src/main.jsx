import React,{useContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailCointainer'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'

import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";

 export const CartContext = React.createContext('');
console.log(CartContext)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <div className="App">
        <NavBar/>
        </div>
          <Outlet/>
        </div>
      <CartContext.Provider value="">
      <Routes>
        <Route path="/Instrumentos" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/category/:nombreCategoria" element={<div className='flex-row flex-wrap'><ItemListContainer/></div>} />
        <Route path="/producto/:Item" element={<ItemDetailContainer/>} />
        <Route path="/Home" element={<Home/>}/>
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
   
  
);
