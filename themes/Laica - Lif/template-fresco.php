<?php
/*
Template Name: Lo más fresco
*/
?>


<?php get_header(); ?>
    <section class="background">

        <section class="content">
            <section class="background_escritorio" style="background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/background_page.png);">
                <section class="noticias">
                    <?php dynamic_sidebar('noticias-widget-area'); ?>
                </section>

                <section class="background">
                    <section class="stickers" style="background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/mobile_background.png);">
                        <h1>Decilo a tu manera</h1>
                        <?php dynamic_sidebar('stickers-widget-area'); ?>
                        <h2>STICKERS FRESCOS</h2>
                        <span>Descargalos aquí</span>
                    </section>
                    <section class="screens">
                        <h2>
                            <span>Lif</span>
                            <span>Tqm</span>
                        </h2>
                        <?php dynamic_sidebar('screens-widget-area'); ?>
                        <h3>FONDOS DE PANTALLA</h3>
                        <span class="descarga">Descargalos aquí</span>
                    </section>
                </section>
            </section>
        </section>
        <section class="content galery">
            <h2 ><?= the_title() ?></h2>
            <?php the_content(); ?>
            <img class="background" src="<?= get_stylesheet_directory_uri() ?>/assets/img/cuadros.svg" alt="">
        </section>
    </section>

    <style>

        @media (min-width: 700px) {
            body .background_escritorio .background .stickers{
                background-image: initial !important;
            }
        }

        @media (max-width: 700px) {
            body main .background_escritorio{
                background-image: initial !important;
            }
        }

    </style>

<?php get_footer(); ?>