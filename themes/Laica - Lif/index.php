<?php get_header(); ?>
    <section class="background">
        <section class="content">
            <?php the_content(); ?>
        </section>
    </section>

    <section class="background_items">
        <section style="background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/background_page.png);"></section>
        <section>
            <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/cuadros.svg);" alt="">
        </section>
    </section>

<?php get_footer(); ?>