<?php
    add_meta_box(
        'subtitle',
        'Tipo de noticia',
        function ($post) {

            $value = get_post_meta($post->ID, 'subtitle', true);

            ?>
            <label for="subtitle">Ejm: Nuevo sabor, Nuevo evento, etc...</label>
            <input type="text" id="subtitle" name="subtitle" value="<?php echo $value; ?>" style="width: 100%; margin-top: 10px;"/>
            <?php

        },
        'noticias',
        'advanced',
        'high'
    );