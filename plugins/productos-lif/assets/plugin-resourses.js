
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
            images.push(`<img src="${image.url}">`);
        });

        $field.val(ids.join(','));
        $preview.html(images.join(''));
    });
});



// Preview the content of file
jQuery(document).ready(function ($) {
    const $field = $('[data-target=view_field]');
    const $preview = $('[data-target=preview_file]');

    const frame = new wp.media({
        title: 'Select images',
        button: {
            text: 'Select'
        }
    });


    $(document)
        .on('click', '[data-target=upload_file]', function () {
            frame.open();
        })
        .on('click', '[data-target=reset_file]', function () {
            $field.val('');
            $preview.html('');
        });

    frame.on('select', function () {

        var attachment = frame.state().get('selection');

        const ids = [];
        const images = [];

        attachment.toJSON().forEach(file => {
            ids.push(file.id);

            const file_name = file.filename;
            const fileUrl = file.url;

            images.push(`<div class="item_file" title="${file_name}">
                            <span> ${file_name} </span> 
                            <a target="_black" href="${ fileUrl }" title="Descargar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                                </svg>
                            </a>
                        </div>`);

        });

        $field.val(ids.join(','));
        $preview.html(images.join(''));

    });
});