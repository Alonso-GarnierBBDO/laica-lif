<?php

/*
* Plugin Name:       Noticias Lif
* Plugin URI:        https://garnierbbdo.com
* Description:       Administra todos los noticias de Lif
* Version:           1.0.0
* Requires at least: 5.2
* Author:            Garnier BBDO
* Author URI:        https://garnierbbdo.com
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       Conocer más del plugin
*/

// Inializamos el plugin

add_action('init', function(){
    // Principal settings
    include plugin_dir_path(__FILE__) . 'settings/labels.php';

    // All arguments
    include plugin_dir_path(__FILE__) . 'settings/arguments.php';

    register_post_type('noticias', $args);

});

// Agregamo el editor

function cargar_mi_bloque_script() {
    $script_url = plugins_url('build/index.js', __FILE__);
    echo "<script type='module' src='$script_url'></script>";

    wp_enqueue_style('my-block-styles', plugins_url('build/style-index.css', __FILE__));

}

add_action('enqueue_block_editor_assets', 'cargar_mi_bloque_script');


function cargarEstitlosBloque() {

    // Importamos el glided
    $script_url = plugins_url('assets/slider/js/glide/glide.min.js', __FILE__);
    echo "<script src='$script_url'></script>";

    $script_url = plugins_url('assets/slider/js/app.js', __FILE__);
    echo "<script type='module' src='$script_url'></script>";

    wp_enqueue_style('my-block-styles-slider-glided', plugins_url('assets/slider/css/glide/glide.theme.min.css', __FILE__));
    wp_enqueue_style('my-block-styles-slider', plugins_url('assets/slider/css/style.css', __FILE__));
}

add_action('wp_enqueue_scripts', 'cargarEstitlosBloque');



// Registramos la api del plugin
function api_plugin() {
    register_rest_route('wp/v2', 'noticias', array(
        'methods' => 'GET',
        'callback' => 'obtener_noticias',
    ));
}

add_action('rest_api_init', 'api_plugin');

function obtener_noticias($request) {
    // Creamos un array para almacenar las noticias
    $noticias = array(); 

    // Configuramos los argumentos de la consulta
    $args = array(
        'post_type' => 'noticias',
        'posts_per_page' => 10,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    // Realizamos la consulta
    $noticias_query = new WP_Query($args);

    // Verificamos si hay noticias en la consulta
    if ($noticias_query->have_posts()) {
        while ($noticias_query->have_posts()) {
            $noticias_query->the_post();

            // Agregamos la imagen del post
            $image_array = explode(',', get_post_meta(get_the_ID(), 'images', true));
            $image_id = $image_array[0];
            $image_url = wp_get_attachment_image_src($image_id, 'full')[0];

            // Obtener subtitulo
            $subtitle = get_post_meta(get_the_ID(), 'subtitle', true);
            
            // Aquí puedes obtener los campos específicos que deseas incluir en la respuesta JSON
            $noticia = array(
                'titulo' => get_the_title(),
                'img' => $image_url,
                'subtitle' => $subtitle
            );

            // Agregamos la noticia al array de noticias
            $noticias[] = $noticia;
        }
        wp_reset_postdata();
    }

    // Devolvemos la respuesta JSON
    return new WP_REST_Response($noticias, 200);
}




// Iniciamolizamos el plugin

function noticesWidget() {

    include plugin_dir_path(__FILE__) . 'widgets/notice.php';
    
}

add_action('widgets_init', 'noticesWidget');

// Resources
include plugin_dir_path(__FILE__) . 'functions.php';

// Save items of plugin
include plugin_dir_path(__FILE__) . 'save.php';