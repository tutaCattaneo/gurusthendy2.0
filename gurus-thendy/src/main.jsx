import React from 'react'
import App from './components/Home'
import ReactDOM from 'react-dom';
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes

}from "react-router-dom";
import Carrito from './components/Carrito';
import Instrumentos from './components/Instrumentos';
import Contact from './components/Contact';

import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <Layout>
          <Routes>
               <Route path="/" element={<App/>}>
                    

               </Route>
               <Route path='/home' element={<Home />}>
                   
               </Route>

               <Route path="/contact" element={<Contact />}>
                  
               </Route>
               <Route path="instrumentos" element={<Instrumentos />}>
                    
               </Route>
               <Route path="carrito" element={<Carrito />}>
                    
               </Route>
          </Routes>
          </Layout>
    </Router>
  </React.StrictMode>
)
