
/**
 * Aqui ejecutamos el slider del widget
 */

window.addEventListener('load', () => {

    const inputGlide = document.querySelector('.noticias_slider');

    if(inputGlide){
      const glide = new Glide('.noticias_slider', {
        type: 'slider',
        autoplay: 5000, // 5000ms (5 segundos) entre cada transición
      });
      
      glide.mount();
    }
      
});

