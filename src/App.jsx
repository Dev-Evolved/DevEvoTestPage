import React, { useState } from 'react';
import './App.css' 
import './Trans.css'
import toggleDarkMode from './toggleDarkMode'
import LavaParticles from './LavaParticles'
import Videos from './Videos'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export default function App() {
  const [colors, setColors] = React.useState(['grey', 'white'])

  return (
    <main>     
      <LavaParticles colors={colors} />   
      <div className='bg'>
        <button className='toggleDarkMode clip' onClick={() => {toggleDarkMode(colors, setColors)}}><BsFillMoonStarsFill/></button> 
        <div className='titlePageMainLogobg'>
        <div className='titlePageMainLogo fadeIn'></div>
        </div>
        <Videos />
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
        <div className='footer'></div>
      </div>
    </main>
  ) 
}