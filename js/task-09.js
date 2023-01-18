function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
console.log(bodyEl);

const button = document.querySelector(".change-color");
console.log(button);
const span = document.querySelector(".color");

const handleClick = (event) => {
  console.log(event);
  const colorChenge = getRandomHexColor();
  bodyEl.style.backgroundColor = colorChenge;
  button.innerHTML = colorChenge;
span.textContent = colorChenge;
};

button.addEventListener("click", handleClick);
