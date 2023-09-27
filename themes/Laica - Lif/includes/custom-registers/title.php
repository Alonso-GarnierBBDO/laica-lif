<?php

    // Menu logo de la seccion de personalizar del wordpress
    $wp_customize->add_section('title-presentation', array(
        'title' => __('Inicio', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    $wp_customize->add_setting('title-presentation-setting', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('title-control', array(
        'label' => __('Titulo del inicio'),
        'section' => 'title-presentation',
        'settings' => 'title-presentation-setting',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));