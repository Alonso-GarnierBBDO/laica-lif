<?php
/*
Template Name: Plantilla de contacto
*/


    $enlacePrincipal = get_theme_mod('enlace-principal-contacto'); 
    $email = get_theme_mod('email-contacto-settings'); 
    $phone = get_theme_mod('phone-contacto-settings'); 
    $address = get_theme_mod('address-contacto-settings'); 

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

                        <a href="#"><?= $enlacePrincipal ?></a>
                        <a href="mailto:<?= $email ?>"><?= $email ?></a>
                        <a href="tel:+506<?= $phone  ?>">(506) <?= $phone ?></a>
                        <p><?= $address ?></p>
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
                        <a href="#"><?= $enlacePrincipal ?></a>
                        <a href="mailto:<?= $email ?>"><?= $email ?></a>
                        <a href="tel:+506<?= $phone  ?>">(506) <?= $phone ?></a>
                        <p><?= $address ?></p>
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