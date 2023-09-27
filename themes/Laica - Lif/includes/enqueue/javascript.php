<?php

    /**
     * All javascript scripts are executed in this file.
     */

    // User the librery "Locomotive"


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

    // Esta configuracion es para el personalizar

    function theme_enqueue_customizer_js() {
        wp_enqueue_script('customizer-multimedia', get_template_directory_uri() . '/includes/custom-registers/controls/customizer-multimedia.js', array('jquery', 'customize-controls'), '1.0', true);
    }
    
    add_action('customize_controls_enqueue_scripts', 'theme_enqueue_customizer_js');

