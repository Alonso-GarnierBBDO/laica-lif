

const bottonScroll = () => {

    const bottomScroll : HTMLButtonElement | null = document.querySelector('.bottom_scroll');

    if(bottomScroll){

        bottomScroll.onclick = () => {

            const height = window.innerHeight;

            window.scrollTo({
                top: height,
                left: 0,
                behavior: "smooth",
            });

        }

    }



}

export default bottonScroll;