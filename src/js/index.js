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

let currentValue = localStorage.getItem(key);
let yesterdayValue = localStorage.getItem(yesterKey);
let currentRecord = localStorage.getItem("record");

function adjustOpacity2(image, currentValue, currentRecord)
 {
  console.log(`Record: ${currentRecord} / value: ${currentValue} = `);
//
  if(currentValue == 0) image.style.opacity = 0.3;
  else if (currentValue >= currentRecord) image.style.opacity = 1;
  else {
    const fraction = currentValue/currentRecord;

    console.log(fraction);
  
    let newOpacity = 0.3 + 0.7*fraction;

    if (newOpacity > 1) newOpacity = 1;
  
    console.log(newOpacity);
  
    image.style.opacity = newOpacity.toFixed(2);
  
    console.log(parseFloat(
      getComputedStyle(image).getPropertyValue("opacity")
    ));
  }
}

if (currentValue) {
  counterValue.innerHTML = currentValue;
  adjustOpacity2(liquidGraphic, currentValue, currentRecord);
} else {
  currentValue = 0;
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

const adjustOpacity = (image, currentValue, goalValue, goalOpacity) => {
  console.log(`Record: ${goalValue}, value: ${currentValue}`);

  // First, check difference between goal value and currentvalue

  const divider = parseInt(goalValue) - parseInt(currentValue);

  console.log(`Divider: ${goalValue} - ${currentValue} = ${divider}`);

  // get opacity value for the relevant graphic

  const currentOpacity = parseFloat(
    getComputedStyle(image).getPropertyValue("opacity")
  );

  console.log(`Current opacity value: ${currentOpacity}`);

  // get difference between current opacity value and goal opacity

  const delta = Math.abs(goalOpacity - currentOpacity);

  console.log(`Difference = ${delta}`);

  // opacity needs to be changed by this
  console.log(delta / divider);
  let newOpacity = currentOpacity + delta / divider;

  console.log(
    `New Opacity value: ${currentOpacity} + ${delta / divider} = ${newOpacity} `
  );

  liquidGraphic.style.opacity = newOpacity.toFixed(2);

  console.log("Function ran successfully");
};

console.log(currentRecord);

adjustOpacity2(liquidGraphic, currentValue, currentRecord);

  // adjustOpacity2(liquidGraphic, currentValue, currentRecord);


addButton.addEventListener("click", () => {
  // if (currentRecord == 0) liquidGraphic.style.opacity = 1;

  // if (currentRecord > currentValue)
  //   adjustOpacity(liquidGraphic, currentValue, currentRecord, 1);

  counterValue.innerHTML = ++currentValue;
  localStorage.setItem(key, currentValue);

  if (currentValue > currentRecord) {
    counterMax.innerHTML = currentValue;
  }

  if (currentValue == 10) {
    counterValue.style.fontSize = "6.2em";
  }

  liquidGraphic.style.opacity = adjustOpacity2(liquidGraphic, currentValue, currentRecord);

});

removeButton.addEventListener("click", () => {
  if (currentValue > 0) {
    // if (currentRecord >= currentValue) adjustOpacity(liquidGraphic, currentValue, 0, 0.3);

    counterValue.innerHTML = --currentValue;
    localStorage.setItem(key, currentValue);

    if (currentValue >= currentRecord) {
      counterMax.innerHTML = currentValue;
    }

    if (currentValue == 9) {
      counterValue.style.fontSize = "9em";
    }

    adjustOpacity2(liquidGraphic, currentValue, currentRecord);
  }
});
