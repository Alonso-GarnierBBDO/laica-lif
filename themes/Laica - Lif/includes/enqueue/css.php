<?php

    /**
     * All css styles are executed in this file.
     */

    function global_styles(){
        wp_enqueue_style('global-css', get_template_directory_uri() . '/dist/css/global.css');
    }
    
    add_action('wp_enqueue_scripts', 'global_styles');
