import React from 'react'
import './Header.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {Scroll, Scroll2, Scroll3} from './Scroll'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
      <img className='header__logo' src='https://i.postimg.cc/7ZsFkddC/logofinanciero.png' alt='logo'/>
      </Link>
        
        <div className='header__nav'>
          <Link  to='./menuResponsive'>
          <MenuIcon sx={{ fontSize: 30 }} className='menuIcon' />          
          </Link>
          
          <div className='nav__box'>
            <GppGoodIcon className='nav__boxLogo'/>
            <a href='https://www.soyyo.co/#descarga-app'><span>Centrales de Riesgo</span></a>       
          </div>
          <div className='nav__box'>
            <CreditScoreIcon className='nav__boxLogo'/>
            {Scroll.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}
          </div>
          <div className='nav__box'>
            <HandshakeIcon className='nav__boxLogo'/>
            {Scroll3.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}
          </div>
          <div className='nav__box'>
            <GroupIcon className='nav__boxLogo'/>
            {Scroll2.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}
            
          </div>
        </div>
    </div>
  )
}

export default Header