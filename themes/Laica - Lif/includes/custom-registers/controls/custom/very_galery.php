<?php

    // Habilitamos este nuevo campo en el customice
    class Multi_Image_Customize_Galery extends WP_Customize_Control {

        public function enqueue()
        {

            wp_enqueue_style('multi-image-style_two', get_template_directory_uri().'/includes/custom-registers/controls/custom.css');
            wp_enqueue_script('multi-image-script_two', get_template_directory_uri() . '/includes/custom-registers/controls/customizer-galery.js', array( 'jquery' ), rand(), true);

        }

        public function render_content()
        { ?>
            <label>
                <span class='customize-control-title'>Galeria de imagenes</span>
            </label>
            <div>
                <ul class='galery_items'></ul>
            </div>
            <div class='actions' id="agregar">
                <a class="button-secondary-galery upload">Agregar</a>
            </div>

            <input class="wp-editor-area" id="images-galery" type="hidden" <?php $this->link(); ?>
        <?php
        }
    }