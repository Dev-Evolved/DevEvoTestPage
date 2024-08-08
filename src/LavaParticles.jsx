import React, { useEffect, useRef } from 'react';
//slow down when scroll down on page 
//when color change delete all particles
function LavaParticles({ colors }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;    
    const numParticles = 100; 
    
    //delete previous svg before starting a new one
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.setAttribute('cx', Math.random() * 100);
      particle.setAttribute('cy', Math.random() * 100);      
      particle.setAttribute('r', Math.random() * 5 + 2);
      particle.setAttribute('fill', color);  
  
      particle.animate([       
        { transform: 'translate(0, 0)', opacity: '0' },
        { transform: `translate(${Math.random() * 100}vw,${Math.random() * 100}vh)`, opacity: '1' }        
      ], {       
        duration: Math.random() * 3000 + 5000,       
        iterations: Infinity     
      });      
      svg.appendChild(particle); 
    }      
  }, [colors]); 

  return (
    <svg 
      ref={svgRef}
      width="100vw" 
      height="100vh" 
      style={{overflow: 'hidden'}}
    />
  )
}

export default LavaParticles;