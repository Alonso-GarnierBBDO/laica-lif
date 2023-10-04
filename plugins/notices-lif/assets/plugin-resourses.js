// Preview the content of image
jQuery(document).ready(function ($) {
    const $field = $('[data-target=field]');
    const $preview = $('[data-target=preview]');

    const frame = new wp.media({
        title: 'Select images',
        library: {
            type: 'image',
        },
        button: {
            text: 'Select'
        }
    });


    $(document)
        .on('click', '[data-target=upload]', function () {
            frame.open();
        })
        .on('click', '[data-target=reset]', function () {
            $field.val('');
            $preview.html('');
        });

    frame.on('select', function () {
        var attachment = frame.state().get('selection');

        const ids = [];
        const images = [];

        attachment.toJSON().forEach(image => {
            ids.push(image.id);
            images.push(`<img style="max-width: 500px"  src="${image.url}">`);
        });

        $field.val(ids.join(','));
        $preview.html(images.join(''));
    });
});

