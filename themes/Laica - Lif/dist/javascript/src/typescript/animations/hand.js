/**
 * En este archivos cargamos todos los items del modal
 */
var hand = function () {
    var hand = document.querySelector('header .hand');
    var modal = document.querySelector('header .modal');
    if (hand) {
        hand.onclick = function () {
            if (modal) {
                toggleModal(modal);
            }
        };
    }
    if (modal) {
        modal.onclick = function (e) {
            if (modal == e.target) {
                toggleModal(modal);
            }
        };
    }
};
function toggleModal(modal) {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        setTimeout(function () {
            modal.style.display = "none";
        }, 200);
    }
    else {
        modal.style.display = "flex";
        setTimeout(function () {
            modal.classList.add('active');
        }, 50);
    }
}
export default hand;
