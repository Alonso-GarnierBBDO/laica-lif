<?php

    // En este apartado guardamos todos los items de las screens

    add_action('save_post', 'save_application_screen');

    function save_application_screen($post_id){

        if (!isset($_POST['post_type']) || $_POST['post_type'] !== 'screens') return $post_id;

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
    
        if (!current_user_can('edit_post', $post_id))  return $post_id;

        echo "Hola";

        update_post_meta($post_id, 'images', $_POST['images_field']);
        update_post_meta($post_id, 'fondo', $_POST['fondo']);

    }