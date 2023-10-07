var view = function () {
    var view = document.querySelector('.circulo .presentation');
    var main = document.querySelector('main');
    if (view && main) {
        var contentProperties = window.getComputedStyle(main);
        var contentPadding = parseInt(contentProperties.getPropertyValue('padding-top'));
        var heightView = window.innerHeight;
        var vh = (heightView - contentPadding - 100);
        view.style.height = "".concat(vh, "px");
    }
};
export default view;
