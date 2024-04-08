import React from 'react'
import './Hero.css'
import dark_arrow from '/public/assets/dark-arrow.png'
import hero_right from '/public/assets/hero-right.png'

const Hero = () => {
  return (
    <div className='hero mycontainer'>
      <div className="hero-left">
        <h1>Casa Bicolandia</h1>
        <p>Casa Bicolandia Suites is located at the heart of Daraga, Albay where beautiful landmarks and popular tourist spots await you. Book your room now.</p>
        <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
      </div>
      <div className="hero-right">
            <img src={hero_right} className='hero-right-img' alt="" />
        </div>
    </div>
  )
}

export default Hero
