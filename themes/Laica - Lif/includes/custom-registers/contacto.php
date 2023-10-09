<?php

    // Agregamos la seccino del sitio
    $wp_customize->add_section('contacto-section', array(
        'title' => __('Contacto', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    // Este es el enlace principal

    $wp_customize->add_setting('enlace-principal-contacto', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('enlace-principal-control', array(
        'label' => __('Enlace principal'),
        'section' => 'contacto-section',
        'settings' => 'enlace-principal-contacto',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    // Seccion de email

    $wp_customize->add_setting('email-contacto-settings', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('email-contacto-control', array(
        'label' => __('Correo electrónico'),
        'section' => 'contacto-section',
        'settings' => 'email-contacto-settings',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    // Seccion de email

    $wp_customize->add_setting('phone-contacto-settings', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('phone-contacto-control', array(
        'label' => __('Teléfono'),
        'section' => 'contacto-section',
        'settings' => 'phone-contacto-settings',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

    $wp_customize->add_setting('address-contacto-settings', array(
        'capability' => 'edit_theme_options'
    ));

    $wp_customize->add_control('address-contacto-control', array(
        'label' => __('Dirección'),
        'section' => 'contacto-section',
        'settings' => 'address-contacto-settings',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));

