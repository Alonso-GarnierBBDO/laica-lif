
/**
 * Aqui ejecutamos el slider del widget
 */

window.addEventListener('load', () => {
  const glide = new Glide('.sticker_slider', {
    type: 'carousel',
    autoplay: '5000',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      768: {
        perView: 1 // Mostrar 1 elemento en pantallas más pequeñas (por ejemplo, dispositivos móviles)
      }
    }
  });
  glide.mount();
});

