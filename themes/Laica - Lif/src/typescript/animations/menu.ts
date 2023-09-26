
/**
 * En este archivo generamos la animacion del hover del menu
 */

const menu = () => {

    const menuItems : NodeListOf<HTMLElement> | null = document.querySelectorAll('#navegation li a');

    if(menuItems){

        const logo_item : HTMLElement | null  = document.querySelector('#navegation li.logo');

        if(logo_item){

            const widthLogo = logo_item.offsetWidth / 2;
            const positionXLogoRelative = logo_item.offsetLeft + widthLogo;

            const newElement : HTMLElement = document.createElement("div");
            newElement.classList.add('bubble');
            logo_item.appendChild(newElement)

            const allPositionLogo = logo_item.getBoundingClientRect();
            const positionLogoX = allPositionLogo.x;

            menuItems.forEach( e => {

                newElement.style.left = `${positionXLogoRelative}px`;

                if(!e.classList.contains('img')){

                    const positionElement = e.getBoundingClientRect();
                    const positionX = positionElement.x;
                    const positionRelative = e.offsetLeft;

                    e.onmouseover = () => {
                        visible(e, newElement, positionX, positionLogoX, positionRelative);
                    }

                    e.onmouseout = () => {
                        remove(newElement, positionXLogoRelative)
                    }
  
                    e.onfocus = () => {
                        visible(e, newElement, positionX, positionLogoX, positionRelative);
                    }

                    e.onblur = () => {
                        remove(newElement, positionXLogoRelative);
                    }


                }
    
            })
        }

    }



}


function visible(e : HTMLElement, newElement : HTMLElement, positionX : number, positionLogoX : number, positionRelative : number){
    const widthElement = e.offsetWidth + 10;
    newElement.style.width = `${widthElement}px`;
    
    // Validamos si el elemento esta al lado izquierdo o derecho del elemento 

    if(positionLogoX > positionX){
        newElement.style.left = `${positionRelative - 5.5}px`
    }else{
        newElement.style.left = `${positionRelative - 5.5}px`
    }
}

function remove(newElement: HTMLElement, positionXLogoRelative: number){
    newElement.style.left = `${positionXLogoRelative}px`;
    newElement.style.width = `0px`;
}

export default menu;