/**
 * Desde este archivo generamos los circulos
 */


const circles = () => {

    const circlesElement : HTMLElement | null = document.querySelector('.circulo');

    if(circlesElement){

        // Obtenemos la al
        const heightElement : number = circlesElement.offsetHeight;
        const widhtElement : number = circlesElement.offsetWidth;
        let totalCircles : number = 0;
        const containerCircles : HTMLElement | null = document.createElement('div');
        const itemsContainerCircles : HTMLElement | null = circlesElement.querySelector('.circulo .container_circles');

        // Validamos en que dispositivo se encuentra

        if(window.innerWidth < 700){
            totalCircles = Math.round(heightElement / widhtElement);
        }else{
            totalCircles = 2;
        }

        if(!itemsContainerCircles){
            containerCircles.classList.add('container_circles');
            circlesElement.appendChild(containerCircles);
        }else{
            containerCircles.innerHTML = '';
        }

        for(let i = 0; i < totalCircles; i++){
            const newCircle : HTMLElement | null = document.createElement('div');
            newCircle.classList.add('item');
            if(containerCircles){
                containerCircles.appendChild(newCircle);
            }
        }


    }

}

export default circles;