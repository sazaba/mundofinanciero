import React from 'react'
import './Clase.css'
import { Link } from 'react-router-dom';




function Clase({id, icon}) {
  return (
    <div id={id} className='clases'>
         <div className='icon'>
            <Link style={{textDecoration: 'none', color: 'black'}}  to='/'>
            {icon}            
            </Link>
        </div>        
        <h1>Acerca de nosotros</h1>
    <p>Trabajamos dia a dia para brindar soluciones financieras a los Colombianos</p>
    <div class="row">
        <div class="clases-col">
            <img src='https://i.postimg.cc/BQMCcs5j/mision.jpg'/>
            <h3>Mision</h3>
            <p>Orientar y acompañar al cliente en todo lo concerniente a la obtención al crédito de libranza, ayudándolo según sus circunstancias a tomar la mejor decisión encaminado a mejorar sus habitos financieros, y sanear totalmente su cartera. 
            </p>
            
        </div>
        <div class="clases-col">
            <img src='https://i.postimg.cc/vZvwv4qW/job.jpg'/>
            <h3>¿Quienes Somos?</h3>
            <p>Una compañía de intermediación financiera, nueva en la región que nace con el objetivo de satisfacer las necesidades del cliente en lo que respecta al acompañamiento desde su origen hasta su culminación en el tramite financiero, en el mejoramiento de sus créditos, en el fortalecimiento de la inteligencia financiera al momento de tomar decisiones que afecten su bolsillo.
            </p>
            
        </div>
        <div class="clases-col">
            <img src='https://i.postimg.cc/C5wKm3C1/bank.jpg'/>
            <h3>Vision</h3>
            <p>Estar entre las empresas de intermediación financiera reconocidas de la región, por la calidad de nuestros servicios, la calidad humana de sus asesores y el gran portafolio de opciones para nuestros clientes.</p>
            
        </div>
        
    </div>
    </div>
  )
}

export default Clase