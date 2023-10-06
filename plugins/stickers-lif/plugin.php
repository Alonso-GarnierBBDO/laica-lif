<?php

/*
* Plugin Name:       Stickers Lif
* Plugin URI:        https://garnierbbdo.com
* Description:       Administra todos los stickers de Lif
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

    register_post_type('stickers', $args);

});

// Iniciamolizamos el plugin

function stickersWidget() {

    include plugin_dir_path(__FILE__) . 'widgets/sticker.php';
    
}

// Registramos el nuevo bloque

function cargar_mi_bloque_script_stickers() {

    $script_url = plugins_url('build/index.js', __FILE__);
    echo "<script type='module' src='$script_url'></script>";

}

add_action('enqueue_block_editor_assets', 'cargar_mi_bloque_script_stickers');

// Cargar estilos del slider

function cargarEstitlosBloqueStickers() {

    // Importamos el glided
    $script_url = plugins_url('widgets/stickers/assets/js/glite/glide.min.js', __FILE__);
    echo "<script src='$script_url'></script>";

    $script_url = plugins_url('widgets/stickers/assets/js/app.js', __FILE__);
    echo "<script type='module' src='$script_url'></script>";

    wp_enqueue_style('my-block-styles-slider-glided-stickers', plugins_url('widgets/stickers/assets/css/glide/glide.theme.min.css', __FILE__));
    wp_enqueue_style('my-block-styles-slider-stickers', plugins_url('widgets/stickers/assets/css/style.css', __FILE__)); 
}

add_action('wp_enqueue_scripts', 'cargarEstitlosBloqueStickers');


// Registramos la api del plugin

function api_plugin_stickers() {
    register_rest_route('wp/v2', 'stickers', array(
        'methods' => 'GET',
        'callback' => 'obtener_stickers',
    ));
}

add_action('rest_api_init', 'api_plugin_stickers');

function obtener_stickers($request) {
    // Creamos un array para almacenar las noticias
    $stickers = array(); 

    // Configuramos los argumentos de la consulta
    $args = array(
        'post_type' => 'stickers',
        'posts_per_page' => 10,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    // Realizamos la consulta
    $stickers_query = new WP_Query($args);

    // Verificamos si hay noticias en la consulta
    if ($stickers_query->have_posts()) {
        while ($stickers_query->have_posts()) {
            $stickers_query->the_post();

            // Agregamos la imagen del post
            $image_array = explode(',', get_post_meta(get_the_ID(), 'images', true));
            $image_id = $image_array[0];
            $image_url = wp_get_attachment_image_src($image_id, 'full')[0];

            $link = get_post_meta(get_the_ID(), 'link', true);
            
            // Aquí puedes obtener los campos específicos que deseas incluir en la respuesta JSON
            $noticia = array(
                'titulo' => get_the_title(),
                'img' => $image_url,
                'enlace' => 'https://' . $link
            );

            // Agregamos la noticia al array de noticias
            $noticias[] = $noticia;
        }
        wp_reset_postdata();
    }

    // Devolvemos la respuesta JSON
    return new WP_REST_Response($noticias, 200);
}

add_action('widgets_init', 'stickersWidget');


// Resources
include plugin_dir_path(__FILE__) . 'functions.php';

// Save items of plugin
include plugin_dir_path(__FILE__) . 'save.php';