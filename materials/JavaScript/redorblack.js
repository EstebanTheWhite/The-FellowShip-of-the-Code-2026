let balance = 100;

document.querySelectorAll(".js-spin").forEach(function (element) {
  element.addEventListener("click", function (button) {
    const colors = ["red", "black"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    let message;
    if (button.target.dataset.buttontype === randomColor) {
      balance += 10;
      message = `You won! It was ${randomColor.toUpperCase()}`;
    } else {
      balance -= 10;
      message = `You lost! It was ${randomColor.toUpperCase()}`;
    }

    document.querySelector("#results").textContent = message;
    document.querySelector("#balance").textContent = balance;
  });
});
