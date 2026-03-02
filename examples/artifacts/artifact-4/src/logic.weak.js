const button = document.getElementById("next-step");
const status = document.getElementById("quest-status");

button.addEventListener("click", function () {
  if (status.textContent.includes("Start")) {
    status.textContent = "Current Quest Step: Journey";
  } else if (status.textContent.includes("Journey")) {
    status.textContent = "Current Quest Step: Battle";
  } else if (status.textContent.includes("Battle")) {
    status.textContent = "Current Quest Step: End";
  } else {
    status.textContent = "Current Quest Step: Start";
  }
});