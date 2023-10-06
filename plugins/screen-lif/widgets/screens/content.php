<?php

    $args = array(
        'post_type' => 'screens',
        'posts_per_page' => 10,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $productos_query = new WP_Query($args);

    // Recorremos los productos creados
?>
    <section class="noticias_slider">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
<?php
            while ($productos_query->have_posts()) : $productos_query->the_post();

                // Obtenemos la imagen
                $image_array = explode(',', get_post_meta(get_the_ID(), 'images', true));
                $image_id = $image_array[0];
                $image_url = wp_get_attachment_image_src($image_id, 'full')[0];

                // Obtener subtitulo
                $subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

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
                <li class="glide__slide">
                    <section class="content_slide">
                        <div class="image">
                            <img src="<?= $image_url ?>" alt="Image slider">
                        </div>
                        <section class="content_product_slider">
                            <h3><?= $title ?></h3>
                            <p><?= $subtitle ?></p>
                        </section>
                    </section>
                </li>

<?php
            endwhile;
?>
            </ul>
        </div>

        <style>
            .noticias_slider ul li .image{
                background-image: url(<?= plugins_url('assets/img/flor.svg', __FILE__) ?>);
            }

            @media (min-width: 701px) {
                .noticias_slider ul li .image{
                    background-image: url('') !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }   
            }

        </style>

    </section>