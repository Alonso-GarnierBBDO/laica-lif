<?php

    class NoticiasWidgets extends WP_Widget {

        // Constructor
        public function __construct() {
            parent::__construct(
                'noticias_lif', // ID único para el widget
                'Noticias LIF', // Nombre del widget visible en el panel de control
                array(
                    'description' => 'Contiene las noticias de LIF' // Descripción del widget
                )
            );
        }

        // Función para mostrar el contenido del widget en el frontend
        public function widget($args, $instance) {
            
            extract($args);

            echo $before_widget;
            // Insertarmos css en el widget
            echo '<style>';
                include(plugin_dir_path(__FILE__) . 'notices/assets/css/style.css');
            echo '</style>';

            include(plugin_dir_path(__FILE__) . 'notices/content.php');
            
            // Insertar el javascript
            echo '<script src="' . plugins_url('notices/assets/js/glite/glide.min.js', __FILE__) . '"></script>';
            echo '<script type="module" src="' . plugins_url('notices/assets/js/app.js', __FILE__) . '"></script>';

            echo $after_widget;

        }

        // Función para mostrar el formulario de configuración en el backend
        public function form($instance) {
            echo "Noticias LIF";
            return 'noform';
            // Aquí puedes crear los campos de configuración del widget
        }
    }

    register_widget('NoticiasWidgets');

