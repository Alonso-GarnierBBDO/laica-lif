<?php

    /**
     * All javascript scripts are executed in this file.
     */


    

    // User the librery "Locomotive"
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js', '1.0.0', true);  

    wp_register_script('script', get_theme_file_uri('/dist/javascript/src/typescript/global.js'), '1.0');
    wp_enqueue_script('script');

    add_filter("script_loader_tag", "javascript_settings", 10, 3);
    function javascript_settings($tag, $handle, $src)
    {
        if ("script" === $handle) {
            $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        }

        return $tag;
    }

