'use strict';

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    animateFunction();
    modal.style.display = "block";

}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function animateFunction() {
    const selector = document.querySelector('.modal_content')
    selector.classList.add('magictime', 'puffIn')
}
