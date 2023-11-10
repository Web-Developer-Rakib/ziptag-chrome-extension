// Function to add an extra field and a button inside the form
function adduuidFieldAndButton(form) {
  // Create a new input field
  const uuidField = document.createElement("input");
  uuidField.setAttribute("type", "text");
  uuidField.setAttribute("name", "uuidField");
  uuidField.setAttribute("placeholder", "Enter the uuid");

  // Create a new button
  const submitButton = document.createElement("button");
  submitButton.innerHTML = "Use zip tag";
  submitButton.addEventListener("click", function () {
    alert("Button Clicked!");
  });

  // Add the new field and button to the form
  form.appendChild(uuidField);
  form.appendChild(submitButton);
}

// Find and modify forms on the page
function modifyForms() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    adduuidFieldAndButton(form);
  });
}

// Execute the modification when the page is loaded
modifyForms();
