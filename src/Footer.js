import React from 'react'
import './Footer.css'
import logo from './Images/logonegro.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <div className='footer'>
        <img src={logo} />
        <div className='social__media'>
          <a href='https://wa.link/qcv7zj'><WhatsAppIcon className='whatsapp' sx={{ fontSize: 30, margin: '10px' }}/></a>
          <a href='#'><InstagramIcon className='instagram' sx={{ fontSize: 30, margin: '10px' }}/></a>         
          <a href='#'><FacebookIcon className='facebook' sx={{ fontSize: 30, margin: '10px' }}/></a>
          <a href='#'><YouTubeIcon className='youtube' sx={{ fontSize: 30, margin: '10px' }}/></a>
          
        </div>
        <p>Todos los derechos reservados© | Mundo Financiero</p>
    </div>
  )
}

export default Footer