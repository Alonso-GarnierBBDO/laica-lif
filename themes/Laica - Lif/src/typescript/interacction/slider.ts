/**
 * En este archivos generamos el slider el home
 */


let isDragging : boolean = false;
let movimiento : number = 0;
let startX : number = 0;
let sendRight = false;

const slider = () => {

    if(window.innerWidth < 700){

        container();

    }

}

function container(){

    const contentSlider : HTMLElement | null = document.querySelector('.carrousel .slider_item');

    if(contentSlider){

        const childElements : HTMLCollection = contentSlider.children;
        const arrayElements = Array.prototype.slice.call(childElements);

        const activeElements = arrayElements.filter( (e : HTMLElement) => {

            if(!e.classList.contains('remove')){
                return e;
            }
        })

        const elements = activeElements.slice(-1)[0];
        if(activeElements.length > 1){
            elements.classList.add('active');
        }else {
            elements.classList.add('view');
        }

        // Activamos el ultimo elemento


        arrayElements.forEach( ( element : HTMLElement) => {

            if(element.classList.contains('active')){

                const widthElement : number = element.offsetWidth;

                ejecutarClick(element, widthElement);

            }
            
        })

    }
}


function ejecutarClick(element : HTMLElement, widthElement : number){
    element.onmousedown = (e : MouseEvent) => {
        isDragging = true;
        startX = e.clientX;
    }

    mouseMove(element, widthElement);
    mouseUp(element);
    
}

function mouseMove(element : HTMLElement, widthElement: number){
    element.onmousemove = ( e : MouseEvent ) => {
        if(isDragging){
            movimiento += 1;

            const deltaX = e.clientX - startX;
            const percentageMoved =  Math.abs((deltaX / widthElement) * 100);

            // Mover el elemento mientras el usuario lo arrastra
            element.style.transform = `translateX(${movimiento}px)`;

            if(percentageMoved >= 50){
                sendRight = true;
            }

        }
    }
}

function mouseUp(element : HTMLElement){

    element.onmouseleave = () => {
        closeElemet(element);
    }

    element.onmouseup = () => {
        closeElemet(element);
    }
}

function closeElemet(element : HTMLElement){
    isDragging = false;
    movimiento = 0;

    if(sendRight){
        sendRight = false;
        element.classList.add('remove');
        element.classList.remove('active');
        element.style.transform = ''
        slider();
    }else{
        if(!element.classList.contains('remove')){
            element.style.transform = `translateX(${movimiento * 4}px) rotate(0deg)`;
        }
    }

    container();
}

export default slider;