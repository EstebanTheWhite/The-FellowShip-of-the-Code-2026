const inputField = document.querySelector("#js-random-number");
const button = document.querySelector("#js-random-button");
const resultDisplay = document.querySelector("#js-random-result");

button.addEventListener("click", function () {
  const inputValue = parseInt(inputField.value, 10);
  const randomNumber = Math.floor(Math.random() * 6) + 2; // Random number between 2 and 7

  if (isNaN(inputValue) || inputValue < 0 || inputValue > 10) {
    resultDisplay.textContent = "Please enter a valid number between 0 and 10!";
    resultDisplay.style.color = "red";
    return false;
  }

  if (inputValue === randomNumber) {
    resultDisplay.textContent = `Yes, I had exactly ${randomNumber} breakfasts today! You're a true Hobbit!`;
    resultDisplay.style.color = "green";
  } else {
    resultDisplay.textContent = `Oh no! I actually need at least ${randomNumber} breakfasts to stay happy!`;
    resultDisplay.style.color = "brown";
  }
});
