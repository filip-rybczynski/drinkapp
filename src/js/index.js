import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");

// const today = new Date();
// const yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);

const key = new Date().toLocaleString().slice(0, 10);

const entry = localStorage.getItem(key);

if (entry) {
  counterValue.innerHTML = entry;
}

let entryRecord = '';

if(localStorage.getItem("record")) {
    entryRecord = localStorage.getItem("record");
} else {
    entryRecord = 0;
}

  counterMax.innerHTML = entryRecord;

if (counterValue.innerHTML > 9) {
  counterValue.style.fontSize = "6.2em";
}


addButton.addEventListener("click", () => {
  let boop;
  boop = counterValue.innerHTML++;
  console.log(boop);
  console.log(counterValue.innerHTML);
  localStorage.setItem(key, counterValue.innerHTML);

  if (entryRecord < counterValue.innerHTML) {
      console.log(entryRecord);
      console.log(counterValue.innerHTML);
      console.log(counterMax.interHTML);
    counterMax.innerHTML = counterValue.innerHTML;

    localStorage.setItem("record", counterMax.innerHTML);
  }

  if (counterValue.innerHTML == 10) {
    counterValue.style.fontSize = "6.2em";
  }
});

removeButton.addEventListener("click", () => {
  if (counterValue.innerHTML > 0) {
    counterValue.innerHTML--;
    localStorage.setItem(key, counterValue.innerHTML);


    if (entryRecord <= counterValue.innerHTML) {
      counterMax.innerHTML = counterValue.innerHTML;

      localStorage.setItem("record", counterMax.innerHTML);
    }

    if (counterValue.innerHTML == 9) {
        counterValue.style.fontSize = "9em";
      }
  }
});

// let today = new Date();
// const test = today.toISOString().slice(0,10);
// console.log(test);
// const yesterday = new Date() - 1;
let test = new Date();
console.log(test);
test = test.toISOString().slice(0, 10);
console.log(test);
