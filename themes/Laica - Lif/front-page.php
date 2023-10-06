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
                <h1 class="title_fragment"><?= $textHomePage ?></h1>
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
                <a href="#manera" class="bottom_scroll" title="Arrastrar pagina">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/arrow_blue.svg" class="naranja" alt="Naranja ilustrativa">
                </a>
            </section>
            <div class="background"></div>
        </section>
        <section class="a_tu_manera" id="manera">
            <section class="conten-principal">
                <section class="column-two">
                    <div>
                        <?php $textInit = get_theme_mod('title-presentation-setting'); ?>
                        <h3 class="title_fragment"><?= $textHomePage ?></h3>
                        <div class="content">
                            <?php $textoContenPrincipal = get_theme_mod('a-tu-manera-setting-content') ?>
                            <?= $textoContenPrincipal ?>
                        </div>
                    </div>
                    <div>
                        <div class="image">
                            <?php 
                                $imagenID = get_theme_mod('img-principal-setting');
                                $imagenTitlePrincipal = get_the_title($imagenID);
                            ?>
                            <img class="mobile" src="<?= $imagenID  ?>" alt="<?= $imagenTitlePrincipal ?>">
                        </div>
                    </div>
                </section>

                <div class="column-normal imagen">
                    <div>
                        <?php 
                            $imagenID = get_theme_mod('img-secundaria-setting');
                            $imagenTitlePrincipal = get_the_title($imagenID);
                        ?>
                        <img src="<?= $imagenID  ?>" alt="<?= $imagenTitlePrincipal ?>">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hojita.svg" class="lif_hojita" alt="Hoja ilustrativa">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/aplausos.svg" class="aplausos" alt="Aplausos ilustrativa">
                    </div>
                    <div>
                        <?php 
                            $imagenID = get_theme_mod('img-principal-setting');
                            $imagenTitlePrincipal = get_the_title($imagenID);
                        ?>
                        <img class="escritorio" src="<?= $imagenID  ?>" alt="<?= $imagenTitlePrincipal ?>">
                    </div>
                </div>

                <div class="column-normal">
                    <div class="content_motivation">
                            <?php $textoContenPrincipal = get_theme_mod('a-tu-manera-setting-motivacion') ?>
                            <?= $textoContenPrincipal ?>
                    </div>
                </div>

            </section>
        </section>
        <!-- <section class="noticias">
            <div class="item">
                <?php //dynamic_sidebar('noticias-widget-area'); ?>
                <section class="content">
                    <?php
                        //$title_fresco = get_theme_mod('title-fresco-setting');
                    ?>
                    <h2><?= $title_fresco ?></h2>
                    <section class="stikers">
                        <?php //dynamic_sidebar('stickers-widget-area'); ?>
                    </section>
                </section>
            </div>
        </section> -->


        <style>

            .products .background {
                background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background.svg' ?>);
            }      
            
            .a_tu_manera{
                background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_two.svg' ?>);
            }

            .noticias .stikers{
                background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_stickers.svg' ?>);
            }

            @media (min-width: 700px) {
                .products .background {
                    background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_escritorio.svg' ?>);
                }     

                .a_tu_manera{
                    background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_two_destok.png' ?>);
                }

                .noticias{
                    background-image: url(<?= get_stylesheet_directory_uri()  . '/assets/img/background_stickers.svg' ?>);
                }
            }

        </style>

<?php get_footer(); ?>