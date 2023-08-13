let svg1 = document.querySelector(".first");
let svg2 = document.querySelector(".second");
let icon = document.querySelector(".icon");
let x = window.matchMedia("(min-width: 550px)");
let circle = document.querySelector(".circle");
function myfun(x) {
  if (x.matches) {
    svg1.classList.add("hidden");
    svg2.classList.remove("hidden");
  } else {
    svg2.classList.add("hidden");
    svg1.classList.remove("hidden");
  }
}
x.addListener(myfun);
circle.addEventListener("click", () => {
  circle.style.background = "green";
});
