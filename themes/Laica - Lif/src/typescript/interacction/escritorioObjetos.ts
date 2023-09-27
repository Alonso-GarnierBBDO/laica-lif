/** 
 * En este archivo se generan las posiciones de cada elemento en el home de lif
 * Este acomodo solo funciona en escritorio
 */



const objetos = () => {

    if(window.innerWidth >= 700){
        // Obtenemos el title principal, para saber la anchera y altura del miemo
        const title : HTMLElement | null = document.querySelector("h1");

        // Obtenemos el texto mayor para saber en donde se debe colocar los items
        const titlePrincipal : HTMLElement | null = document.querySelector("h1 .principal");

        // Objeto acomodado en la izquierda
        const firstImage : HTMLElement  | null = document.querySelector(".presentation  .img .lif_hojita");

        // Esta se acomodada a la derecha
        const secondImage : HTMLElement  | null = document.querySelector(".presentation  .img .lif_frasco");

        // Esta imagen se acomoda abajo a la izquierda pegada en el top
        const tercerImage : HTMLElement  | null = document.querySelector(".presentation  .img_two .lif_frasco");

        // Esta imagen se acomoda abajo a la derecha
        const cuartaImage : HTMLElement  | null = document.querySelector(".presentation  .img_two .objects");

        // Validamos si existen
        if(titlePrincipal && title){
            
            // Obtenemos la posicion del elemento
            const positionTitle : DOMRect = titlePrincipal.getBoundingClientRect();

            // La posicion del elemento a la izquierda
            const positionTitleX : number = positionTitle.left;

            // La posicision del elemento havcia arriba
            const positionTitleY : number = positionTitle.top;

            // Elemento la posicion del todo el contenido del h1
            const titleHeight : number = title.offsetHeight;

            // Obtenemos las cantidad de rems que contiene el h1 para asi ajustar los objetos alrededor

            const titlePrincipalStyles = getComputedStyle(titlePrincipal);
            const titlePixelSize = parseInt(titlePrincipalStyles.fontSize);


            // Estas seran las futuras posiciones de cada elemento
            let positionTop : number = 0;
            let positionLeft : number = 0;

            if(firstImage){

                // Guardamos las posiciones del elemento 1
                // positionTop = positionTitleY - (titleHeight + (firstImage.offsetWidth / 2.4));
                positionTop = positionTitleY + (firstImage.offsetHeight / 2);
                positionLeft = positionTitleX - (firstImage.clientWidth / 1.5);

                // Reajustamos tanto arriba como a la izquierda el elemento, y asi el elemento llega a ser responsivo
                firstImage.style.position = "absolute";
                firstImage.style.top = `${positionTop}px`;
                firstImage.style.left = `${positionLeft}px`;
            }

            if(secondImage){

                // Obtenemos el height de la imagen para acoplarla en el titulo
                const secondImageHeight = secondImage.offsetHeight;

                // Guardamos las pociciones del elemento 2
                // positionTop = positionTitleY - (titleHeight + (secondImage.offsetWidth * 1.4)) + (secondImageHeight / 1.1);
                positionTop = positionTitleY - (titlePixelSize / 10);
                positionLeft = positionTitleX - (secondImage.clientWidth - titlePrincipal.offsetWidth) + (secondImage.offsetWidth / 2);

                // Reajustamos tanto arriba como a la derecha el elemento, y asi el elemento llega a ser responsivo
                secondImage.style.position =  "absolute";
                secondImage.style.top = `${positionTop}px`;
                secondImage.style.left = `${positionLeft}px`;

            }

            if(tercerImage){

                positionTop = positionTitleY + titlePixelSize * 1.2;
                positionLeft = 0 + (tercerImage.offsetWidth / 3);

                tercerImage.style.position = "absolute";
                tercerImage.style.top = `${positionTop}px`;
                tercerImage.style.left = `${positionLeft}px`;

            }

            if(cuartaImage){

                positionTop = positionTitleY + (titlePrincipal.offsetHeight * 3);
                positionLeft = positionTitleX - (cuartaImage.clientWidth - titlePrincipal.offsetWidth) + (cuartaImage.offsetWidth * 1.1);

                cuartaImage.style.position = "absolute";
                cuartaImage.style.top = `${positionTop}px`;
                cuartaImage.style.left = `${positionLeft}px`
                
            }
            

        }
    }

}

export default objetos;