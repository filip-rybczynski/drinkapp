import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");

addButton.addEventListener("click", () => {
    counterValue.innerHTML++;
    if (counterValue.innerHTML == 10) {
        counterValue.classList.toggle("counter__value--smaller");

    }
})

removeButton.addEventListener("click", () => {
    if(counterValue.innerHTML > 0) {
        counterValue.innerHTML--;
        if (counterValue.innerHTML == 9) {
            counterValue.classList.toggle("counter__value--smaller");
        }
    }
})