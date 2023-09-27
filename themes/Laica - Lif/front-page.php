<?php get_header(); ?>

        <section class="circulo">
            <section class="presentation">
                <section class="img">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hojita.svg" class="lif_hojita" alt="Hoja ilustrativa">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/lif_frasco.png" class="lif_frasco" alt="Lif contenido">
                </section>
                <?php
                    $textHomePage = get_theme_mod('title-presentation-setting');
                ?>
                <h1><?= $textHomePage ?></h1>
                <section class="img_two">
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/lif_frasco_v2.png" class="lif_frasco" alt="Lif contenido">
                    <section class="objects">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hoja.svg" class="hoja" alt="Hoja ilustrativa">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/naranja.svg" class="naranja" alt="Naranja ilustrativa">
                    </section>
                </section>
                <section class="actions">
                    <a href="" class="hover_animation">
                        Tenemos cosas para contarte
                    </a>
                    <button>
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/arrow.svg" class="naranja" alt="Naranja ilustrativa">
                    </button>
                </section>
            </section>
            <section class="carrousel">
                
            </section>
        </section>

<?php get_footer(); ?>