let countdisplay = document.getElementById("count");

let resetbtn = document.getElementById("reset-btn");
let incbtn = document.getElementById("inc-btn");
let decbtn = document.getElementById("dec-btn");

let count = 0;

resetbtn.addEventListener("click", function () {
  countdisplay.innerHTML = "0";
  count = 0;
});

incbtn.addEventListener("click", function () {
  count += 1;
  countdisplay.innerHTML = count;
});

decbtn.addEventListener("click", function () {
  count -= 1;
  countdisplay.innerHTML = count;
});
