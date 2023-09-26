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


/**
 * We include the css and javascript files
 */

// Javascript
include(get_stylesheet_directory() . '/includes/enqueue/javascript.php');

// Css
include(get_stylesheet_directory() . '/includes/enqueue/css.php');


// In this area all the widgets that are necessary for the theme are initialized.

    // function theme_widgets_init() {
    //     // Registramos una zona de widgets
    //     register_sidebar(array(
    //         'name' => __('Área de Widgets', 'Ariane Garnier'),
    //         'id' => 'sidebar-1', // Cambia el ID si es necesario
    //         'description' => __('Área de widgets para agregar contenido personalizado.', 'Ariane Garnier'),
    //         'before_widget' => '<div id="%1$s" class="widget %2$s">',
    //         'after_widget' => '</div>',
    //         'before_title' => '<h3 class="widget-title">',
    //         'after_title' => '</h3>',
    //     ));
    // }

    // add_action('widgets_init', 'theme_widgets_init');


// We finish widget area


// Custom Register
function customRegister(WP_Customize_Manager $wp_customize){

    // Menu Logo
    include(get_stylesheet_directory() . '/includes/custom-registers/menu.php');
    
}

add_action('customize_register', 'customRegister');

// Enable svg files in wordpress

function permitir_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'permitir_svg_upload');