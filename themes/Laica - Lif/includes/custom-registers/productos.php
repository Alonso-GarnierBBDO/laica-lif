<?php

    /**
     * En esta seccion agregamos todos los items necesarios para seccion de productos
     */

    $wp_customize->add_section('productos-seccion', array(
        'title' => __('Productos', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    // Titulo secundario

    $wp_customize->add_setting('productos-setting-secundary', array(
        'capability' => 'edit_theme_options'
    ));

    // Insertamos el titulo del home
    $wp_customize->add_control('title-control', array(
        'label' => __('Titulo secundario'),
        'section' => 'productos-seccion',
        'settings' => 'productos-setting-secundary',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    // Titulo principal

    $wp_customize->add_setting('productos-setting-principal', array(
        'capability' => 'edit_theme_options'
    ));

    // Insertamos el titulo del home
    $wp_customize->add_control('title-control-principal', array(
        'label' => __('Titulo principal'),
        'section' => 'productos-seccion',
        'settings' => 'productos-setting-principal',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));
