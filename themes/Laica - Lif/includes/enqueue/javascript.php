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


    // Import library GSAP
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js', '1.0.0', true);
    // Import library GSAP Scrollyng
    wp_enqueue_script('gsap-scrollyng', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js', '1.0.0', true);
    // Import lodast
    wp_enqueue_script('lodast-scrollyng', 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js', '1.0.0', true);
    
    // import Scroll
    wp_enqueue_script('ScrollToPlugin', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js', '1.0.0', true);
    
    // Import Scroll 
    wp_enqueue_script( 'scrollg-animation', 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.8.3/smooth-scrollbar.js', '1.0.0', true);

    wp_enqueue_script( 'scrollg-animation-init', get_theme_file_uri('/javascript/gsap.js'), '1.0.0', true);
        
      

