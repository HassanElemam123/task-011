const meters = document.querySelector(".meters");
const btn = document.querySelector(".btn");
const result = document.querySelector(".grade-result-box");





btn.addEventListener("click", function () {
  const a = Number(meters.value);
  operation = a * 0.0254;

  if (isNaN(a) || a === 0) {
    result.textContent = "Not Found"
  } else {
    result.textContent = operation + " Inch";
  }
});