
/**
 * Aqui ejecutamos el slider del widget
 */

window.addEventListener('load', () => {

    const botonItem = document.querySelectorAll('.allButtons button');


    // Obtenemos los botones del estilos
    if(botonItem.length){

      botonItem.forEach( e => {

        e.onclick = () => {
          const typeButton = e.getAttribute('type');

          botonItem.forEach( button => {
            button.classList.remove('active');
          })

          e.classList.add('active');

          const allScreens = document.querySelectorAll('.screen_slider_content_defined');
          
          if(allScreens){

            allScreens.forEach( element => {

                console.log(element);

                if(element.classList.contains(typeButton)){

                  element.style.display = 'block';

                  setTimeout(() => {
                    element.style.opacity = '1';
                  }, 100);

                }else{
                  
                  element.style.opacity = '0';
                  setTimeout(() => {
                    element.style.display = 'none';
                  }, 100);

                }
            });
          }

        }

      });

    }

    loadGlite();
      
});


function loadGlite(){

  const inputSlider = document.querySelector('.screen_slider_content_defined');

  if(inputSlider){
    
    new Glide('.screen_slider_content_defined.mobile', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      autoplay: 5000, // 5000ms (5 segundos) entre cada transición
      breakpoints: {
        768: {
          perView: 1 // Mostrar 1 elemento en pantallas más pequeñas (por ejemplo, dispositivos móviles)
        }
      }
    }).mount();
  
  
    new Glide('.screen_slider_content_defined.escritorio', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      autoplay: 5000, // 5000ms (5 segundos) entre cada transición
      breakpoints: {
        768: {
          perView: 1 // Mostrar 1 elemento en pantallas más pequeñas (por ejemplo, dispositivos móviles)
        }
      }
    }).mount();
  
  
    new Glide('.screen_slider_content_defined.tablet', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      autoplay: 5000, // 5000ms (5 segundos) entre cada transición
      breakpoints: {
        768: {
          perView: 1 // Mostrar 1 elemento en pantallas más pequeñas (por ejemplo, dispositivos móviles)
        }
      }
    }).mount();
  }

  remove();

}

function remove(){
  const allScreens = document.querySelectorAll('.screen_slider_content_defined');
          
  if(allScreens){

    allScreens.forEach( (element, key) => {

        if(key > 0){
          element.style.opacity = '0';
          element.style.display = 'none';
        }

    });
  }
}

