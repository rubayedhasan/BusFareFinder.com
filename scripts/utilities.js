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

// add class name
function addClassToElement(elementID, addClassName) {
  const element = document.getElementById(elementID);
  element.classList.add(addClassName);
}

// remove class name
function removeClassFromElement(elementID, removeClassName) {
  const element = document.getElementById(elementID);
  element.classList.remove(removeClassName);
}
function visibleElementByReplacingClassName(elementID) {
  const element = document.getElementById(elementID);
  element.classList.replace("hidden", "flex");
}
