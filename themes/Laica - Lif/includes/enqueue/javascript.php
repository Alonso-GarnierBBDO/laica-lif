<?php

    /**
     * All javascript scripts are executed in this file.
     */

    //  function javascript_settings() {
    //     wp_enqueue_script('settings_javascript', get_template_directory_uri() . '/dist/javascript/global.js', '1.0.0', true);
    //     wp_script_add_data('settings_javascript', 'type', 'module'); // Indicar que es un módulo
    // }
    
    // add_action('wp_enqueue_scripts', 'javascript_settings'); 

    wp_register_script('script', get_theme_file_uri('/dist/javascript/global.js'), '1.0');
    wp_enqueue_script('script');

    add_filter("script_loader_tag", "javascript_settings", 10, 3);
    function javascript_settings($tag, $handle, $src)
    {
        if ("script" === $handle) {
            $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        }

        return $tag;
    }