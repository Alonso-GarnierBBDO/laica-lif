import menu from './animations/menu.js'; 
import hand from './animations/hand.js';
import circles from './animations/circles.js';
import title from './animations/title_principal.js';
import hover from './animations/animation_hover.js';
import viewport from './viewports/viewports.js';
import scroll from './interacction/scroll.js';
import titlePrincipal from './text/title_principal.js';
 

window.addEventListener('load', () => {
    menu();
    hand(); 
    circles();  
    title();
    hover();
    viewport();
    scroll();
    titlePrincipal(); 
})

window.addEventListener('resize', () => {
    menu();    
    circles();
})