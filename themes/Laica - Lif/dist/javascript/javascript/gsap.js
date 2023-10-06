"use strict";
window.addEventListener('load', function () {
    var type = 0;
    var scrollTimeout;
    window.onscroll = function (e) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            console.log("Type : " + type);
            console.log("Scroll : " + window.scrollY);
            if (type <= window.scrollY) {
                console.log("REalizo el scroll hacia abajo");
            }
            else {
                console.log("REalizo el scroll hacia arriba");
            }
            type = window.scrollY;
            return;
        }, 100);
    };
});
