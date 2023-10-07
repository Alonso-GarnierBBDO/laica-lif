
const view = () : void => {

    const view : HTMLElement | null = document.querySelector('.circulo .presentation');
    const main : HTMLElement | null = document.querySelector('main');

    if(view && main){

        const contentProperties = window.getComputedStyle(main);
        const contentPadding =  parseInt(contentProperties.getPropertyValue('padding-top'));

        const heightView : number = window.innerHeight;
        const vh : number = (heightView - contentPadding - 100);


        view.style.height = `${vh}px`;
    }

}

export default view;