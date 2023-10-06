<?php
    add_meta_box(
        'subtitle',
        'Tipo de dispositivo',
        function ($post) {

            $value = get_post_meta($post->ID, 'fondo', true);

            ?>
            <label for="fondo">Seleccione el dispotivo de la pantalla</label>
            <?= $value ?>
            <br/>
            <!-- <input type="text" id="subtitle" name="subtitle" value="<?php //echo $value; ?>" style="width: 100%; margin-top: 10px;"/> -->
            <select style="width: 100%; margin-top: 10px;" name="fondo" id="fondo">
                <option value="">Seleccione el dispositivo</option>
                <option value="computadora" <?= $value == 'computadora' ? 'selected' : ''; ?> >Computadora</option>
                <option value="tablet" <?= $value == 'tablet' ? 'selected' : ''; ?>>Tablet</option>
                <option value="movil" <?= $value == 'movil' ? 'selected' : ''; ?>>Móvil</option>
            </select>
            <?php

        },
        'screens',
        'advanced',
        'high'
    );