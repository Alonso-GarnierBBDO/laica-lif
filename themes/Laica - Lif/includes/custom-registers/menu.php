<?php

    // Menu logo de la seccion de personalizar del wordpress
    $wp_customize->add_section('menu-logo', array(
        'title' => __('Menu Logo', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    $wp_customize->add_setting('menu-logo-setting', array(
        'capability' => 'edit_theme_options'
    ));

    // Este control agrega el campo de una imagen
    $wp_customize->add_control(new WP_Customize_Upload_Control($wp_customize, 'menu-logo-control', array(
        'label' => __('Logo del Menú', 'themename'),
        'section' => 'menu-logo',
        'settings' => 'menu-logo-setting'
    )));