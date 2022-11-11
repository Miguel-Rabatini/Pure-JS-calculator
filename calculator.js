const display = document.querySelector(".display-area__display");
let getDisplayValue = "";

function displayWrite(value) {
  display.innerHTML += value;

  getDisplayValue = display.innerHTML;
  getDisplayValue = getDisplayValue.replaceAll("×", "*");
  getDisplayValue = getDisplayValue.replaceAll("÷", "/");
  getDisplayValue = getDisplayValue.replaceAll("−", "-");
  getDisplayValue = getDisplayValue.replaceAll("+", "+");
}

function displayClean() {
  display.innerHTML = "";
}

function calculate() {
  const result = eval(getDisplayValue);

  display.innerHTML = result;
}
