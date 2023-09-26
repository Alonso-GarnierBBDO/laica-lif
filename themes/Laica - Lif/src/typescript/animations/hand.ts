/**
 * En este archivos cargamos todos los items del modal
 */


const hand = () => {

    const hand : HTMLButtonElement | null = document.querySelector('header .hand');
    const modal : HTMLElement | null = document.querySelector('header .modal');

    if(hand){
        hand.onclick = () => {  
            if(modal){
                toggleModal(modal);
            }
        }
    }

    if(modal){
        modal.onclick = (e) => {
            if(modal == e.target){
                toggleModal(modal);
            }
        }
    }

}

function toggleModal(modal: HTMLElement){
    if(modal.classList.contains('active')){
        modal.classList.remove('active')

        setTimeout(() => {
            modal.style.display = "none";
        }, 200)
        
    }else{
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add('active');
        }, 50)  
    }
}

export default hand;