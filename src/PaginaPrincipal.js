import React from 'react'
import Campus from './Campus'
import Cities from './Cities'
import Clase from './Clase'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Testimonials from './Testimonials'
import './PaginaPrincipal.css'
import Convenios from './Convenios'


function PaginaPrincipal() {
  
  return (
    <div>
        <Header/>
        <Home/>
        <Campus id = 'creditos'/>
        <Convenios id = 'convenios'/>
        <Cities/>
        <Clase id = 'about'/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default PaginaPrincipal