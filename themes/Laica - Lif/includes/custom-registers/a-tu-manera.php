<?php


    include(get_stylesheet_directory() . '/includes/custom-registers/controls/custom/tiny_editor.php');


    // Agregamos la seccino del sitio
    $wp_customize->add_section('a-tu-manera-section', array(
        'title' => __('A tu manera', 'themename'),
        'description' => '',
        'priority' => 120
    ));


    // Agregamos la compatibilidad
    $wp_customize->add_setting('a-tu-manera-setting-content', array(
        'compatility' => 'edit_theme_options'
    ));

    // Agregamos los campos que se necesitan

    $wp_customize->add_control(new WP_Customize_Teeny_Control($wp_customize, 'a-tu-manera-setting-content', [
        'label' => __('Texto principal', 'themename'),
        'section' => 'a-tu-manera-section'
    ]));

    // Imagen principal

    $wp_customize->add_setting('img-principal-setting', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control(new WP_Customize_Upload_Control($wp_customize, 'img-principal-setting', array(
        'label' => __('Imagen principal', 'themename'),
        'section' => 'a-tu-manera-section',
        'settings' => 'img-principal-setting',
    )));


    // Contenido de motivacion

    $wp_customize->add_setting('a-tu-manera-setting-motivacion', array(
        'compatility' => 'edit_theme_options'
    ));

    // Agregamos los campos que se necesitan

    $wp_customize->add_control(new WP_Customize_Teeny_Control($wp_customize, 'a-tu-manera-setting-motivacion', [
        'label' => __('Texto secundario', 'themename'),
        'section' => 'a-tu-manera-section'
    ]));


     // Imagen secundaria

     $wp_customize->add_setting('img-secundaria-setting', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control(new WP_Customize_Upload_Control($wp_customize, 'img-secundaria-setting', array(
        'label' => __('Imagen secundaria', 'themename'),
        'section' => 'a-tu-manera-section',
        'settings' => 'img-secundaria-setting',
    )));