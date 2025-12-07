const refs = {
  loginForm: document.querySelector(".login-form"),
};

console.log(refs);

const onLoginFormSubmit = (event) => {
  event.preventDefault();

  const formData = {
    email: refs.loginForm.elements.email.value.trim(),
    password: refs.loginForm.elements.password.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes("")) {
    alert("All form fields must be filled in");

    return;
  }
  console.log(formData);

  refs.loginForm.reset();
};

refs.loginForm.addEventListener("submit", onLoginFormSubmit);
