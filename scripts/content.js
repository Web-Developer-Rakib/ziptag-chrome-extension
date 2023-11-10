// Function to check if the current URL contains specific keywords
function isRegistrationPage() {
  const keywords = ["register", "registration", "signup"];
  const currentURL = window.location.href.toLowerCase();

  return keywords.some((keyword) => currentURL.includes(keyword));
}
// Fields
const userName = document.getElementById("ap_customer_name");
const email = document.getElementById("ap_email");
const password = document.getElementById("ap_password");
const confirmPassword = document.getElementById("ap_password_check");

// Create a random object with field properties
const data = {
  userName: "Rakibul Hasan",
  email: "hrakib935@gmail.com",
  password: "randomPassword#123",
  confirmPassword: "randomPassword#123",
};
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
      const uuidInput = uuidField.value;
      const myUuid = "IAM369RH";
      console.log(uuidInput);
      event.preventDefault();
      if (uuidInput === myUuid) {
        userName.value = data.userName;
        email.value = data.email;
        password.value = data.password;
        confirmPassword.value = data.confirmPassword;
      } else {
        userName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
        alert("Invalid uuid!");
      }
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

// Execute the function
modifyForms();
