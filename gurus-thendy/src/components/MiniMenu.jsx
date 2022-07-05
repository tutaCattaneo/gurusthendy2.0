import React from 'react'
import { Link } from 'react-router-dom'

const MiniMenu = (abrirCerrarNuevo) => {
  return (
    <div className="grid grid-rows-3 text-center items-center bg-white-800"onClick={abrirCerrarNuevo}>
       <Link className="p-4 text-black" to="/">
             Home
       </Link>
       <Link className="p-4 text-black" to="Instrumentos">
             Instrumentos
       </Link>
       <Link className="p-4 text-black" to="Contact">
             Contacto
       </Link>
       <Link className="p-4 text-black" to="Carrito">
             Carrito
       </Link>

    </div>
  )
}
export default MiniMenu