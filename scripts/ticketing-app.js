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
  });
}
