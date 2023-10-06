<?php

    // Add settings to plugin
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'screens'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => null,
        'supports' =>  array('title'),
        'menu_icon' => 'dashicons-screenoptions',
        'show_in_rest' => true,
        'rest_base' => 'screens',
        'rest_namespace' => 'screens',
        'register_meta_box_cb' => function () {
            // All arguments
            include plugin_dir_path(__FILE__) . 'boxs/imagen.php';
            include plugin_dir_path(__FILE__) . 'boxs/fondo.php';
        }
    );