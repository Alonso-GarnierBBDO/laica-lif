
/**
 * Aqui ejecutamos el slider del widget
 */

let moveActive = false;
let porcentage = 0;
let startX = 0;
let positionXMouse;
let activeElement;
let rightElement;
let chilsAll;
let content_puntero;
let content_puntero_childs;
let fatherElement;
let sizeContent = 0;

window.onload = () => {
    initSlider();
}

function initSlider(){
    
    const getFather = document.querySelector('.slider_productos');

    

    if(getFather){

        fatherElement = getFather;

        // Obtenemos los elementos hijos
        const childs = Array.from(getFather.children);

        chilsAll = childs;

        // Validamos que elementos se van a la izquierda o derecha
        childs.forEach( ( element, key ) => {

            rightIndex()

            if(key === 0){
                element.classList.add('left');
            }else if(key === 1){
                element.classList.add('active');
                element.style.zIndex = `${chilsAll.length + 3}`;

            }else if( key > 1 ){
                element.classList.add('right');
            }

            const contentElement = element.querySelector('.content_product_slider');

            if(contentElement){
                if(sizeContent < contentElement.offsetTop){
                    sizeContent = contentElement.offsetTop;
                }
            }

        });

        activarMovimiento(getFather);
        inicializarPuntero(childs);


    }

}

function activarMovimiento(father){

    if(father){
        activeElement = father.querySelector('.active');

        if(activeElement){
            // Validamos cuando el usuario pulsa el elemento
            activeElement.onmousedown = (e) => {
                startX = e.clientX;
                eventDown(father)
            }


            activeElement.ontouchstart = (e) => {
                startX = e.touches[0].clientX;
                eventDown(father)
            }

            /*activeElement.onclick = () => {
                moveActive = true;
                porcentage = -60;
                exitMove(father);

            }*/

        }

        /*setTimeout( () => {
            rightElement = father.querySelectorAll('.left');

            if(rightElement){

                rightElement.forEach( e => {
                    if(!e.classList.contains('active')){
                        e.onclick = () => {
                            console.log(e);
                        }
                    }
                })
    
            }
        }, 100)*/

        father.onmousemove = (e) => {
            eventMove(e.clientX, father);
        }

        father.ontouchmove = (e) => {
            eventMove(e.touches[0].clientX, father);
        }

        if(moveActive){
            father.onmouseup = () => { 
                exitMove(father);
            }
    
            father.onmouseleave = () => {
    
                exitMove(father);
        
            }

            father.ontouchend = () => {
                exitMove(father);
            }
        }
    }

}

function eventDown(father){
    // Le indicamos al usuario que si puede moverse
    moveActive = true;
    porcentage = 0;
    positionXMouse = 0;
    activarMovimiento(father);  
}

function eventMove(e, father){
    if(moveActive){

        activeElement = father.querySelector('.active');

        if(activeElement){
            let widthElement =  activeElement.offsetWidth;
            positionXMouse = e - startX;
            porcentage = positionXMouse / widthElement * 100;   

            if(porcentage <= 100 && porcentage >= -100){
                activeElement.style.transform = `translateX(${porcentage}%)`
            }

        }

    }
}

function exitMove(father){

    if(moveActive){
        moveActive = false;
        
        const removeMano = document.querySelector('.movimiento_manita_productos');

        if(removeMano){
            removeMano.remove()
        }

        if(porcentage >= 50){

            moveDirection('right');

        }else if(porcentage <= -50){

            // Agregamos el siguiente elemento hermano

            moveDirection('left');

        }else if(porcentage == 0){
            moveDirection('left');
        }else{
            noMove();
        }

        activarMovimiento(father);
    }

}


function noMove(){
    activeElement.style.transition = '.5s ease';
    activeElement.style.transform = `translateX(0%)`;    
    setTimeout( () => {
        activeElement.style.transition = '';
    }, 500)
}


function moveDirection(direction){

    const brotherElement = direction == 'left' ? activeElement.nextElementSibling : activeElement.previousElementSibling;

    if(brotherElement){

        // Removemos el elemento actual
        activeElement.classList.add(direction);
        activeElement.classList.remove('active');
        activeElement.style.transform = '';

        brotherElement.style.transition = '.5s ease';

        brotherElement.classList.remove( direction == 'left' ? 'right' : 'left');
        brotherElement.classList.add('active');

        updatePuntero(brotherElement);

        setTimeout( () => {
            brotherElement.style.transition = '';
        }, 500);

        brotherElement.style.zIndex = `${chilsAll.length + 3}`;

    }else {
        noMove()
    }

    rightIndex();
}

function rightIndex(){

    let i = chilsAll.length;

    chilsAll.forEach( (e, key) => {

        if(e.classList.contains('right')){
            e.style.zIndex = `${i -= 1 }`
        }
    })

}

// A partir de esta funcion se inicializa el punto 
function inicializarPuntero(childs){

    const contenePuntero = document.querySelector('.nav_productos');

    if(contenePuntero){

        content_puntero = contenePuntero;

        if(window.innerWidth <= 700){
            contenePuntero.style.top = `${sizeContent + 110}px`;   
        }

        childs.forEach( (e, key) => {

            contenePuntero.innerHTML += `<button key="${key}" class="${ e.classList.contains('active') ? 'active' : '' }"></button>`;

        })

        content_puntero_childs = Array.from(contenePuntero.children);

        updatePuntero();

    }


}

function updatePuntero(element = null){

    if(element){
        const keyElement = chilsAll.findIndex( (e, key) => {
            if(e == element){
                return key + 1;
            }
        })
    
        const elementChild = Array.from(content_puntero.children);
    
        // Removemos el elemento activo y seleccionamos el nuevo
    
        elementChild.forEach( (e, key) => {
            if(e.classList.contains('active')){
                e.classList.remove('active');
            }
    
            if(key === keyElement){
                e.classList.add('active');
                e.style.zIndex = `${chilsAll.length + 3}`;
            }
        });
    }

    content_puntero_childs.forEach( (botonElement, key) => {

        botonElement.onclick = () => {
            
            let i = 100;

            chilsAll.forEach( ( e, keyElement ) =>{

                // Aqui se estable el boton del elemento 

                content_puntero_childs.forEach( (element, key) => {

                    if(element == botonElement){
                        element.classList.add('active');
                        element.style.zIndex = `${chilsAll.length + 3}`;
                        
                    }else{
                        element.classList.remove('active');
                    }
                    rightIndex();
                })

                setTimeout( () => {
                    
                    i += 100;

                    e.style.transition = '.5s ease';

                    if(keyElement === key){
                        e.classList.remove('left');
                        e.classList.remove('right');
                        e.classList.add('active');
                        e.style.zIndex = `${chilsAll.length + 3}`;
                    }else if( keyElement < key ){
                        e.classList.remove('right');
                        e.classList.add('left');
                        e.classList.remove('active');
                    }else if( keyElement > key ){
                        e.classList.remove('left');
                        e.classList.add('right');
                        e.classList.remove('active');
                    }

                    activarMovimiento(fatherElement);

                    setTimeout(() => {
                        e.style.transition = '';
                        botonElement
                    }, 500)

                    rightIndex();

                }, i)
            })

        }

    })


    

}



