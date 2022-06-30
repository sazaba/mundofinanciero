import React from 'react'
import './Cities.css'
import { Link } from 'react-router-dom';



function Cities() {
  return (
    <div className='cities'>
       
        <h1>Ciudades de Cobertura</h1>
        <p>Mundo financiero tiene presencia en distintas ciudades donde brindamos asesorias y servicios financieros para los Colombianos.</p>
        <div className="row">
            <div className="cities-col">
                <img src='https://i.postimg.cc/4dmPn0HY/Pereira.jpg' />
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className="layer">
                    <h3>PEREIRA</h3>
                </div>
                </Link>
            </div>
            <div className="cities-col">
                <img src='https://i.postimg.cc/zvyCXHMK/Santa-Rosa.jpg' />
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className="layer">
                    <h3>SANTA ROSA</h3>
                </div>
                </Link>
            </div>
            <div className="cities-col">
                <img src='https://i.postimg.cc/tCfrPpN9/Cartago.jpg' />
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className="layer">
                    <h3>CARTAGO</h3>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cities