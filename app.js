const boughtPrice = document.querySelector("#bought-price");
const quantityBought = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#text-area");

output.style.display = "none";

function calculate() {
  var buyPrice = Number(boughtPrice.value);
  var quantity = Number(quantityBought.value);
  var current = Number(currentPrice.value);
  if (buyPrice > 0 && quantity > 0 && current >= 0) {
    if (buyPrice < current) {
      var profit = current - buyPrice;
      var profitPercentage = (profit * 100) / buyPrice;
      output.style.display = "block";
      output.innerText =
        "Your profit is " +
        (profit * quantity).toPrecision(2) +
        " and the profit percentage is " +
        profitPercentage.toPrecision(2) +
        "🎉✨";
      output.style.color = "green";
    } else if (buyPrice > current) {
      var loss = buyPrice - current;
      var lossPercentage = (loss * 100) / buyPrice;
      output.style.display = "block";
      output.innerText =
        "Your loss is " +
        (loss * quantity).toPrecision(2) +
        " and the loss percentage is " +
        lossPercentage.toPrecision(2) +
        "😐";
      output.style.color = "red";
    } else {
      output.style.display = "block";
      output.innerText = "No profit no loss";
    }
  } else {
    output.style.display = "block";
    output.innerText = "Enter a valid input";
  }

  //   console.log(buyPrice);
}

checkButton.addEventListener("click", calculate);
