const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

let width = 200;

cookie.addEventListener("mousedown", function() {
  width += 20;
  cookie.style.width = `${width}px`;
  cookie.style.height = `${width}px`;
});

cookie.addEventListener("mouseup", function() {
  width -= 20;
  cookie.style.width = `${width}px`;
  cookie.style.height = `${width}px`;
  counter.textContent = parseInt(counter.textContent) + 1;
});