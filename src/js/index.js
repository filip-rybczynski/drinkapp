import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const key = today.toLocaleString().slice(0, 10);

const yesterKey = yesterday.toLocaleString().slice(0, 10);


let currentValue = localStorage.getItem(key);
let yesterdayValue = localStorage.getItem(yesterKey);
let currentRecord = localStorage.getItem("record");

if (currentValue) {
  counterValue.innerHTML = currentValue;
}

if (yesterdayValue) {
  if (yesterdayValue > currentRecord) {
    currentRecord = yesterdayValue;
    localStorage.setItem("record", currentRecord);
  }
} else {
  currentRecord = 0;
  localStorage.setItem("record", currentRecord);
}

if (currentValue > currentRecord) {
  counterMax.innerHTML = currentValue; 
} else {
  counterMax.innerHTML = currentRecord; 
}

if (currentValue > 9) {
  counterValue.style.fontSize = "6.2em";
}

addButton.addEventListener("click", () => {
  counterValue.innerHTML = ++currentValue;
  localStorage.setItem(key, currentValue);

  if (currentValue > currentRecord) {
    counterMax.innerHTML = currentValue;
  }

  if (currentValue == 10) {
    counterValue.style.fontSize = "6.2em";
  }
});

removeButton.addEventListener("click", () => {
  if (currentValue > 0) {
    counterValue.innerHTML = --currentValue;
    localStorage.setItem(key, currentValue);
  }

  if (currentValue >= currentRecord) {
    counterMax.innerHTML = currentValue;
  }

  if (currentValue == 9) {
      counterValue.style.fontSize = "9em";
    }
});
