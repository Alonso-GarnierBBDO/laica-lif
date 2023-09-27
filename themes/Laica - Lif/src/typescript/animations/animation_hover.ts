
// En este archivo se crean los items de todos los links de animaacion con la clase espefica

const animation_hover = () => {
    
    const link_element : NodeListOf<HTMLElement> | null = document.querySelectorAll('.hover_animation');

    link_element.forEach( (element : HTMLElement) => {

        const divAnimation = document.createElement('div');
        divAnimation.classList.add('container_animate');

        const entryAnimate = document.createElement('div');
        entryAnimate.classList.add('item_animate');

        divAnimation.appendChild(entryAnimate);

        element.appendChild(divAnimation);

        element.onmouseover = () => {
            divAnimation.classList.add('active');
        }

        element.onmouseleave = () => {
            divAnimation.classList.add('exit');
            setTimeout(()=>{
                divAnimation.remove();
                animation_hover();
            }, 500)
        }


    } )

}

export default animation_hover;  