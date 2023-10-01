/**
 * En este archivo se generan las posiciones de cada elemento en el home de lif
 * Este acomodo solo funciona en escritorio
 */
var objetos = function () {
    if (window.innerWidth >= 700) {
        // Obtenemos el title principal, para saber la anchera y altura del miemo
        var title = document.querySelector("h1");
        // Obtenemos el texto mayor para saber en donde se debe colocar los items
        var titlePrincipal = document.querySelector("h1 .principal");
        // Objeto acomodado en la izquierda
        var firstImage = document.querySelector(".presentation  .img .lif_hojita");
        // Esta se acomodada a la derecha
        var secondImage = document.querySelector(".presentation  .img .lif_frasco");
        // Esta imagen se acomoda abajo a la izquierda pegada en el top
        var tercerImage = document.querySelector(".presentation  .img_two .lif_frasco");
        // Esta imagen se acomoda abajo a la derecha
        var cuartaImage = document.querySelector(".presentation  .img_two .objects");
        // Validamos si existen
        if (titlePrincipal && title) {
            // Obtenemos la posicion del elemento
            var positionTitle = titlePrincipal.getBoundingClientRect();
            // La posicion del elemento a la izquierda
            // const positionTitleX : number = positionTitle.left;
            var positionTitleX = titlePrincipal.offsetLeft;
            // La posicision del elemento havcia arriba
            // const positionTitleY : number = positionTitle.top;
            var positionTitleY = titlePrincipal.offsetTop;
            // Elemento la posicion del todo el contenido del h1
            var titleHeight = title.offsetHeight;
            // Obtenemos las cantidad de rems que contiene el h1 para asi ajustar los objetos alrededor
            var titlePrincipalStyles = getComputedStyle(titlePrincipal);
            var titlePixelSize = parseInt(titlePrincipalStyles.fontSize);
            // Estas seran las futuras posiciones de cada elemento
            var positionTop = 0;
            var positionLeft = 0;
            if (firstImage) {
                // Guardamos las posiciones del elemento 1
                positionTop = positionTitleY + (firstImage.offsetHeight / 1.8);
                positionLeft = positionTitleX - (firstImage.clientWidth / 2.1);
                // Reajustamos tanto arriba como a la izquierda el elemento, y asi el elemento llega a ser responsivo
                firstImage.style.position = "absolute";
                firstImage.style.top = "".concat(positionTop, "px");
                firstImage.style.left = "".concat(positionLeft, "px");
            }
            if (secondImage) {
                // Obtenemos el height de la imagen para acoplarla en el titulo
                var secondImageHeight = secondImage.offsetHeight;
                // Guardamos las pociciones del elemento 2
                // positionTop = positionTitleY - (titleHeight + (secondImage.offsetWidth * 1.4)) + (secondImageHeight / 1.1);
                positionTop = positionTitleY - (titlePixelSize - 150);
                positionLeft = positionTitleX - (secondImage.clientWidth - titlePrincipal.offsetWidth) + (secondImage.offsetWidth / 2);
                // Reajustamos tanto arriba como a la derecha el elemento, y asi el elemento llega a ser responsivo
                secondImage.style.position = "absolute";
                secondImage.style.top = "".concat(positionTop, "px");
                secondImage.style.left = "".concat(positionLeft, "px");
            }
            if (tercerImage) {
                positionTop = positionTitleY + titlePixelSize * 1.2;
                positionLeft = 0 + (tercerImage.offsetWidth / 3);
                tercerImage.style.position = "absolute";
                tercerImage.style.top = "".concat(positionTop, "px");
                tercerImage.style.left = "".concat(positionLeft, "px");
            }
            if (cuartaImage) {
                positionTop = positionTitleY + (titlePrincipal.offsetHeight * 4);
                positionLeft = positionTitleX - (cuartaImage.clientWidth - titlePrincipal.offsetWidth) + (cuartaImage.offsetWidth * 1.1);
                cuartaImage.style.position = "absolute";
                cuartaImage.style.top = "".concat(positionTop, "px");
                cuartaImage.style.left = "".concat(positionLeft, "px");
            }
        }
    }
};
export default objetos;
