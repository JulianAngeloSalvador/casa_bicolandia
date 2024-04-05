import React from 'react'
import './Hero.css'
import dark_arrow from '/public/assets/dark-arrow.png'
import hero_right from '/public/assets/hero-right.png'

const Hero = () => {
  return (
    <div className='hero mycontainer'>
      <div className="hero-left">
        <h1>Casa Bicolandia</h1>
        <p>Lorem Ipsum asdahdagsdajsdagsdashdasdh</p>
        <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
      </div>
      <div className="hero-right">
            <img src={hero_right} className='hero-right-img' alt="" />
        </div>
    </div>
  )
}

export default Hero
