<?php

    $args = array(
        'post_type' => 'productos',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $productos_query = new WP_Query($args);

    // Recorremos los productos creados
?>
    <section class="slider_productos">
<?php
    while ($productos_query->have_posts()) : $productos_query->the_post();

        // Obtenemos la imagen
        $image_array = explode(',', get_post_meta(get_the_ID(), 'images', true));
        $image_id = $image_array[0];
        $image_url = wp_get_attachment_image_src($image_id, 'full')[0];

        // Obtenemos el titulo
        $title = get_the_title();

        // Obtenemos la tabal nutricional
        $tabla_array =  get_post_meta(get_the_ID(), 'file', true);
        $file_ids = explode(',', $tabla_array); 
        $file_urls = array_map(function ($id) {
            return wp_get_attachment_url($id); // Obtiene la URL de cada archivo adjunto
        }, $file_ids);

        $fileURL;

        foreach ($file_urls as $url) {
            $fileURL =  esc_url($url);
        }
?>
        <section class="item">
            <img src="<?= $image_url ?>" alt="Image slider">
            <section class="content_product_slider">
                <h3><?= $title ?></h3>
                <a href="<?=  $fileURL ?>" target="_black">
                    <img src="<?= plugins_url('assets/img/arrow.dowload.svg', __FILE__) ?>" alt="">
                    Tabla nutricional
                </a>
            </section>
        </section>

<?php
    endwhile;
?>
    </section>

    <!--  Eeste slider contiene el punture para mover el slider -->
    <section class="nav_productos"></section>