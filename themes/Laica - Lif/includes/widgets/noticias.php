<?php

    register_sidebar(array(
        'name' => 'Noticias Widget Area',
        'id' => 'noticias-widget-area',
        'description' => 'Área de widgets para noticias',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));