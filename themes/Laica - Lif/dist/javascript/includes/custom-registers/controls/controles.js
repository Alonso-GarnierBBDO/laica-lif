"use strict";
(function ($, wp) {
    wp.customize.bind('ready', function () {
        wp.customize.control('multi_image_selector', function (control) {
            control.container.on('click', '.upload-button', function (event) {
                event.preventDefault();
                var frame = wp.media({
                    multiple: true,
                    library: { type: 'image' }
                });
                frame.on('select', function () {
                    var attachments = frame.state().get('selection').map(function (attachment) {
                        return attachment.toJSON();
                    });
                    control.setting.set(attachments);
                });
                frame.open();
            });
            control.container.on('click', '.remove-button', function () {
                control.setting.set([]);
            });
        });
    });
})(jQuery, wp);
