<?php

    register_sidebar(array(
        'name' => 'Stickers Widget Area',
        'id' => 'stickers-widget-area',
        'description' => 'Área de widgets para stickers',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));