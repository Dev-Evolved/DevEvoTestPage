import React, { useState } from 'react';
import './App.css' 
import './Trans.css'
import toggleDarkMode from './toggleDarkMode'
import LavaParticles from './LavaParticles'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export default function App() {
  const [colors, setColors] = React.useState(['grey', 'white'])

  return (
    <main>     
      <LavaParticles colors={colors} />   
      <bg>
        <button class='toggleDarkMode clip' onClick={() => {toggleDarkMode(colors, setColors)}}><BsFillMoonStarsFill/></button> 
        <div className='titlePageMainLogobg'>
        <div className='titlePageMainLogo fadeIn'></div>
        </div>
        <div className='videoCarosel'></div>
        <div className='creators fadeIn'>
          <div className='creator'>
            <img src='public/dom.jpg'/>
            <h1>Dominik Honzak</h1>
          </div>
          <div className='creator'>
            <img src='public/anto3.jpg'/>
            <h1>Anthony Salvado</h1>
          </div>
        </div>
        <div className='footer'></div>
      </bg>
    </main>
  ) 
}