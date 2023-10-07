var bottonScroll = function () {
    var bottomScroll = document.querySelector('.bottom_scroll');
    if (bottomScroll) {
        bottomScroll.onclick = function () {
            var height = window.innerHeight;
            var container_element = document.querySelector('.container.items_main_fron');
            if (container_element) {
                container_element.scrollTo({
                    top: height,
                    left: 0,
                    behavior: "smooth",
                });
            }
        };
    }
};
export default bottonScroll;
