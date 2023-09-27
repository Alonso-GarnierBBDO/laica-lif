<?php

    /**
     * All javascript scripts are executed in this file.
     */

    // User the librery "Locomotive"

    function locomotive_settings() {
        wp_enqueue_script('settings_javascript', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js', '1.0.0', true);
    }
    
    add_action('wp_enqueue_scripts', 'locomotive_settings'); 


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

