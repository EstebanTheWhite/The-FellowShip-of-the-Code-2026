const form = document.querySelector("#complaint-form");
const resultsList = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  resultsList.innerHTML = "";

  // Collect all form data using FormData
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    const li = document.createElement("li");

    li.textContent = `${key}: ${value}`;
    resultsList.appendChild(li);
  });
});
