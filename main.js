const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".submit-btn");
const icon1 = document.querySelector(".error-icon1");
const icon2 = document.querySelector(".error-icon2");
const icon3 = document.querySelector(".error-icon3");
const icon4 = document.querySelector(".error-icon4");
const text1 = document.querySelector(".error-text1");
const text2 = document.querySelector(".error-text2");
const text3 = document.querySelector(".error-text3");
const text4 = document.querySelector(".error-text4");
const form = document.querySelector(".form");

form.addEventListener("submit", e => {
  let firstNameErrors = [];
  let emailErrors = [];
  let lastNameErrors = [];
  let passwordErrors = [];
  if (firstName.value === "" || firstName.value == null) {
    text1.classList.remove("hidden");
    icon1.classList.remove("hidden");
    firstNameErrors.push("firstNameError");
  }
  if (lastName.value === "" || lastName.value == null) {
    text2.classList.remove("hidden");
    icon2.classList.remove("hidden");
    lastNameErrors.push("lastNameError");
  }
  if (email.value === "" || email.value == null) {
    text3.classList.remove("hidden");
    icon3.classList.remove("hidden");
    emailErrors.push("emailError");
  }
  if (password.value === "" || password.value == null) {
    text4.classList.remove("hidden");
    icon4.classList.remove("hidden");
    passwordErrors.push("passwordError");
  }
  if (firstNameErrors.length > 0) {
    e.preventDefault();
    firstName.removeAttribute("placeholder");
    firstName.classList.add("error-border");
  }
  if (emailErrors.length > 0) {
    email.removeAttribute("placeholder");
    email.placeholder = "email@example/com";
    e.preventDefault();
    email.classList.add("error-border");
  }
  if (lastNameErrors.length > 0) {
    lastName.removeAttribute("placeholder");
    e.preventDefault();
    lastName.classList.add("error-border");
  }
  if (passwordErrors.length > 0) {
    password.removeAttribute("placeholder");
    password.classList.add("error-border");
    e.preventDefault();
  }
});
