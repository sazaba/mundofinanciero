import React from 'react'
import './Cities.css'
import btc from './Images/Cities/art-rachen-yJpjLD3c9bU-unsplash.jpg'
import eth from './Images/Cities/jievani-weerasinghe-zHI7m_FxpMU-unsplash.jpg'
import crypto from './Images/Cities/thought-catalog-I0TDRP0fj6Y-unsplash.jpg'


function Cities() {
  return (
    <div className='cities'>
        <h1>Our Cities</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quia laudantium magnam delectus ratione? Laudantium, fuga distinctio sint excepturi ullam incidunt inventore commodi vitae voluptatibus placeat, quae facilis? Deserunt, dolorem!</p>
        <div className="row">
            <div className="cities-col">
                <img src={btc} />
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div className="cities-col">
                <img src={btc} />
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div className="cities-col">
                <img src={btc} />
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cities