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

    // Incluimos la galeria

    include(get_stylesheet_directory() . '/includes/custom-registers/controls/custom/very_galery.php');
    
    // Registra la configuración personalizada para las imágenes múltiples
    $wp_customize->add_setting('multi_galery_selector', array(
        'default'   => array(),
        'transport' => 'refresh',
        'type'      => 'option', // Puedes usar 'option' si prefieres guardar en opciones de tema
    ));

    // // Registra el control personalizado para las imágenes múltiples
    $wp_customize->add_control(new Multi_Image_Customize_Galery($wp_customize, 'multi_galery_selector', array(
        'label'       => __('Select Multiple Gakery', 'option'),
        'section'     => 'lo-mas-fresco',
    )));