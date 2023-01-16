let counterValue = 0;

const btnMinus = document.querySelector('button[data-action = "decrement"]');
const btnPlus = document.querySelector('button[data-action = "increment"]');

let counter = document.querySelector("#value");

btnMinus.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
btnPlus.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
