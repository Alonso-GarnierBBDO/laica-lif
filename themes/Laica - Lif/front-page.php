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
                        
                        if(count($allImageArray)){

                            foreach( $allImageArray as $value ){
                    ?>
                            <figure>
                                <img src="<?= $value ?>" alt="Imagen de lif">
                            </figure>
                    <?php
                            }

                        }

                        
                    ?>
                </section>
            </section>
        </section>

<?php get_footer(); ?>