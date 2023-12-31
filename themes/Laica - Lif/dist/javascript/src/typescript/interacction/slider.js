/**
 * En este archivos generamos el slider el home
 */
var childElements;
var lastChild;
var firstChild;
var moveItem = false;
var startX = 0;
var porcentage = 0;
var fatherChild;
var slider = function () {
    /**
     * Esta funcion solo se ejecuta una sola vez
     */
    // Obtenemos el contenedor en donde se alojan todos los items del slider
    var sliderMobile = document.querySelector('.carrousel .slider_item');
    if (sliderMobile) {
        // Obtenemos todos los elementos hijos
        childElements = Array.prototype.slice.call(sliderMobile.children);
        fatherChild = sliderMobile;
        if (childElements.length) {
            // Obtenemos el ultimo elemento hijo y el primero,
            // En este caso solo activamos el ultimo hijo
            var getLastChild = sliderMobile.lastElementChild;
            var getFirstChild = sliderMobile.firstElementChild;
            if (getLastChild && getFirstChild) {
                lastChild = getLastChild;
                firstChild = getFirstChild;
                // Cuando se le agrega la clase active es porque el item llega a estar activo
                if (window.innerWidth >= 700) {
                    lastChild.classList.add('remove');
                    // Obtenemos el penultimo elemento para agregarle el active    
                    var countElements = sliderMobile.childElementCount;
                    var penultimoElemento = childElements[countElements - 2];
                    if (penultimoElemento) {
                        penultimoElemento.classList.add('active');
                    }
                    // En la siguiente funcion validamos la posicion de las imagenes ilustrativas
                    reajustarIlustraciones();
                }
                else {
                    lastChild.classList.add('active');
                }
            }
            // Ejecutamos el metodo de arrastre del elemento
            metodoArrastrar();
        }
    }
};
function metodoArrastrar() {
    for (var i = 0; i < childElements.length; i++) {
        var elementActive = childElements[i];
        if (elementActive.classList.contains('active')) {
            // Desde aqui ejecutamos el elemento apenas se preciona un click
            pressItem(elementActive);
        }
    }
}
// Desde aqui validamos si el usuario quiere arrastrar el elemento 
function pressItem(element) {
    element.onmousedown = function (e) {
        downEvent(element, e);
    };
    element.ontouchstart = function (e) {
        downEvent(element, e);
    };
}
// Se encarga de validar cuando el usuario quiere validar cuando el usuario quiere mover la carta
function downEvent(element, e) {
    // Si moveItem pasa a true significa que el usuario puede arrastrar el item
    moveItem = true;
    element.style.cursor = 'grab';
    // Posicion inicial dle mouse
    if (e instanceof MouseEvent) {
        startX = e.clientX;
    }
    else if (e instanceof TouchEvent) {
        startX = e.touches[0].clientX;
    }
    // Reseteamos el porcentaje que movio el usuario
    porcentage = 0;
    dragItem(element);
}
function dragItem(element) {
    // Con la siguiente funcion, dejamos al usuario arrastrar la imagen para lograr ver las otras imagenes
    element.onmousemove = function (e) {
        moveEvent(element, e);
    };
    element.ontouchmove = function (e) {
        moveEvent(element, e);
    };
}
// Esta funcion se encarga de mover la carta dependiendo del eje X del cursor o touch del mobile
function moveEvent(element, e) {
    if (moveItem) {
        var itemMove = document.querySelector('.carrousel .image_mobile');
        if (itemMove) {
            itemMove.classList.add('remove');
        }
        element.style.cursor = 'grabbing';
        // Definemos la posicion del mouse en px
        var positionXMouse = void 0;
        if (e instanceof MouseEvent) {
            positionXMouse = e.clientX - startX;
        }
        else if (e instanceof TouchEvent) {
            positionXMouse = e.touches[0].clientX - startX;
        }
        else {
            positionXMouse = 0;
        }
        // Obtenemos la anchura del elemento para calcular el porcentage
        var widthElement = element.offsetWidth;
        // Definimos el porcentage del movimiento del mouse
        porcentage = positionXMouse / widthElement * 100;
        // Elemento de animation, para indicar al usuario en donde se esta moviendo
        animationImage(element);
        // Ejecutamos el movimiento de cancelar el item
        ejecutarMovimientoImagen(element);
    }
}
// Inicializamos animaciones de scroll
function animationImage(element) {
    element.style.transform = "translateX(".concat(porcentage / 1.5, "%)");
}
function exitAnimation(element) {
    element.style.transform = '';
}
function ejecutarMovimientoImagen(element) {
    element.onmouseup = function () {
        exitMove(element);
    };
    element.onmouseleave = function () {
        exitMove(element);
    };
    element.ontouchend = function () {
        exitMove(element);
    };
}
// Esta funcion es para calidar la siguiente carta que tendra el nuevo active
function selectNewCard(element, moverDerecha) {
    if (moverDerecha === void 0) { moverDerecha = true; }
    // Buscamos la posicion de la carta movida
    var searchElement = childElements.indexOf(element);
    // Validamos cual carta debe moverse
    var select = moverDerecha ? searchElement - 1 : searchElement + 1;
    // Seleccionamos la siguiente carta a mover
    var newElement = childElements[select];
    // Agregar la clase a la nueva carta
    if (newElement) {
        if (!moverDerecha) {
            newElement.classList.remove('remove');
        }
        newElement.classList.add('active');
        metodoArrastrar();
    }
    // Validar cuales cartas se muestran a los lados
    childElements.forEach(function (e, key) {
        // const hiddenRight : HTMLElement | null = childElements[select + 1];
        // const hiddenLeft : HTMLElement | null = childElements[select - 1];
        if (key > (select + 1)) {
            e.style.zIndex = '-1';
        }
        else if (key >= select) {
            e.style.zIndex = '';
        }
        if (key < (select - 1)) {
            e.style.zIndex = '-1';
        }
        else if (key <= select) {
            e.style.zIndex = '';
        }
    });
}
function exitMove(element) {
    // Eliminas el moviento de las cartas
    if (moveItem) {
        moveItem = false;
        element.style.cursor = 'pointer';
        // Ejecutamos la valicion, para ver mandamos la carta a la derecha o izquierda
        if (porcentage >= 50) {
            if (firstChild != element) {
                element.classList.add('remove');
                element.classList.remove('active');
                selectNewCard(element, true);
            }
            exitAnimation(element);
        }
        else if (porcentage <= -50) {
            if (lastChild != element) {
                element.classList.remove('active');
                selectNewCard(element, false);
            }
            exitAnimation(element);
        }
        else {
            exitAnimation(element);
        }
    }
}
function reajustarIlustraciones() {
    /**
     * Ajustar el elemento con respecto a las imagenes
     */
    var imageEscritorio = document.querySelector('.carrousel .image_escritorio');
    if (imageEscritorio) {
        var firstImage = imageEscritorio.firstElementChild;
        var lastImage = imageEscritorio.lastElementChild;
        var topLastElement = void 0;
        var leftLastElement = void 0;
        var leftFirstElement = void 0;
        if (firstImage && lastImage) {
            if (firstChild && fatherChild && lastChild) {
                var porcentageElemento = (17 / 100) * fatherChild.offsetWidth;
                topLastElement = (fatherChild.offsetHeight + fatherChild.offsetTop) - lastImage.offsetHeight;
                leftLastElement = firstChild.offsetLeft;
                leftFirstElement = (leftLastElement + lastChild.offsetWidth + (firstImage.offsetWidth / 2)) + porcentageElemento;
                // Insertamos los estilos para posicionar los objetos
                lastImage.style.top = "".concat(topLastElement, "px");
                lastImage.style.left = "".concat(leftLastElement - porcentageElemento, "px");
                firstImage.style.top = "".concat(fatherChild.offsetTop, "px");
                firstImage.style.left = "".concat(leftFirstElement, "px");
            }
        }
    }
}
export default slider;
