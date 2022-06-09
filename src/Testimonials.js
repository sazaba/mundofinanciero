import React from 'react'
import './Testimonials.css'
import man from './Images/Testimonials/julian-wan-WNoLnJo7tS8-unsplash.jpg'
import woman from './Images/Testimonials/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg'



function Testimonials() {
  return (
    <div className='testimonials'>
        <h1>Testimonials</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <div class="row">
        <div class="testimonial-col">            
            <img src={man}/>        
            <div class="tst">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae ipsum molestiae non adipisci rem quisquam quibusdam similique blanditiis numquam dolorum corrupti delectus quae vero accusantium unde consectetur, error perspiciatis!</p>
            <h3>Hera</h3>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
        </div>
        <div class="testimonial-col">                      
            <img src={woman}/>             
            <div class="tst">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae ipsum molestiae non adipisci rem quisquam quibusdam similique blanditiis numquam dolorum corrupti delectus quae vero accusantium unde consectetur, error perspiciatis!</p>
                <h3>Juan</h3>
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