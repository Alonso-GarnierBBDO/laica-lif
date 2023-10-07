<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Settings of head -->
    <?php wp_head(); ?>

    <!-- Settings title  -->
    <title>
        <?php wp_title(''); ?>
        <?php 
            if(wp_title('', false)){ 
                echo ' - '; 
            } 
        ?>
        <?php bloginfo('name'); ?>
    </title>
</head>
<body>

    <?php 
        // Mostrar la barra de wordpress para el administrador 
        if(is_user_logged_in()){
            wp_admin_bar_render();
        }

        $urlLogoLif = get_theme_mod('menu-logo-setting');
    ?>

    <header>
        <nav>
            <ul id="navegation">
                <?php
                    // Obtenemos todos los items del usuario
                    $menuLocations = get_nav_menu_locations();
                    $menuID = $menuLocations['primary-menu'];
                    $menuItems = wp_get_nav_menu_items($menuID);
                    $countMenu = count($menuItems);

                    //Punto medio del menu en donde va la imagen
                    $halfwayPoint = ceil($countMenu / 2);

                    // Recorremos el meu 
                    foreach($menuItems as $key => $value){
                        $title = $value->title;
                        $url = $value->url;

                        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
                        $host = $_SERVER['HTTP_HOST'];
                        $uri = $_SERVER['REQUEST_URI'];

                        $url_actual = "$protocol://$host$uri";

                        $clase_active = ($url_actual == $url) ? "active" : "";

                ?>

                        <li>
                            <a href="<?= $url ?>" title="<?= $title ?>" class="<?= $clase_active ?>">
                                <?= $title ?>
                            </a>
                        </li>

                        <?php
                            if($key + 1 == $halfwayPoint){
                        ?>

                                <li class="logo">
                                    <a class="img" href="<?= esc_url(home_url('/')); ?>" class="logo" title="Inicio">
                                        <img src="<?= $urlLogoLif ?>" alt="Logo lif">
                                    </a>
                                </li>

                        <?php
                            }
                        ?>

                <?php

                    }
                ?>
            </ul>
        </nav>

        <button class="hand" title="Abrir modal de información">
            <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/hand.svg" alt="Mano de suludo">
        </button>

        <section class="modal">
            <section class="content mobile">
                <img src="<?= $urlLogoLif ?>" alt="Logo lif" title="Logo lif">
                <h2>¡Agreganos!</h2>
                <a href="www.laica.com" target="_black" title="Sitio web de Laica">www.laica.com</a>
                <section class="red_social">
                    <a href="#" target="_black" title="Perfil de facebook">Facebook</a>
                    <a href="#" target="_black" title="Perfil de instagram">Instagram</a>
                </section>
            </section>

            <section class="content escritorio">
                <section class="logo">
                    <img src="<?= $urlLogoLif ?>" alt="Logo lif" title="Logo lif">
                    <a href="www.laica.com" target="_black" title="Sitio web de Laica">www.laica.com</a>
                </section>
                <h2>¡Agreganos!</h2>
                <section class="red_social">
                    <a href="#" target="_black" title="Perfil de facebook">Facebook</a>
                    <a href="#" target="_black" title="Perfil de instagram">Instagram</a>
                </section>
            </section>

        </section>

    </header>