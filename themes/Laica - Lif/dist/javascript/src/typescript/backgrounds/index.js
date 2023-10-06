var backgroundIitems = function () {
    var background = document.querySelectorAll('.background_items');
    if (background) {

        const height = document.body.scrollHeight;

        background.forEach(function (e) {
            e.style.height = `${ height }px`;
        });
    }
};
export default backgroundIitems;
