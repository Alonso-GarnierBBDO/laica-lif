

const bottonScroll = () => {

    const bottomScroll : HTMLButtonElement | null = document.querySelector('.bottom_scroll');

    if(bottomScroll){

        bottomScroll.onclick = () => {

            const height = window.innerHeight;

            const container_element : HTMLElement | null = document.querySelector('.container.items_main_fron');

            if(container_element){
                container_element.scrollTo({
                    top: height,
                    left: 0,
                    behavior: "smooth",
                });
            }

        }

    }



}

export default bottonScroll;