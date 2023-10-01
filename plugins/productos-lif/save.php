<?php

    // En este apartado guardamos todos los items de las productos

    add_action('save_post', 'save_application_exposiciones');

    function save_application_exposiciones($post_id){

        if (!isset($_POST['post_type']) || $_POST['post_type'] !== 'productos') return $post_id;

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
    
        if (!current_user_can('edit_post', $post_id))  return $post_id;

        update_post_meta($post_id, 'file', $_POST['file']);
        update_post_meta($post_id, 'images', $_POST['images_field']);

    }