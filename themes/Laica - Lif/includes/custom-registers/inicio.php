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
    $wp_customize->add_control('title-control', array(
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


    // Multiples imagenes en el slider

    // Habilitamos este nuevo campo en el customice
    class Multi_Image_Customize_Control extends WP_Customize_Control {

        public function enqueue()
        {

            wp_enqueue_style('multi-image-style', get_template_directory_uri().'/includes/custom-registers/controls/custom.css');
            wp_enqueue_script('multi-image-script', get_template_directory_uri() . '/includes/custom-registers/controls/customizer-multimedia.js', array( 'jquery' ), rand(), true);

        }

        public function render_content()
        { ?>
            <label>
                <span class='customize-control-title'>Slider Principal</span>
            </label>
            <div>
                <ul class='images'></ul>
            </div>
            <div class='actions' id="agregar">
                <a class="button-secondary upload">Agregar</a>
            </div>

            <input class="wp-editor-area" id="images-input" type="hidden" <?php $this->link(); ?>
        <?php
        }
    }
    
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

