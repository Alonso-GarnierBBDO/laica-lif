<?php get_header(); ?>

    <main>
    While working on one of my app projects, I found an error during the deployment phase. The error was referring to CSS. The app was working perfectly fine in the development mode. So what went wrong!

Since it wasn't a big project, and there was only one stylesheet, I commented out some parts of the stylesheet that were fairly simple and straightforward. I firstly guessed the error to be arising from the wrong use of interpolation i.e
#{&}which is often used in SCSS. But it was correctly coded.
My second guess was that there is an error arising from the way @keyframes have been used. Yes, I was correct.
So, what went wrong!
    </main>

<?php get_footer(); ?>