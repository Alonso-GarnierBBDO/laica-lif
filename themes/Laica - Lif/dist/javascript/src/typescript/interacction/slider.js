/**
 * En este archivos generamos el slider el home
 */
var isDragging = false;
var movimiento = 0;
var startX = 0;
var sendRight = false;
var slider = function () {
    if (window.innerWidth < 700) {
        container();
    }
};
function container() {
    var contentSlider = document.querySelector('.carrousel .slider_item');
    if (contentSlider) {
        var childElements = contentSlider.children;
        var arrayElements = Array.prototype.slice.call(childElements);
        var activeElements = arrayElements.filter(function (e) {
            if (!e.classList.contains('remove')) {
                return e;
            }
        });
        var elements = activeElements.slice(-1)[0];
        if (activeElements.length > 1) {
            elements.classList.add('active');
        }
        else {
            elements.classList.add('view');
        }
        // Activamos el ultimo elemento
        arrayElements.forEach(function (element) {
            if (element.classList.contains('active')) {
                var widthElement = element.offsetWidth;
                ejecutarClick(element, widthElement);
            }
        });
    }
}
function ejecutarClick(element, widthElement) {
    element.onmousedown = function (e) {
        isDragging = true;
        startX = e.clientX;
    };
    mouseMove(element, widthElement);
    mouseUp(element);
}
function mouseMove(element, widthElement) {
    element.onmousemove = function (e) {
        if (isDragging) {
            movimiento += 1;
            var deltaX = e.clientX - startX;
            var percentageMoved = Math.abs((deltaX / widthElement) * 100);
            // Mover el elemento mientras el usuario lo arrastra
            element.style.transform = "translateX(".concat(movimiento, "px)");
            if (percentageMoved >= 50) {
                sendRight = true;
            }
        }
    };
}
function mouseUp(element) {
    element.onmouseleave = function () {
        closeElemet(element);
    };
    element.onmouseup = function () {
        closeElemet(element);
    };
}
function closeElemet(element) {
    isDragging = false;
    movimiento = 0;
    if (sendRight) {
        sendRight = false;
        element.classList.add('remove');
        element.classList.remove('active');
        element.style.transform = '';
        slider();
    }
    else {
        if (!element.classList.contains('remove')) {
            element.style.transform = "translateX(".concat(movimiento * 4, "px) rotate(0deg)");
        }
    }
    container();
}
export default slider;
