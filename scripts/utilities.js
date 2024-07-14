// get a element's  inner text value (string type)
function getInnerValue(elementID) {
  const element = document.getElementById(elementID);
  const innerValue = element.innerText;
}

// get a element's innerText value as Number (number type)
function getInnerValueAsNumber(elementID) {
  const element = document.getElementById(elementID);
  const innerValue = element.innerText;
  const value = parseInt(innerValue);
  return value;
}

// set innerText value
function setInnerValue(elementID, setValue) {
  const element = document.getElementById(elementID);
  element.innerText = setValue;
}

// replace class name
function visibleElementByReplacingClassName(elementID) {
  const element = document.getElementById(elementID);
  element.classList.replace("hidden", "flex");
}
