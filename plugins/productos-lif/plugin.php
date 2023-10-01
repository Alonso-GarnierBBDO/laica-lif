<?php

/*
* Plugin Name:       Productos Lif
* Plugin URI:        https://garnierbbdo.com
* Description:       Administra todos los productos de Lif
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

    register_post_type('productos', $args);

});


// Iniciamolizamos el plugin

function allWidgets() {

    include plugin_dir_path(__FILE__) . 'widgets/slider.php';
    
}

add_action('widgets_init', 'allWidgets');


// Resources
include plugin_dir_path(__FILE__) . 'functions.php';

// Save items of plugin
include plugin_dir_path(__FILE__) . 'save.php';