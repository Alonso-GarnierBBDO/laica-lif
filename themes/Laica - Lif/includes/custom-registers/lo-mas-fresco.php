<?php 

    // Menu logo de la seccion de personalizar del wordpress
    $wp_customize->add_section('lo-mas-fresco', array(
        'title' => __('Los más fresco', 'themename'),
        'description' => '',
        'priority' => 120
    ));

    $wp_customize->add_setting('title-fresco-setting', array(
        'capability' => 'edit_theme_options'
    ));

    // Insertamos el titulo del home
    $wp_customize->add_control('title-control-fresco ', array(
        'label' => __('Titulo de lo mas fresco'),
        'section' => 'lo-mas-fresco',
        'settings' => 'title-fresco-setting',
        'input_attrs' => array(
            'placeholder' => __('Escriba aquí'),
        ),
    ));