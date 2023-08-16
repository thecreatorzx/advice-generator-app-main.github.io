let svg1 = document.querySelector(".first");
let svg2 = document.querySelector(".second");
let icon = document.querySelector(".icon");
let x = window.matchMedia("(min-width: 550px)");
let circle = document.querySelector(".circle");
let id = document.querySelector(".id");
let text = document.querySelector(".text");
let ID = Math.random() * 224;
let button1 = document.querySelector(".circle>svg");
function myfun(x) {
  if (x.matches) {
    svg1.classList.add("hidden");
    svg2.classList.remove("hidden");
  } else {
    svg2.classList.add("hidden");
    svg1.classList.remove("hidden");
  }
}
fetch(`https://api.adviceslip.com/advice/${ID}`)
  .then((res) => res.json())
  .then((data) => {
    id.innerHTML = data.slip.id;
    text.innerHTML = `"${data.slip.advice}"`;
  });
x.addListener(myfun);
circle.addEventListener("click", getadvice);
function getadvice() {
  let ID = Math.random() * 224;
  fetch(`https://api.adviceslip.com/advice/${ID}`)
    .then((res) => res.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      text.innerHTML = `"${data.slip.advice}"`;
    });
  button1.classList.add("rotate");
  setTimeout(() => {
    button1.classList.remove("rotate");
  }, 1000);
}
