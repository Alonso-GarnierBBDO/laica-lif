/**
 * En las importaciones los archivos realmente son ts, pero se le agrega js debido a una configuracion de tsconfig.json
 */
import menu from './animations/menu.js';
import hand from './animations/hand.js';
import circles from './animations/circles.js';
import title from './animations/title_principal.js';
import hover from './animations/animation_hover.js';
import viewport from './viewports/viewports.js';
import scroll from './interacction/scroll.js';
import titlePrincipal from './text/title_principal.js';
import objetos from './interacction/escritorioObjetos.js';
import slider from './interacction/slider.js';
import backgrounds from './backgrounds/index.js';
import formContact from './form/contacto_form.js';
import notFound from './404/animation.js';
window.addEventListener('load', function () {
    menu();
    hand();
    circles();
    title();
    hover();
    viewport();
    scroll();
    titlePrincipal();
    objetos();
    slider();
    backgrounds();
    formContact();
    notFound();
});
window.addEventListener('resize', function () {
    menu();
    circles();
    slider();
    objetos();
    backgrounds();
});
