/**
 * Desde este archivo generamos los circulos
 */
var circles = function () {
    var circlesElement = document.querySelector('.circulo');
    if (circlesElement) {
        // Obtenemos la al
        var heightElement = circlesElement.offsetHeight;
        var widhtElement = circlesElement.offsetWidth;
        var totalCircles = 0;
        var containerCircles = document.createElement('div');
        var itemsContainerCircles = circlesElement.querySelector('.circulo .container_circles');
        // Validamos en que dispositivo se encuentra
        if (window.innerWidth < 700) {
            totalCircles = Math.round(heightElement / widhtElement);
        }
        else {
            totalCircles = 2;
        }
        if (!itemsContainerCircles) {
            containerCircles.classList.add('container_circles');
            circlesElement.appendChild(containerCircles);
        }
        else {
            containerCircles.innerHTML = '';
        }
        for (var i = 0; i < totalCircles; i++) {
            var newCircle = document.createElement('div');
            newCircle.classList.add('item');
            if (containerCircles) {
                containerCircles.appendChild(newCircle);
            }
        }
    }
};
export default circles;
