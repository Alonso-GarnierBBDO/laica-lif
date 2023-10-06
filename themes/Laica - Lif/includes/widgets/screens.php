<?php

    register_sidebar(array(
        'name' => 'Screens Widget Area',
        'id' => 'screens-widget-area',
        'description' => 'Área de widgets para fondos de pantalla',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));