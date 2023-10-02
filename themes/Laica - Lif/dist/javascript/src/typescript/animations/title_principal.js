var titlePrincipal = function () {
    var allTitle = document.querySelectorAll('.title_fragment');
    if (allTitle) {
        console.log(allTitle);
        allTitle.forEach(function (title) {
            var titleCotent = title.textContent;
            var arrayText = titleCotent === null || titleCotent === void 0 ? void 0 : titleCotent.split(" ");
            var newTitle = '';
            arrayText === null || arrayText === void 0 ? void 0 : arrayText.forEach(function (word, key) {
                if (key === 0) {
                    newTitle += "\n                    <span class=\"principal\">".concat(word, "</span>\n                    <br/>\n                ");
                }
                else if (key % 3 === 0) {
                    if (word.length <= 2 && word.length > 0) {
                        newTitle += "<span class=\"small\">".concat(word, " </span>");
                    }
                    else {
                        newTitle += "<span class=\"normal\">".concat(word, " </span>");
                    }
                    newTitle += "<br/>";
                }
                else {
                    if (word.length <= 2 && word.length > 0) {
                        newTitle += "<span class=\"small\">".concat(word, " </span>");
                    }
                    else {
                        newTitle += "<span class=\"normal\">".concat(word, " </span>");
                    }
                }
            });
            title.innerHTML = newTitle;
        });
    }
};
export default titlePrincipal;
