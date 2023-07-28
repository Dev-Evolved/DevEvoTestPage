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
      <button class='toggleDarkMode' onClick={() => {toggleDarkMode(colors, setColors)}}><BsFillMoonStarsFill class='defualt'/></button>       
      <LavaParticles colors={colors} />        
      <div className='titlePageMainLogo fadeIn'></div>        
    </main>
  ) 
}