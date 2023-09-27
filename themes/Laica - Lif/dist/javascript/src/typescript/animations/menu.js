/**
 * En este archivo generamos la animacion del hover del menu
 */
var menu = function () {
    var menuItems = document.querySelectorAll('#navegation li a');
    if (menuItems) {
        var logo_item = document.querySelector('#navegation li.logo');
        if (logo_item) {
            var widthLogo = logo_item.offsetWidth / 2;
            var positionXLogoRelative_1 = logo_item.offsetLeft + widthLogo;
            var newElement_1 = document.createElement("div");
            newElement_1.classList.add('bubble');
            logo_item.appendChild(newElement_1);
            var allPositionLogo = logo_item.getBoundingClientRect();
            var positionLogoX_1 = allPositionLogo.x;
            menuItems.forEach(function (e) {
                newElement_1.style.left = "".concat(positionXLogoRelative_1, "px");
                if (!e.classList.contains('img')) {
                    var positionElement = e.getBoundingClientRect();
                    var positionX_1 = positionElement.x;
                    var positionRelative_1 = e.offsetLeft;
                    e.onmouseover = function () {
                        visible(e, newElement_1, positionX_1, positionLogoX_1, positionRelative_1);
                    };
                    e.onmouseout = function () {
                        remove(newElement_1, positionXLogoRelative_1);
                    };
                    e.onfocus = function () {
                        visible(e, newElement_1, positionX_1, positionLogoX_1, positionRelative_1);
                    };
                    e.onblur = function () {
                        remove(newElement_1, positionXLogoRelative_1);
                    };
                }
            });
        }
    }
};
function visible(e, newElement, positionX, positionLogoX, positionRelative) {
    var widthElement = e.offsetWidth + 10;
    newElement.style.width = "".concat(widthElement, "px");
    // Validamos si el elemento esta al lado izquierdo o derecho del elemento 
    if (positionLogoX > positionX) {
        newElement.style.left = "".concat(positionRelative - 5.5, "px");
    }
    else {
        newElement.style.left = "".concat(positionRelative - 5.5, "px");
    }
}
function remove(newElement, positionXLogoRelative) {
    newElement.style.left = "".concat(positionXLogoRelative, "px");
    newElement.style.width = "0px";
}
export default menu;
