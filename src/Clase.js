import React from 'react'
import './Clase.css'
import trading from './Images/Clase/jeremy-bezanger-9opiHRPIvR0-unsplash.jpg'


function Clase() {
  return (
    <div className='clases'>
        <h1>Our Clases</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    <div class="row">
        <div class="clases-col">
            <img src={trading}/>
            <h3>World Clases</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            
        </div>
        <div class="clases-col">
            <img src={trading}/>
            <h3>World Clases</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            
        </div>
        <div class="clases-col">
            <img src={trading}/>
            <h3>World Clases</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            
        </div>
        
    </div>
    </div>
  )
}

export default Clase