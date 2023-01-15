const amountOfProducts = document.getElementById("categories");
const numOfCategories = `Number of categories: ${Number(
  amountOfProducts.childElementCount
)}`;
console.log(amountOfProducts);
const allCategoriesEl = document.querySelectorAll("h2");

const CategoriesEls = document.querySelectorAll(".item");
const liCategory = document.querySelectorAll("li");
const ulCategory = document.querySelectorAll("ul");

const firstCategoriesEl = `Category: ${allCategoriesEl[0].textContent}`;
const secondCategoriesEl = `Category: ${allCategoriesEl[1].textContent}`;
const thirdCategoriesEl = `Category: ${allCategoriesEl[2].textContent}`;

const firstNumElCategories = `Elements: ${ulCategory[1].childElementCount}`;
const secondNumElCategories = `Elements: ${ulCategory[2].childElementCount}`;
const thirdNumElCategories = `Elements: ${ulCategory[3].childElementCount}`;

console.log(numOfCategories);

console.log(firstCategoriesEl);

console.log(firstNumElCategories);

console.log(secondCategoriesEl);

console.log(secondNumElCategories);

console.log(thirdCategoriesEl);

console.log(thirdNumElCategories);
