function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
console.log(bodyEl);

const button = document.querySelector(".change-color");
console.log(button);

const handleClick = (event) => {
  console.log(event);

  bodyEl.style.backgroundColor = getRandomHexColor();
  button.innerHTML = getRandomHexColor();
};

button.addEventListener("click", handleClick);
