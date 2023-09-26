import menu from './animations/menu.js'; 
import hand from './animations/hand.js';
 

window.addEventListener('load', () => {
    menu();
    hand();   
})

window.addEventListener('resize', () => {
    menu();   
})