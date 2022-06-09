import React from 'react'
import './Header.css'
import logo from './Images/logofinanciero.png'
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo} alt='logo'/>
        <div className='header__nav'>
          <MenuIcon sx={{ fontSize: 30 }} className='menuIcon' />
          <div className='nav__box'>
            <GppGoodIcon className='nav__boxLogo'/>
            <a href='https://www.soyyo.co/#descarga-app'><span>Centrales de Riesgo</span></a>       
          </div>
          <div className='nav__box'>
            <CreditScoreIcon className='nav__boxLogo'/>
            <span>Creditos</span>
          </div>
          <div className='nav__box'>
            <AccountBalanceIcon className='nav__boxLogo'/>
            <span>Deudas</span>
          </div>
          <div className='nav__box'>
            <GroupIcon className='nav__boxLogo'/>
            <span>Sobre Nosotros</span>
          </div>
        </div>
    </div>
  )
}

export default Header