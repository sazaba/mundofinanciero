import React from 'react'
import './Testimonials.css'




function Testimonials() {
  return (
    <div className='testimonials'>
        <h1>Testimonios</h1>
    <p>Mundo financiero presente en la vida de los Colombianos</p>
    <div class="row">
        <div class="testimonial-col">            
            <img src='https://i.postimg.cc/fTpVhrDH/Santiago.jpg'/>        
            <div class="tst">
                <p>Con mundo financiero logre organizar mis deudas, hicimos una compra de cartera y asi baje la tasa de interes y quede con cuotas mas bajas, lo cual me permitio quedar con mas dinero al fin del mes</p>
            <h3>Santiago</h3>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
        </div>
        <div class="testimonial-col">                      
            <img src='https://i.postimg.cc/Kj9gLcXF/Christian.jpg'/>             
            <div class="tst">
                <p>Los asesores de Mundo Financiero me ayudaron a salir del reporte que tenia en centrales de riesgo, tiempo despues volvi a tener una vida financiera mas activa con los bancos.</p>
                <h3>Christian</h3>
                <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
            </div>  
        </div>
    </div>
    </div>
  )
}

export default Testimonials