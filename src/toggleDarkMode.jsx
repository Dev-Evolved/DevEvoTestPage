function toggleDarkMode(colors, setColors) {
   let r = document.querySelector(':root');
   if (colors[1] === 'white') {    
     r.style.setProperty('--bg', 'white');
     r.style.setProperty('--invert', 0);
     r.style.setProperty('--textColor', 'rgba(0,0,0,0.75)');
     r.style.setProperty('--hoverColor', 'rgba(0,0,0,0.2)');
     r.style.setProperty('--color', 'rgb(196, 196, 196,0.75)');
     setColors(['grey', 'black']);
     
   } else {
     r.style.setProperty('--bg', 'black');
     r.style.setProperty('--invert', 1);
     r.style.setProperty('--textColor', 'rgba(255,255,255,0.75)');
     r.style.setProperty('--hoverColor', 'rgba(255,255,255,0.2)');
     r.style.setProperty('--color', 'rgb(48, 48, 48,0.75)');
     setColors(['grey', 'white']);  
   }
}

export default toggleDarkMode;