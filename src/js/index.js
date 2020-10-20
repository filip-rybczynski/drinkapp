import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

// adjusting opacity of the SVG according to counter value
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

//variables:

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");
const liquidGraphic = document.querySelector(".image--js");

const today = new Date();
const key = today.toLocaleString().slice(0, 10);

let currentValue = localStorage.getItem(key);
let currentRecord = localStorage.getItem("record");
let lastDayOn = localStorage.getItem("last-day-on");

// Setting counter value in app
if (currentValue) {
  counterValue.innerHTML = currentValue;
} else {
  currentValue = 0;
  localStorage.setItem(key, currentValue);
}

// SETTING RECORD based on last day app was used:

if (lastDayOn != key && currentRecord) {
  const latestValue = localStorage.getItem(lastDayOn);
  if (currentRecord < latestValue) {
    currentRecord = latestValue;
    localStorage.setItem("record", currentRecord);
  } else {
    currentRecord = 0;
    localStorage.setItem("record", currentRecord);
  }
}
// Setting record counter in app
if (currentValue > currentRecord) {
  counterMax.innerHTML = currentValue;
} else {
  counterMax.innerHTML = currentRecord;
}

// Adjusting counter font size
if (currentValue > 9) {
  counterValue.style.fontSize = "6.2em";
}

//Adjust opacity of SVG based on current counter value
liquidGraphic.style.opacity = adjustOpacity(currentValue, currentRecord);

// Record current date as latest day of using app, if not recorded yet
if (lastDayOn != key) {
  lastDayOn = key;
  localStorage.setItem("last-day-on", lastDayOn);
}

// Add button functionality
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

// Remove button functionality
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
