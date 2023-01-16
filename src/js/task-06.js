const inputBorder = document.querySelector("#validation-input");
console.log(inputBorder);

const inputBorderLengt = +inputBorder.dataset.length;
inputBorder.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputBorderLengt) {
    inputBorder.classList.add("valid");
    inputBorder.classList.remove("invalid");
  } else {
    inputBorder.classList.remove("valid");
    inputBorder.classList.add("invalid");
  }
});
