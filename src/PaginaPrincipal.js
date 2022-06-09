import React from 'react'
import Campus from './Campus'
import Cities from './Cities'
import Clase from './Clase'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Testimonials from './Testimonials'

function PaginaPrincipal() {
  return (
    <div>
        <Header/>
        <Home/>
        <Campus/>
        <Cities/>
        <Clase/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default PaginaPrincipal