const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");

for (const ingridient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingridient;
  liEl.classList.add("item");
  ulEl.appendChild(liEl);
}

// const ingredient = ingredients
//   .map((ingridient) => `<li>${ingridient}</li>`)
//   .join("");

// ulEl.insertAdjacentText("beforeend", ingredient);

// console.log(ingredient);
