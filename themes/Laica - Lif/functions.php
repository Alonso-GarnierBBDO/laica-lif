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

// Custom Register
function customRegister(WP_Customize_Manager $wp_customize){

    // Esta funcion genera multiples desarrollos

    class Multi_Image_Customize_Control extends WP_Customize_Control {
        public function enqueue()
        {
        wp_enqueue_style('multi-image-style', get_template_directory_uri().'/includes/custom-registers/controls/custom.css');
        wp_enqueue_script('multi-image-script', get_template_directory_uri() . '/includes/custom-registers/controls/customizer-multimedia.js', array( 'jquery' ), rand(), true);
        }

        public function render_content()
        { ?>
            <label>
                <span class='customize-control-title'>Imagen del slider principal</span>
            </label>
            <div>
                <ul class='images'></ul>
            </div>
            <div class='actions' id="agregar_nuevo">
                <a class="button-secondary upload">Agregar</a>
            </div>

            <input class="wp-editor-area" id="images-input" type="hidden" <?php $this->link(); ?>>
        <?php
        }
    }

    // Menu Logo
    include(get_stylesheet_directory() . '/includes/custom-registers/menu.php');
    
    // Titulo del inicio
    include(get_stylesheet_directory() . '/includes/custom-registers/inicio.php');

    
}

add_action('customize_register', 'customRegister');

// Enable svg files in wordpress

function permitir_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'permitir_svg_upload');