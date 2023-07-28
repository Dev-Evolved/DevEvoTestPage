function toggleDarkMode(colors, setColors) {
   let r = document.querySelector(':root');
   if (colors[1] === 'white') {    
      r.style.setProperty('--bg', 'white');
     r.style.setProperty('--invert', 0);
     setColors(['grey', 'black']);
     
   } else {
     r.style.setProperty('--bg', 'black');
     r.style.setProperty('--invert', 1);
     setColors(['grey', 'white']);  
   }
}

export default toggleDarkMode;