import React from 'react'
import './MenuResponsive.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';
import {Scroll, Scroll2, Scroll3} from './Scroll'
import { Link } from 'react-router-dom';

function MenuResponsive({icon}) {
  return (
    <div className='menuResponsive'>
      <Link style={{textDecoration: 'none', color: 'black', position:'absolute',  top:'0',right:'0', margin:'20px'}}  to='/'>
      {icon}   
      </Link>
       
        <div className='nav__boxResponsive'>
            <GppGoodIcon sx={{ fontSize: 50 }} className='nav__boxLogoResponsive'/>
            <a href='https://www.soyyo.co/#descarga-app'><span>Centrales de Riesgo</span></a>       
          </div>
          <Link to='/campus/*'>
          <div className='nav__boxResponsive'>
            <CreditScoreIcon sx={{ fontSize: 50 }} className='nav__boxLogoResponsive'/>
            {Scroll.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}            
          </div>
          </Link>
          <Link to='/convenios/*'>
          <div className='nav__boxResponsive'>
            <HandshakeIcon sx={{ fontSize: 50 }} className='nav__boxLogoResponsive'/>
            {Scroll3.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}            
          </div>
          </Link>
          <Link  to='/about/*'>
          <div className='nav__boxResponsive'>          
          <GroupIcon sx={{ fontSize: 50 }} className='nav__boxLogoResponsive'/>
            {Scroll2.map((Scr)=>{
              return <a href={Scr.url} key={Scr.id}>
                <span>{Scr.text}</span>
              </a>
            })}                    
          </div>
          </Link>
        
    </div>
  )
}

export default MenuResponsive