<?php
    add_action('admin_enqueue_scripts', function () {
        $screen = get_current_screen();

        if ($screen->id === 'productos') {
            wp_enqueue_media();
            wp_enqueue_script('image-slider-uploader', plugins_url('assets/plugin-resourses.js', __FILE__), ['jquery']);
            wp_enqueue_style('image-slider-uploader', plugins_url('assets/plugin-resourses.css', __FILE__));
        }

        error_log(print_r(get_current_screen(), true));
    });
