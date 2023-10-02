<?php get_header(); ?>

        <section class="circulo">
            <section class="presentation">
                <section class="img">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hojita.svg" class="lif_hojita" alt="Hoja ilustrativa">
                    <?php
                        $image_one = get_theme_mod('img-uno-presentation-setting');
                    ?>
                    <img src="<?= $image_one ?>" class="lif_frasco" alt="Lif contenido">
                </section>
                <?php
                    $textHomePage = get_theme_mod('title-presentation-setting');
                ?>
                <h1><?= $textHomePage ?></h1>
                <section class="img_two">
                    <?php
                        $image_two = get_theme_mod('img-dos-presentation-setting');
                    ?>
                    <img src="<?= $image_two ?>" class="lif_frasco" alt="Lif contenido">
                    <section class="objects">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hoja.svg" class="hoja" alt="Hoja ilustrativa">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/naranja.svg" class="naranja" alt="Naranja ilustrativa">
                    </section>
                </section>
                <section class="actions">
                    <a href="" class="hover_animation" title="Tenemos cosas para contarte">
                        Tenemos cosas para contarte
                    </a>
                    <button class="bottom_scroll" title="Arrastrar pagina">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/arrow.svg" class="naranja" alt="Naranja ilustrativa">
                    </button>
                </section>
            </section>
            <section class="carrousel">
                <section class="slider_item">
                    <?php
                        $allImageString = get_theme_mod('multi_image_selector');
                        $allImageArray = explode(",", $allImageString);
                        $count = count($allImageArray);
                        if($count){

                            foreach( $allImageArray as $key => $value ){
                    ?>
                            <figure>
                                <img src="<?= $value ?>" alt="Imagen de lif">
                            </figure>
                    <?php
                            }

                        }
                        
                    ?>
                </section>
                <section class="image_escritorio">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hojita_modals.svg" alt="Hojita ilustrativa">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/tuanis.svg" alt="Tuanis ilustrativa">
                </section>
                <section class="image_mobile">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hand.draw.svg" alt="Arrastre las imagenes">
                </section>
            </section>
        </section>
        <section class="products">
            <section class="header">
                <?php
                    $productsSubtitle = get_theme_mod('productos-setting-secundary');
                    $productsTitle = get_theme_mod('productos-setting-principal');
                ?>
                <h3 class="mobile"><?= $productsSubtitle ?></h3>
                <h2 class="mobile"><?= $productsTitle ?></h2>
                <h2 class="escritorio"> <?= $productsSubtitle . " " .$productsTitle ?> </h2>
                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/circle_constenvia.svg" alt="Contenvia">
            </section>
            <section class="sliderWidget">
                <?php dynamic_sidebar('slider-products-widget-area'); ?>
            </section>
            <section class="footer">
                <img class="bajo_calerias" src="<?= get_stylesheet_directory_uri() ?>/assets/img/bajas_calorias.svg" alt="Bajo en calorias">
                <button class="bottom_scroll" title="Arrastrar pagina">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/arrow_blue.svg" class="naranja" alt="Naranja ilustrativa">
                </button>
            </section>
            <div class="background"></div>
        </section>

        <!-- Backgrounds del img -->


        <style>

            .products .background {
                background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background.svg' ?>)
            }           

            @media (min-width: 700px) {
                .products .background {
                    background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_escritorio.svg' ?>)
                }     
            }

        </style>

<?php get_footer(); ?>