// collection of bus btn
const btnCollection = document.getElementsByClassName("seat-btn");
// iterate btnCollection
for (const btn of btnCollection) {
  // click event on button --> seat
  btn.addEventListener("click", function (event) {
    // change clicked button(seat)'s the styles
    event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "#ffffff";

    // disabled button(seat) after one click
    event.target.setAttribute("disabled", true);

    // get the seats
    let countOfSeats = getInnerValueAsNumber("seat-indicator");

    // reduce counting value
    countOfSeats = countOfSeats - 1;
    // stop updating after zero
    if (countOfSeats < 0) {
      alert("No seat available");
      return;
    }
    // update seat-indicator inner value
    setInnerValue("seat-indicator", countOfSeats);

    // count selected seats
    let selectedSeatCount = getInnerValueAsNumber("selected-seat-indicator");

    // increase selected seat count
    selectedSeatCount = selectedSeatCount + 1;
    // update selected seat count
    setInnerValue("selected-seat-indicator", selectedSeatCount);

    // display selected ticket info
    // create containers
    const selectedTicketContainer = document.getElementById(
      "display-selected-seats"
    );
    const infoContainer = document.createElement("div");
    const seatNo = document.createElement("p");
    const seatClassName = document.createElement("p");
    const showSeatPrice = document.createElement("p");

    // set values
    seatNo.innerText = event.target.innerText;
    seatClassName.innerText = "economic";
    showSeatPrice.innerText = getInnerValueAsNumber("ticket-price");

    // inset to container and display it
    infoContainer.appendChild(seatNo);
    infoContainer.appendChild(seatClassName);
    infoContainer.appendChild(showSeatPrice);
    selectedTicketContainer.appendChild(infoContainer);

    // calculated total price
    calculatePrices();
  });
}

// calculating total price & grand total price
function calculatePrices() {
  const initialTotalPrice = getInnerValueAsNumber("total-price-indicator");
  const perSeatCost = getInnerValueAsNumber("ticket-price");
  const totalPrice = initialTotalPrice + perSeatCost;
  setInnerValue("total-price-indicator", totalPrice);
  setInnerValue("grand-price-indicator", totalPrice);
}

// calculated discount using coupon
function discountEventByCoupon() {
  // the input field
  const couponInputField = document.getElementById("coupon-input-field");
  const couponInput2ndField = document.getElementById("coupon-input-2nd-field");

  // get the value from the input firld
  const couponCode1 = couponInputField.value;
  const couponCode2 = couponInput2ndField.value;

  // condition base on different coupon code
  if (couponCode1 === "NEW15" || couponCode2 === "NEW15") {
    // calculate granted price after getting discount
    const totalPrice = getInnerValueAsNumber("total-price-indicator");
    const discount = totalPrice * 0.15;
    const price = totalPrice - discount;

    //update discount price
    setInnerValue("discount-price-indicator", discount);
    // visible discount price info to customer
    removeClassFromElement("discount-price-container", "hidden");
    addClassToElement("discount-price-container", "flex");
    // showing percentage of discount
    setInnerValue("discount-text-indicator", "15%");

    // update grand total price
    setInnerValue("grand-price-indicator", price);

    // hide the coupon input field after using coupon
    // for coupon-field-container-1
    removeClassFromElement("coupon-container-1", "md:inline-flex");
    // for coupon-field-container-2
    removeClassFromElement("coupon-container-2", "md:hidden");
    addClassToElement("coupon-container-2", "hidden");
  } else if (couponCode1 === "Couple 20" || couponCode2 === "Couple 20") {
    // calculate granted price after getting discount
    const totalPrice = getInnerValueAsNumber("total-price-indicator");
    const discount = totalPrice * 0.2;
    const price = totalPrice - discount;

    //update discount price
    setInnerValue("discount-price-indicator", discount);
    // visible discount price info to customer
    removeClassFromElement("discount-price-container", "hidden");
    addClassToElement("discount-price-container", "flex");
    // showing percentage of discount
    setInnerValue("discount-text-indicator", "20%");
    // update grand total price
    setInnerValue("grand-price-indicator", price);

    // hide the coupon input field after using coupon
    // for coupon-field-container-1
    removeClassFromElement("coupon-container-1", "md:inline-flex");
    // for coupon-field-container-2
    removeClassFromElement("coupon-container-2", "md:hidden");
    addClassToElement("coupon-container-2", "hidden");
  } else {
    // wrong coupon customer alert
    alert("Wrong coupon. Enter right coupon code.");
    return;
  }
}
