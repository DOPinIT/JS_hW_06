const FontSizeSlider = document.querySelector("input#font-size-control");

const span = document.querySelector("span#text");

FontSizeSlider.addEventListener("input", () => {
  span.style.fontSize = FontSizeSlider.value + "px";
});
