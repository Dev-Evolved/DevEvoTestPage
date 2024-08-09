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
  const [light, setLight] = useState(false);
  const [colors, setColors] = React.useState(['grey', 'white']);
  window.onload = () => {
    localStorage.getItem('darkMode') === 'true' ? null : toggleDarkMode(colors, setColors);
  };
  return (
    <main>     
      <LavaParticles colors={colors} />   
      <div className='bg'>
        <button className='toggleDarkMode clip' onClick={() => {toggleDarkMode(colors, setColors);setLight(!light)}}>{light ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}</button> 
        <div className='titlePageMainLogobg'>
          <div className='titlePageMainLogo fadeIn'></div>
          <FaSortDown className='downArrow bounce' onClick={() => {
            document.querySelector('.line-container').scrollIntoView({ behavior: 'smooth' })
          }} />
        </div>
        <div className="line-container">
            <div className="line"></div>
            <span className="line-text">Videos</span>
            <div className="line"></div>
        </div>
        <Videos />
        <div className="line-container">
            <div className="line"></div>
            <span className="line-text">Creators</span>
            <div className="line"></div>
        </div>
        <div className='creators fadeIn'>
          <div className='creator'>
            <img src='/assets/images/dom.jpg'/>
            <h1>Dominik Honzak</h1>
          </div>
          <div className='creator'>
            <img src='/assets/images/anto3.jpg'/>
            <h1>Anthony Salvado</h1>
          </div>
        </div>
        <div className='footer'>© 2024 Dominik Honzak & Anthony Salvado. All Rights Reserved.</div>
      </div>
    </main>
  ) 
}