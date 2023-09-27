var bottonScroll = function () {
    var bottomScroll = document.querySelector('.bottom_scroll');
    if (bottomScroll) {
        bottomScroll.onclick = function () {
            var height = window.innerHeight;
            window.scrollTo({
                top: height,
                left: 0,
                behavior: "smooth",
            });
        };
    }
};
export default bottonScroll;
