import React from 'react'
import './Campus.css'
import { Link } from 'react-router-dom';



function Campus({id, icon}) {
  return (
    <div id={id} className='campus'>
        <div className='icon'>
            <Link style={{textDecoration: 'none', color: 'black'}}  to='/'>
            {icon}            
            </Link>
            
        </div> 
        <h1>Servicios financieros</h1>
        <p>Tenemos las mejores opciones que se adaptan a tu perfil, cuentanos que necesitas.</p>
        <div className="row">    
            <div className="campus-col">
                <h4>Libranza libre inversion</h4>
                <p>Es un credito de libre destinacion que se otorga a los empleados, pensionados o jubilados de empresas que poseen convenio de libranza con las entidades para las que realizamos la intermediacion, en el cual se descuentan las cuotas mensualmente de los salarios o mesadas.</p>
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className='hero-btn2'>
                <b>¡Asesorate!</b>
                </div>
                </Link>
            </div>
            <div className="campus-col">
                <h4>Compra de cartera</h4>
                <p>Es un credito que le permite a empleados, pensionados o jubilados cancelar las deudas que poseen en otras entidades financieras, mejorando sus condiciones como lo son la tasa de interes, plazo o monto. Permitiendo unificar sus deudas y obtener un mejor beneficio.</p>
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className='hero-btn2'>
                <b>¡Asesorate!</b>
                </div>
                </Link>
            </div>
            <div className="campus-col">
                <h4>Saneamiento de cartera</h4>
                <p>Si usted se encuentra reportado en las centrales de información financiera (CIFIN O DATACREDITO) usted podrá acceder a credito sea bajo la modalidad libre inversión o compra de cartera, dándole alternativas y asesoria continua, para la gestion de negociación de carteras vencidas o castigadas, gestionando el capital para pagarlas.</p>
                <Link style={{textDecoration:'none'}} to='/formulario'>
                <div className='hero-btn2'>
                <b>¡Asesorate!</b>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Campus