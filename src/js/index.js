import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

function adjustOpacity(currentValue, currentRecord) {
  if (currentValue == 0) return 0.3;
  else if (currentValue >= currentRecord) return 1;
  else {
    const fraction = currentValue / currentRecord;

    let newOpacity = 0.3 + 0.7 * fraction;

    if (newOpacity > 1) newOpacity = 1;

    return newOpacity.toFixed(2);
  }
}

//constants:

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");
const liquidGraphic = document.querySelector(".image--js");

const today = new Date();
const key = today.toLocaleString().slice(0, 10);

let currentValue = localStorage.getItem(key);
let currentRecord = localStorage.getItem("record");

if (currentValue) {
  counterValue.innerHTML = currentValue;
} else {
  currentValue = 0;
  localStorage.setItem(key, currentValue);
}

// SETTING RECORD:

const allKeys = Object.keys(localStorage);

if (currentRecord && allKeys.length > 3) {
  /*Conditions check if record exists and if there are more than 3 elements in localStorage i.e. if there are 
  keys for other dates than the current day (otherwise there will be an endless loop) */

  let latest = new Date(today);
  console.log(latest);
  let latestValue = null;
  console.log(latestValue);

  do {
    latest.setDate(latest.getDate() - 1);

    console.log(latest);

    const latestKey = latest.toLocaleString().slice(0, 10);

    console.log(latestKey);

    latestValue = localStorage.getItem(latestKey);

    console.log(latestValue);
  } while (latestValue == null);

  if (latestValue > currentRecord) {
    currentRecord = latestValue;
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

liquidGraphic.style.opacity = adjustOpacity(currentValue, currentRecord);

addButton.addEventListener("click", () => {
  counterValue.innerHTML = ++currentValue;
  localStorage.setItem(key, currentValue);

  if (currentValue > currentRecord) {
    counterMax.innerHTML = currentValue;
  }

  if (currentValue == 10) {
    counterValue.style.fontSize = "6.2em";
  }

  liquidGraphic.style.opacity = adjustOpacity(currentValue, currentRecord);
});

removeButton.addEventListener("click", () => {
  if (currentValue > 0) {
    counterValue.innerHTML = --currentValue;
    localStorage.setItem(key, currentValue);

    if (currentValue >= currentRecord) {
      counterMax.innerHTML = currentValue;
    }

    if (currentValue == 9) {
      counterValue.style.fontSize = "9em";
    }

    liquidGraphic.style.opacity = adjustOpacity(currentValue, currentRecord);
  }
});
