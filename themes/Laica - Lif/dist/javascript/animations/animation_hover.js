// En este archivo se crean los items de todos los links de animaacion con la clase espefica
var animation_hover = function () {
    var link_element = document.querySelectorAll('.hover_animation');
    link_element.forEach(function (element) {
        var divAnimation = document.createElement('div');
        divAnimation.classList.add('container_animate');
        var entryAnimate = document.createElement('div');
        entryAnimate.classList.add('item_animate');
        divAnimation.appendChild(entryAnimate);
        element.appendChild(divAnimation);
        element.onmouseover = function () {
            divAnimation.classList.add('active');
        };
        element.onmouseleave = function () {
            divAnimation.classList.add('exit');
            setTimeout(function () {
                divAnimation.remove();
                animation_hover();
            }, 500);
        };
    });
};
export default animation_hover;
