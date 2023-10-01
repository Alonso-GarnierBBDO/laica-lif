<?php
add_meta_box(
    'pdf_mostrar',
    'Tabla nutricional',
    function ($post) {

        $value = get_post_meta($post->ID, 'file', true);

        $file_ids = explode(',', $value); // Convierte la cadena en un array

        $file_urls = array_map(function ($id) {
            return wp_get_attachment_url($id); // Obtiene la URL de cada archivo adjunto
        }, $file_ids);

        ?>
        <label for="file">Inserte la tabla nutricional</label>
        <input type="hidden" id="file" name="file" value="<?php echo $value; ?>" data-target="view_field"/>
        <div id="preview_file" data-target="preview_file">
            <?php
            foreach ($file_urls as $url) {
                if($url){
                    echo '<div class="item_file" title="' .  esc_html(basename($url)) . '">
                            <span> ' . esc_html(basename($url)) . ' </span> 
                            <a target="_black" href="' . esc_url($url) . '" title="Descargar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                                </svg>
                            </a>
                        </div>';
                }
            }
            ?>
        </div>
        <p class="control">
            <button class="button" type="button" data-target="upload_file">Upload file</button>
            <button class="button" type="button" data-target="reset_file">Reset file</button>
        </p>
        <?php

    },
    'productos',
    'advanced',
    'high'
);
