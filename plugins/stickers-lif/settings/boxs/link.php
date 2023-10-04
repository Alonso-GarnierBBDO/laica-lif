<?php
    add_meta_box(
        'link',
        'Links de los stickers',
        function ($post) {

            $value = get_post_meta($post->ID, 'link', true);

            ?>
            <label for="link">Ejm: https://example.com</label>
            <div style="width: 100%; margin-top: 10px; display: flex; flex-flow: row;">
                <input type="text" value="https://" style="width: 70px;" disabled>
                <input type="text" style="width: 100%;" id="link" name="link" value="<?php echo $value; ?>" placeholder="example.com"/>
            </div>
            <?php

        },
        'stickers',
        'advanced',
        'high'
    );