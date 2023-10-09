<?php
/**
 * From here we initialize the important configurations of the site in general.
 */


// We register wordpress in the theme
function theme_register_menus() {
    // The main menu of the website will be called "Main Menu"
    register_nav_menus(
        array(
            'primary-menu' => __('Menú Principal', 'Ariane Garnier'),
        )
    );
}
// Iniciamos el registro del menu en el tema
add_action('init', 'theme_register_menus');


//  Habilitamos la seccion de widget en mi tema
function widgetArea() {
    include(get_stylesheet_directory() . '/includes/widgets/products_slider.php');
    include(get_stylesheet_directory() . '/includes/widgets/noticias.php');
    include(get_stylesheet_directory() . '/includes/widgets/stickers.php');
    include(get_stylesheet_directory() . '/includes/widgets/screens.php');
    include(get_stylesheet_directory() . '/includes/widgets/contacto.php');
}
add_action('widgets_init', 'widgetArea');


/**
 * We include the css and javascript files
 */

// Javascript
include(get_stylesheet_directory() . '/includes/enqueue/javascript.php');

// Css
include(get_stylesheet_directory() . '/includes/enqueue/css.php');

// Custom Register
function customRegister(WP_Customize_Manager $wp_customize){

    // Esta funcion genera multiples desarrollos

    // Menu Logo
    include(get_stylesheet_directory() . '/includes/custom-registers/menu.php');
    
    // Titulo del inicio
    include(get_stylesheet_directory() . '/includes/custom-registers/inicio.php');

    // Seccion de productos
    include(get_stylesheet_directory() . '/includes/custom-registers/productos.php');

    // Seccion
    include(get_stylesheet_directory() . '/includes/custom-registers/a-tu-manera.php');

    // Lo mas fresco
    include(get_stylesheet_directory() . '/includes/custom-registers/lo-mas-fresco.php');

    // Contacto
    include(get_stylesheet_directory() . '/includes/custom-registers/contacto.php');

    
}

add_action('customize_register', 'customRegister');

// Enable svg files in wordpress

function permitir_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'permitir_svg_upload');


// Reajustar la url
function flush_rewrite_rules_on_activation() {
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'flush_rewrite_rules_on_activation' );
