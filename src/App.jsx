import React, { useState } from 'react';
import './App.css' 
import './Trans.css'
import toggleDarkMode from './toggleDarkMode'
import LavaParticles from './LavaParticles'
import Videos from './Videos'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";

export default function App() {
  const [colors, setColors] = React.useState(['grey', 'white'])

  return (
    <main>     
      <LavaParticles colors={colors} />   
      <div className='bg'>
        <button className='toggleDarkMode clip' onClick={() => {toggleDarkMode(colors, setColors)}}><BsFillMoonStarsFill/></button> 
        <div className='titlePageMainLogobg'>
          <div className='titlePageMainLogo fadeIn'></div>
          <FaSortDown className='downArrow bounce' onClick={() => {
            document.querySelector('.line-container').scrollIntoView({ behavior: 'smooth' })
          }} />
        </div>
        <div class="line-container">
            <div class="line"></div>
            <span class="line-text">Videos</span>
            <div class="line"></div>
        </div>
        <Videos />
        <div class="line-container">
            <div class="line"></div>
            <span class="line-text">Creators</span>
            <div class="line"></div>
        </div>
        <div className='creators fadeIn'>
          <div className='creator'>
            <img src='/dom.jpg'/>
            <h1>Dominik Honzak</h1>
          </div>
          <div className='creator'>
            <img src='/anto3.jpg'/>
            <h1>Anthony Salvado</h1>
          </div>
        </div>
        <div className='footer'>© 2024 Dominik Honzak & Anthony Salvado. All Rights Reserved.</div>
      </div>
    </main>
  ) 
}