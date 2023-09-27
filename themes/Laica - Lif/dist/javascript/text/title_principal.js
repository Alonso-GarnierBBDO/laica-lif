var titlePrincipal = function () {
    var title = document.querySelector('.presentation h1');
    var timeAnimation = 100;
    if (title) {
        var itemsTitle = title.childNodes;
        itemsTitle.forEach(function (e) {
            if (e.nodeType !== Node.TEXT_NODE) {
                var element_1 = e;
                if (element_1.tagName !== 'BR') {
                    setTimeout(function () {
                        element_1.classList.add("view");
                    }, timeAnimation);
                    timeAnimation += 80;
                }
            }
        });
        // itemsTitle = Array.from(itemsTitle).filter(node => {
        //     return node.nodeType !== Node.TEXT_NODE && node.tagName !== 'BR';
        // });
        console.log(itemsTitle[3]);
    }
};
export default titlePrincipal;
