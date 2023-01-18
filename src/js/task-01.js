const amountOfProducts = document.getElementById("categories");
const numOfCategories = `Number of categories: ${Number(
  amountOfProducts.childElementCount
)}`;
console.log(amountOfProducts);


const categoriesEls = document.querySelectorAll(".item");

categoriesEls.forEach(el => {
  
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Category:", el.lastElementChild.children.length);

})

