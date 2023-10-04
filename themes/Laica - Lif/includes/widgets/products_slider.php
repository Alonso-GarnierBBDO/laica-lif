<?php

    register_sidebar(array(
        'name' => 'Slider Products Widget Area',
        'id' => 'slider-products-widget-area',
        'description' => 'Área de widgets para el slider de productos',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));