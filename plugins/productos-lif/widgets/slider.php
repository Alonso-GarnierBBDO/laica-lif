<?php

    class SliderProductosWidgets extends WP_Widget {

        // Constructor
        public function __construct() {
            parent::__construct(
                'slider_productos_lif', // ID único para el widget
                'Slider de productos LIF', // Nombre del widget visible en el panel de control
                array(
                    'description' => 'Contiene los productos en forma de slider' // Descripción del widget
                )
            );
        }

        // Función para mostrar el contenido del widget en el frontend
        public function widget($args, $instance) {
            
            extract($args);

            echo $before_widget;
            // Insertarmos css en el widget
            echo '<style>';
                include(plugin_dir_path(__FILE__) . 'slider-content/assets/css/style.css');
            echo '</style>';

            include(plugin_dir_path(__FILE__) . 'slider-content/content.php');
            
            // Insertar el javascript
            echo '<script type="module" src="' . plugins_url('slider-content/assets/js/app.js', __FILE__) . '"></script>';

            echo $after_widget;

        }

        // Función para mostrar el formulario de configuración en el backend
        public function form($instance) {
            echo "Slider de productos de LIF";
            return 'noform';
            // Aquí puedes crear los campos de configuración del widget
        }
    }

    register_widget('SliderProductosWidgets');

