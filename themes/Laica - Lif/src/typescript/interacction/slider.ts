/**
 * En este archivos generamos el slider el home
 */

let childElements : HTMLElement[];
let lastChild : HTMLElement | null;
let firstChild : HTMLElement | null;
let moveItem : boolean = false;
let startX : number = 0;
let porcentage : number = 0;
let fatherChild : HTMLElement;

const slider = () : void => {

    /**
     * Esta funcion solo se ejecuta una sola vez
     */

    // Obtenemos el contenedor en donde se alojan todos los items del slider
    const sliderMobile : HTMLElement | null = document.querySelector('.carrousel .slider_item');

    if(sliderMobile){

        // Obtenemos todos los elementos hijos
        childElements = Array.prototype.slice.call(sliderMobile.children);
        fatherChild = sliderMobile;

        if(childElements.length){
            // Obtenemos el ultimo elemento hijo y el primero,
            // En este caso solo activamos el ultimo hijo
            const getLastChild : HTMLElement | null = sliderMobile.lastElementChild as HTMLElement | null ;
            const getFirstChild : HTMLElement | null = sliderMobile.firstElementChild as HTMLElement | null;

            if(getLastChild && getFirstChild){
                lastChild = getLastChild;
                firstChild = getFirstChild;

                // Cuando se le agrega la clase active es porque el item llega a estar activo

                if(window.innerWidth >= 700){
                    lastChild.classList.add('remove')

                    // Obtenemos el penultimo elemento para agregarle el active    
                    const countElements = sliderMobile.childElementCount;
                    const penultimoElemento = childElements[countElements - 2]

                    if(penultimoElemento){
                        penultimoElemento.classList.add('active');
                    }

                    // En la siguiente funcion validamos la posicion de las imagenes ilustrativas

                    reajustarIlustraciones();


                }else{
                    lastChild.classList.add('active');
                }

            }

            // Ejecutamos el metodo de arrastre del elemento
            metodoArrastrar()
        }

    }

}


function metodoArrastrar() : void {

    for(let i = 0; i < childElements.length; i++){

        const elementActive : HTMLElement = childElements[i] as HTMLElement;

        if(elementActive.classList.contains('active')){

            // Desde aqui ejecutamos el elemento apenas se preciona un click
            pressItem(elementActive);

        }

    }

}

// Desde aqui validamos si el usuario quiere arrastrar el elemento 
function pressItem(element : HTMLElement) : void{

    element.onmousedown = ( e : MouseEvent ) => {
        downEvent(element, e)
    }

    element.ontouchstart = ( e : TouchEvent ) => {
        downEvent(element, e)
    }

}

// Se encarga de validar cuando el usuario quiere validar cuando el usuario quiere mover la carta

function downEvent(element : HTMLElement, e : MouseEvent | TouchEvent){
    // Si moveItem pasa a true significa que el usuario puede arrastrar el item
    moveItem = true;    

    element.style.cursor = 'grab';

    // Posicion inicial dle mouse
    if(e instanceof TouchEvent ){
        startX = e.touches[0].clientX;
    }else{
        startX = e.clientX;
    }

    // Reseteamos el porcentaje que movio el usuario
    porcentage = 0;

    dragItem(element);
}

function dragItem(element : HTMLElement) : void {

    // Con la siguiente funcion, dejamos al usuario arrastrar la imagen para lograr ver las otras imagenes

    element.onmousemove = ( e : MouseEvent ) => {
        moveEvent(element, e);
    }

    element.ontouchmove = ( e : TouchEvent ) => {
        moveEvent(element, e);
    }

}

// Esta funcion se encarga de mover la carta dependiendo del eje X del cursor o touch del mobile
function moveEvent(element : HTMLElement, e : MouseEvent | TouchEvent){
    if(moveItem){

        const itemMove : HTMLElement | null = document.querySelector('.carrousel .image_mobile');

        if(itemMove){
            // itemMove.classList.add('remove')
        }

        element.style.cursor = 'grabbing';

        // Definemos la posicion del mouse en px
        let positionXMouse : number;

        if(e instanceof TouchEvent ){
            positionXMouse = e.touches[0].clientX - startX
        }else{
            positionXMouse = e.clientX - startX
        }
        
        // Obtenemos la anchura del elemento para calcular el porcentage
        let widthElement =  element.offsetWidth;

        // Definimos el porcentage del movimiento del mouse
        porcentage = positionXMouse / widthElement * 100;

        // Elemento de animation, para indicar al usuario en donde se esta moviendo
        animationImage(element);

        // Ejecutamos el movimiento de cancelar el item
        ejecutarMovimientoImagen(element);

    }
}


// Inicializamos animaciones de scroll
function animationImage(element : HTMLElement){

    element.style.transform = `translateX(${ porcentage / 1.5 }%)`;

}

function exitAnimation(element : HTMLElement){
    element.style.transform = '';
}


function ejecutarMovimientoImagen(element : HTMLElement) : void {

    element.onmouseup = () => {
        exitMove(element);
    }

    element.onmouseleave = () => {
        exitMove(element);
    }

    element.ontouchend = () => {
        exitMove(element);
    }

}   

// Esta funcion es para calidar la siguiente carta que tendra el nuevo active
function selectNewCard(element : HTMLElement, moverDerecha: boolean = true){

    // Buscamos la posicion de la carta movida
    const searchElement : number = childElements.indexOf(element);

    // Validamos cual carta debe moverse
    const select = moverDerecha ? searchElement - 1 : searchElement + 1;

    // Seleccionamos la siguiente carta a mover
    const newElement : HTMLElement | null  = childElements[select];

    // Agregar la clase a la nueva carta
    if(newElement){
        if(!moverDerecha){
            newElement.classList.remove('remove');    
        }

        newElement.classList.add('active');
        metodoArrastrar();
    }

    // Validar cuales cartas se muestran a los lados
    childElements.forEach( (e : HTMLElement, key : number) => {
        // const hiddenRight : HTMLElement | null = childElements[select + 1];
        // const hiddenLeft : HTMLElement | null = childElements[select - 1];

        if(key > (select + 1)){
            e.style.zIndex = '-1';
        }else if(key >= select){
            e.style.zIndex = '';
        }

        if(key < (select - 1)){
            e.style.zIndex = '-1';
        }else if(key <= select){
            e.style.zIndex = '';
        }

    })

}

function exitMove(element : HTMLElement){

    // Eliminas el moviento de las cartas
    
    if(moveItem){
        moveItem = false;

        element.style.cursor = 'pointer'

        // Ejecutamos la valicion, para ver mandamos la carta a la derecha o izquierda

        if(porcentage >= 50){
            if(firstChild != element){
                element.classList.add('remove');
                element.classList.remove('active');

                selectNewCard(element, true);

            }
            exitAnimation(element);
        }else if(porcentage <= -50) {
            if(lastChild != element){
                element.classList.remove('active');
                selectNewCard(element, false);
            }
            exitAnimation(element);
        }else {
            exitAnimation(element);
        }
    }
}

function reajustarIlustraciones(){

    /** 
     * Ajustar el elemento con respecto a las imagenes
     */

    const imageEscritorio : HTMLElement | null = document.querySelector('.carrousel .image_escritorio');

    if(imageEscritorio){

        const firstImage : HTMLElement | null = imageEscritorio.firstElementChild as HTMLElement ;
        const lastImage : HTMLElement | null = imageEscritorio.lastElementChild as HTMLElement;
        let topLastElement : number;
        let leftLastElement : number;
        let leftFirstElement : number;

        if(firstImage && lastImage){


            if(firstChild && fatherChild && lastChild){

                const porcentageElemento = (17 / 100) * fatherChild.offsetWidth;

                topLastElement = (fatherChild.offsetHeight + fatherChild.offsetTop) - lastImage.offsetHeight;
                leftLastElement = firstChild.offsetLeft;
                leftFirstElement =  (leftLastElement + lastChild.offsetWidth + (firstImage.offsetWidth / 2) ) + porcentageElemento;


                // Insertamos los estilos para posicionar los objetos
                lastImage.style.top = `${topLastElement}px`;
                lastImage.style.left = `${leftLastElement - porcentageElemento}px`;

                firstImage.style.top = `${fatherChild.offsetTop}px`;
                firstImage.style.left = `${leftFirstElement}px`;


            }            

        }

    }

}

export default slider;