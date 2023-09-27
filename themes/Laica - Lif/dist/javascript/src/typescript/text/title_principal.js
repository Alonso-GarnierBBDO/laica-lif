/**
 * Aqui se insertar la animation en los items de la imagen
 */
var titlePrincipal = function () {
    var title = document.querySelector('.presentation h1');
    var timeAnimation = 100;
    if (title) {
        var itemsTitle = title.childNodes;
        itemsTitle.forEach(function (e) {
            if (e.nodeType !== Node.TEXT_NODE) {
                var element_1 = e;
                if (element_1.tagName !== 'BR') {
                    setTimeout(function () {
                        element_1.classList.add("view");
                    }, timeAnimation);
                    timeAnimation += 80;
                }
            }
        });
    }
};
export default titlePrincipal;
