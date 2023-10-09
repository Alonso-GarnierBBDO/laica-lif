/**
 * En este contenedor tenemos muchas hojas cayendo
 */
var ctx;
var image;
var hojas = [];
var not_found_animation = function () {
    var content = document.querySelector('main.not-found');
    if (content) {
        var canvas = content.querySelector('canvas');
        if (canvas) {
            ctx = canvas.getContext('2d');
            var imageURL = canvas.getAttribute('image');
            if (ctx && imageURL) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                image = new Image();
                image.src = imageURL;
                image.onload = function () {
                    window.requestAnimationFrame(drawBox);
                };
            }
        }
    }
};
function drawBox() {
    if (ctx && image) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        // Dibuja y actualizamos cada hoja
        for (var i = 0; i < hojas.length; i++) {
            var hoja = hojas[i];
            if (hoja.nextActionTime <= Date.now()) {
                hoja.nextActionTime = Date.now() + (Math.floor(Math.random() * 10) + 2) * 1000;
            }
            ctx.drawImage(image, hoja.x, hoja.y++, 100, 100);
        }
        // Agrega una nueva hoja
        if (Math.random() < 0.01) {
            var nuevaHojaX = Math.random() * (window.innerWidth - 100);
            hojas.push({ x: nuevaHojaX, y: -100, nextActionTime: Date.now() });
        }
        window.requestAnimationFrame(drawBox);
    }
}
export default not_found_animation;
