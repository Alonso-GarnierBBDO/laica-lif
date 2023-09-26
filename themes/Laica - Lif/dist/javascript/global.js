import menu from './animations/menu.js';
import hand from './animations/hand.js';
window.addEventListener('load', function () {
    menu();
    hand();
});
window.addEventListener('resize', function () {
    menu();
});
