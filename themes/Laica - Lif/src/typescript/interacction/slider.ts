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
        start(e);
    }

    element.ontouchstart = ( e : TouchEvent ) => {
        start(e);
    }

    mouseMove(element, widthElement);
    mouseUp(element);
    
}

function start( e: MouseEvent | TouchEvent){

    isDragging = true;

    if (e instanceof TouchEvent) {
        startX = e.touches[0].clientX;
    } else {
        startX = e.clientX;
    }
}

function mouseMove(element : HTMLElement, widthElement: number){
    element.onmousemove = ( e : MouseEvent ) => {
        move(e, element, widthElement);
    }
}

function move(e : MouseEvent, element : HTMLElement, widthElement: number){

    if (isDragging) {
        movimiento += 1;

        let deltaX : number = 0;

        if(e instanceof TouchEvent){
            deltaX = e.touches[0].clientX - startX;
        }else{
            deltaX = e.clientX - startX;
        }

        
        var percentageMoved = Math.abs((deltaX / widthElement) * 100);
        // Mover el elemento mientras el usuario lo arrastra
        element.style.transform = "translateX(".concat(`${movimiento}`, "px)");
        if (percentageMoved >= 50) {
            sendRight = true;
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

    element.ontouchend = () => {
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