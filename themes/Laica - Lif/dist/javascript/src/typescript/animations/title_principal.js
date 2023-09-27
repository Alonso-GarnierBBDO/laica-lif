var titlePrincipal = function () {
    var title = document.querySelector('.presentation h1');
    if (title) {
        var titleCotent = title.textContent;
        var arrayText = titleCotent === null || titleCotent === void 0 ? void 0 : titleCotent.split(" ");
        var newTitle_1 = '';
        arrayText === null || arrayText === void 0 ? void 0 : arrayText.forEach(function (word, key) {
            if (key === 0) {
                newTitle_1 += "\n                    <span class=\"principal\">".concat(word, "</span>\n                    <br/>\n                ");
            }
            else if (key % 3 === 0) {
                if (word.length <= 2) {
                    newTitle_1 += "<span class=\"small\">".concat(word, " </span>");
                }
                else {
                    newTitle_1 += "<span class=\"normal\">".concat(word, " </span>");
                }
                newTitle_1 += "<br/>";
            }
            else {
                if (word.length <= 2) {
                    newTitle_1 += "<span class=\"small\">".concat(word, " </span>");
                }
                else {
                    newTitle_1 += "<span class=\"normal\">".concat(word, " </span>");
                }
            }
        });
        title.innerHTML = newTitle_1;
    }
};
export default titlePrincipal;
