<?php
/*
Template Name: Lo más fresco
*/
?>


<?php get_header(); ?>
<main class="fresco">

    <section class="container">

            <section class="background_escritorio">
                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/background_page.png" alt="">
            </section>

            <section class="background_mobile">
                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/mobile_background.png" alt="">
            </section>

            <section class="panel stickers_container">
                <section>
                    <section class="noticias">
                        <?php dynamic_sidebar('noticias-widget-area'); ?>
                    </section>
                    <section class="stickers">
                        <h1>Decilo a tu manera</h1>
                        <?php dynamic_sidebar('stickers-widget-area'); ?>
                        <h2>STICKERS FRESCOS</h2>
                        <span>Descargalos aquí</span>
                    </section>
                </section>
            </section>


            <section class="panel screens_container">
                <section class="screens">
                    <h2>
                        <span>Lif</span>
                        <span>Tqm</span>
                    </h2>
                    <?php dynamic_sidebar('screens-widget-area'); ?>
                    <h3 class="escritorio_media">Descargalos aquí</h3>
                    <h3 class="mobile_media">FONDOS DE PANTALLA</h3>
                    <span class="descarga mobile">Descargalos aquí</span>
                </section>
            </section>

            <section class="panel galeria_content" id="galeria">

                    <h2>Lo más fresco</h2>
                    <section class="galeria">
                        <?php

                            $allImageString = get_theme_mod('array_galerias');
                            $allImageArray = explode(",", $allImageString);
                            $count = count($allImageArray);

                            if($count > 1){

                                foreach( $allImageArray as $key => $value ){
                                    if($value){
                                        ?>
                                            <div>
                                                <img src="<?= $value ?>" alt="Imagen de lif">
                                            </div>   
                                        <?php
                                    }
                                }

                            }
                            
                        ?>
                    </section>
            </section>

    </section>
   

        <!-- <section class="content">
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
    </section> -->

    <style>

        .galeria_content{
            background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/cuadro.png);
        }

    </style>
</main>

<?php get_footer(); ?>