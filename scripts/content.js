// Function to check if the current URL contains specific keywords
function isRegistrationPage() {
  const keywords = ["register", "registration", "signup"];
  const currentURL = window.location.href.toLowerCase();

  return keywords.some((keyword) => currentURL.includes(keyword));
}

// Function to add an extra field and a button inside the form
function adduuidFieldAndButton(form) {
  // Check if the current page is a registration page
  if (isRegistrationPage()) {
    // Create a new input field
    const uuidField = document.createElement("input");
    uuidField.setAttribute("type", "text");
    uuidField.setAttribute("name", "uuidField");
    uuidField.setAttribute("placeholder", "Enter the uuid");

    // Create a new button
    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Use zip tag";
    submitButton.addEventListener("click", function () {
      alert(uuidField.value);
    });

    // Add the new field and button to the form
    form.appendChild(uuidField);
    form.appendChild(submitButton);
  }
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
