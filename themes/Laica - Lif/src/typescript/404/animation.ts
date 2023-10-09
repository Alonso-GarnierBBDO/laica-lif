/**
 * En este contenedor tenemos muchas hojas cayendo 
 */

let ctx: CanvasRenderingContext2D | null;
let image: HTMLImageElement | null;
let hojas: { x: number, y: number, nextActionTime: number }[] = [];

const not_found_animation = () => {
    const content: HTMLElement | null = document.querySelector('main.not-found');

    if (content) {
        const canvas: HTMLCanvasElement | null = content.querySelector('canvas');

        if (canvas) {
            ctx = canvas.getContext('2d');
            const imageURL: string | null = canvas.getAttribute('image');

            if (ctx && imageURL) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                image = new Image();
                image.src = imageURL;

                image.onload = () => {
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
        for (let i = 0; i < hojas.length; i++) {
            const hoja = hojas[i];

            if (hoja.nextActionTime <= Date.now()) {
                hoja.nextActionTime = Date.now() + (Math.floor(Math.random() * 10) + 2) * 1000;
            }

            ctx.drawImage(image, hoja.x, hoja.y++, 100, 100);
        }

        // Agrega una nueva hoja
        if (Math.random() < 0.01) {
            const nuevaHojaX = Math.random() * (window.innerWidth - 100);
            hojas.push({ x: nuevaHojaX, y: -100, nextActionTime: Date.now() });
        }

        window.requestAnimationFrame(drawBox);
    }
}

export default not_found_animation;
