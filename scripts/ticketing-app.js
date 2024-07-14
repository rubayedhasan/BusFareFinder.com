// collection of bus btn
const btnCollection = document.getElementsByClassName("seat-btn");
// iterate btnCollection
for (const btn of btnCollection) {
  btn.addEventListener("click", function (event) {
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
  const couponInputField = document.getElementById("coupon-input-field");
  const couponInput2ndField = document.getElementById("coupon-input-2nd-field");

  const couponCode1 = couponInputField.value;
  const couponCode2 = couponInput2ndField.value;
  if (couponCode1 === "NEW15" || couponCode2 === "NEW15") {
    const totalPrice = getInnerValueAsNumber("total-price-indicator");
    const discount = totalPrice * 0.15;
    const price = totalPrice - discount;
    setInnerValue("discount-price-indicator", discount);
    visibleElementByReplacingClassName("discount-price-container");
    setInnerValue("grand-price-indicator", price);
  } else if (couponCode1 === "Couple 20" || couponCode2 === "Couple 20") {
    const totalPrice = getInnerValueAsNumber("total-price-indicator");
    const discount = totalPrice * 0.2;
    const price = totalPrice - discount;
    setInnerValue("discount-price-indicator", discount);
    visibleElementByReplacingClassName("discount-price-container");
    setInnerValue("grand-price-indicator", price);
    setInnerValue("grand-price-indicator", price);
  } else {
    alert("Enter right coupon code.");
    return;
  }
}
