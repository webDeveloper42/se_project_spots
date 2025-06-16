import {close} from "./global_utils.js";
const exitBtn = document.querySelectorAll('.modal__exit');
exitBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal__div');
        close(modal);
    })
})