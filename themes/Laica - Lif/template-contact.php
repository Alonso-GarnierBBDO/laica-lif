<?php
/*
Template Name: Plantilla de contacto
*/
?>

<?php get_header(); ?>

    <main class="contacto_main_page container">
        <section class="content">

            <section class="items_contact mobile">
                <section class="hello-lif">
                    <section class="title">
                        <h2>
                            <span>¡Hola,</span>
                            <span>Lif!</span>
                        </h2>
                    </section>
                    <section class="content_footer">
                        <a href="" target="_black">@lifstevia</a>
                        <a href="" target="_black">mercadeo@laica.co.cr</a>
                        <a href="" target="_black">(506) 2284-6000</a>
                        <p>Av. 15, Calle 3, San José, Costa Rica</p>
                    </section>
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/todo_fresco.svg" alt="" class="img_absolute">
                </section>
            </section>

            <section class="form_item">
                <h1>Hablemos :)</h1>
                <?php dynamic_sidebar('contacto-widget-area'); ?>
            </section>

            <section class="items_contact escritorio">
                <section class="hello-lif">
                    <section class="title">
                        <h2>
                            <span>¡Hola,</span>
                            <span>Lif!</span>
                        </h2>
                    </section>
                    <section class="content_footer">
                        <a href="" target="_black">@lifstevia</a>
                        <a href="" target="_black">mercadeo@laica.co.cr</a>
                        <a href="" target="_black">(506) 2284-6000</a>
                        <p>Av. 15, Calle 3, San José, Costa Rica</p>
                    </section>
                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/todo_fresco.svg" alt="" class="img_absolute">
                </section>
            </section>
        </section>
    </main>

    <style>

        .contacto_main_page{
            background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/background_contact_mobile.png);
        }

        @media (min-width: 700px) {
            .contacto_main_page{
                background-image: url(<?= get_stylesheet_directory_uri() ?>/assets/img/background_conteact.png);
            }
        }

    </style>

<?php get_footer(); ?>