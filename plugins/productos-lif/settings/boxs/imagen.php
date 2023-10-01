<?php
    add_meta_box(
        'imagen_mostrar',
        'Imagen de destacada',
        function ($post) {

            $value = get_post_meta($post->ID, 'images', true);


            $images = implode('', array_map(function ($id) {
                return wp_get_attachment_image($id, 'full');
            }, explode(',', $value)));

            ?>
            <label for="images_field">Agregue la imagen destacada</label>
            <input type="hidden" id="images_field" name="images_field" value="<?php echo $value; ?>"
                data-target="field"/>
            <p id="preview" data-target="preview">
                <?php echo $images ?>
            </p>
            <p class="control">
                <button class="button" type="button" data-target="upload">Upload Images</button>
                <button class="button" type="button" data-target="reset">Reset Images</button>
            </p>
            <?php

        },
        'productos',
        'advanced',
        'high'
    );