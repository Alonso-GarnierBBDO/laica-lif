<?php

    // Add settings to plugin
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'noticias'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => null,
        'supports' =>  array('title'),
        'menu_icon' => 'dashicons-text-page',
        'show_in_rest' => true,
        'rest_base' => 'noticias',
        'rest_namespace' => 'noticias',
        'register_meta_box_cb' => function () {
            // All arguments
            include plugin_dir_path(__FILE__) . 'boxs/imagen.php';
            include plugin_dir_path(__FILE__) . 'boxs/subtitle.php';
        }
    );