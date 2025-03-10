const whatIsThis = document.querySelector(".whatIsThis");
const popUp = document.querySelector(".popUpDetail");
const main = document.querySelector("main");

whatIsThis.addEventListener("click", () => {
  popUp.classList.toggle("show");
});

main.addEventListener("click", () => {
  popUp.classList.remove("show");
});

//dayTwo

const menu = document.querySelector(".dayTwo .container");

menu.addEventListener("click", () => {
  menu.classList.toggle("close");
});
