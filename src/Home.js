import React from 'react'
import './Home.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div className="text-box">
            <h1>Mundo Financiero</h1>
            <p>La Mejor Solucion Financiera a tu Alcance!

                No elijas cualquier producto, solicita una asesoria gratis con nosotros y decidete por la solucion financiera a tu medida
            </p>
            <Link style={{textDecoration:'none'}} to='/formulario'>
            <div className='hero-btn'>
                Contáctanos
            </div>
            </Link>
            
        </div>  
      
      <a href='https://wa.link/qcv7zj' ><WhatsAppIcon className='whatsapp__flotante' sx={{ fontSize: 50, marginRight: '30px', marginBottom: '20px' }}/></a>

    </div>
  )
}

export default Home