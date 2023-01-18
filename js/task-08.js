const formLogin = document.querySelector("form.login-form");

formLogin.addEventListener("submit", onformSubmit);

function onformSubmit(event) {
  event.preventDefault();

  const formEls = event.currentTarget.elements;

  if (formEls.email.value === "" || formEls.password.value === "") {
    alert("Всі поля мають бути заповнені!");
  } else {
    console.log(`Email: ${formEls.email.value}, Password: ${formEls.password.value}`);
    event.currentTarget.reset();
  }
}
