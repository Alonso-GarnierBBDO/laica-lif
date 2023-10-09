<?php

    // Menu logo de la seccion de personalizar del wordpress
    $wp_customize->add_section('home-presentation', array(
        'title' => __('Inicio', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    $wp_customize->add_setting('home-presentation-setting', array(
        'capability' => 'edit_theme_options'
    ));

    // Insertamos el titulo del home
    $wp_customize->add_control('title-control-home ', array(
        'label' => __('Titulo del inicio'),
        'section' => 'home-presentation',
        'settings' => 'home-presentation-setting',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    // Insetamos las imangenes de los sobres

    // Primera imagen

    $wp_customize->add_setting('img-uno-presentation-setting', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control(new WP_Customize_Upload_Control($wp_customize, 'sobre-uno', array(
        'label' => __('Imagen del primer producto fijado', 'themename'),
        'section' => 'home-presentation',
        'settings' => 'img-uno-presentation-setting'
    )));

    // Segunda imagen

    $wp_customize->add_setting('img-dos-presentation-setting', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control(new WP_Customize_Upload_Control($wp_customize, 'sobre-dos', array(
        'label' => __('Imagen del segundo producto fijado', 'themename'),
        'section' => 'home-presentation',
        'settings' => 'img-dos-presentation-setting',
    )));

    // Titulo del enlace

    $wp_customize->add_setting('home-titulo-enlace', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('titulo-enlace-control-home ', array(
        'label' => __('Titulo del enlace'),
        'section' => 'home-presentation',
        'settings' => 'home-titulo-enlace',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    // Link del enlace

    $wp_customize->add_setting('home-enlace', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('enlace-control-home ', array(
        'label' => __('URL del enlace'),
        'section' => 'home-presentation',
        'settings' => 'home-enlace',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));



    // Multiples imagenes en el slider

    include(get_stylesheet_directory() . '/includes/custom-registers/controls/custom/very_image.php');
    
    // Registra la configuración personalizada para las imágenes múltiples
    $wp_customize->add_setting('multi_image_selector', array(
        'default'   => array(),
        'transport' => 'refresh',
        'type'      => 'theme_mod', // Puedes usar 'option' si prefieres guardar en opciones de tema
    ));

    // Registra el control personalizado para las imágenes múltiples
    $wp_customize->add_control(new Multi_Image_Customize_Control($wp_customize, 'multi_image_selector', array(
        'label'       => __('Select Multiple Images', 'themename'),
        'section'     => 'home-presentation',
    )));

