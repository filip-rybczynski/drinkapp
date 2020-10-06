import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");

const key = new Date().toISOString().slice(0,10);

const entry = localStorage.getItem(key);

if (entry) {
    counterValue.innerHTML = entry;
}

const entryRecord = localStorage.getItem('record');

if (entryRecord) {
counterMax.innerHTML = entryRecord;
}

    if (counterValue.innerHTML > 9) {
        counterValue.style.fontSize = "6.2em"
    }

addButton.addEventListener("click", () => {
    counterValue.innerHTML++;
    localStorage.setItem(key, counterValue.innerHTML);
    if (counterValue.innerHTML == 10) {
        counterValue.style.fontSize = "6.2em"
    }

    if (counterMax.innerHTML < counterValue.innerHTML) {
        console.log('test');
        counterMax.innerHTML = counterValue.innerHTML;
        
        localStorage.setItem('record', counterMax.innerHTML);
    }


})

removeButton.addEventListener("click", () => {
    if(counterValue.innerHTML > 0) {
        counterValue.innerHTML--;
        localStorage.setItem(key, counterValue.innerHTML);
        if (counterValue.innerHTML == 9) {
            counterValue.style.fontSize = "9em"
        }
    }
})