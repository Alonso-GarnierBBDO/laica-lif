<?php get_header(); ?>

    <main class="not-found container">
        <h1>404</h1>
        <h2>Pagina no encontrada</h2>
        <a  href="<?= esc_url(home_url('/')); ?>">Regresar al inicio</a>
        <canvas image="<?= get_stylesheet_directory_uri() ?>/assets/img/hojita.svg"></canvas>
    </main>

<?php get_footer(); ?>