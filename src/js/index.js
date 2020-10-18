import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counterValue = document.querySelector(".value--js");
const counterMax = document.querySelector(".max--js");
const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");
const liquidGraphic = document.querySelector(".image--js");

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const key = today.toLocaleString().slice(0, 10);

const yesterKey = yesterday.toLocaleString().slice(0, 10);

// liquidGraphic.style.opacity = 1;

const boom = liquidGraphic.style.opacity;
console.log(boom);
const bada = getComputedStyle(liquidGraphic).getPropertyValue("opacity");
console.log(bada);
console.log(typeof bada);
const bing = parseFloat(bada);
console.log(bing);
console.log(typeof bing);

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

if (currentValue == 0) {
  liquidGraphic.style.opacity = 0.3;
} else if (currentValue >= currentRecord) {
  liquidGraphic.style.opacity = 1;
}

const adjustOpacity = (currentRecord, currentValue, image, goal) => {
  const divider = parseInt(currentRecord) - parseInt(currentValue);

  const currentOpacity = parseFloat(
    getComputedStyle(image).getPropertyValue("opacity")
  );

  const delta = Math.abs(goal - currentOpacity);

  if (divider > 0) {
    return delta / divider;
  } else {
    return 0;
  }
};

console.log(adjustOpacity(5, 0, liquidGraphic, 1));

addButton.addEventListener("click", () => {
  if (currentRecord != 0) {
    const increment = adjustOpacity(
      currentRecord,
      currentValue,
      liquidGraphic,
      1
    );

    let opacity = parseFloat(
      getComputedStyle(liquidGraphic).getPropertyValue("opacity")
    );

    opacity = opacity + increment;

    liquidGraphic.style.opacity = opacity.toFixed(2);
  } else {
    liquidGraphic.style.opacity = 1;
  }

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
    if (currentValue > 1) {
      const increment = adjustOpacity(
        currentRecord,
        currentValue,
        liquidGraphic,
        0.3
      );

      let opacity = parseFloat(
        getComputedStyle(liquidGraphic).getPropertyValue("opacity")
      );

      opacity = opacity - increment;

      liquidGraphic.style.opacity = opacity.toFixed(2);
    } else {
      liquidGraphic.style.opacity = 0.3;
    }

    counterValue.innerHTML = --currentValue;
    localStorage.setItem(key, currentValue);

    if (currentValue >= currentRecord) {
      counterMax.innerHTML = currentValue;
    }

    if (currentValue == 9) {
      counterValue.style.fontSize = "9em";
    }
  }
});
