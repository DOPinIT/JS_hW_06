const counterValue = 0;

const container = document.getElementById(counter);
const btnMinus = document.querySelector('button[data-action = "decrement"]');
const btnPlus = document.querySelector('button[data-action = "increment"]');

btnMinus.addEventListener("click", decrement);
btnPlus.addEventListener("click", increment);

function decrement(event) {
  console.log(event);
}

function increment(event) {
  console.log(event);
}
