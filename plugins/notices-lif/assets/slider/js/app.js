
/**
 * Aqui ejecutamos el slider del widget
 */

window.addEventListener('load', () => {

    const glide = new Glide('.noticias_slider', {
        type: 'slider',
        autoplay: 5000, // 5000ms (5 segundos) entre cada transición
      });
      
      glide.mount();
      
});

