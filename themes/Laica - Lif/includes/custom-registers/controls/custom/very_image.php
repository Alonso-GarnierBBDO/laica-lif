<?php

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