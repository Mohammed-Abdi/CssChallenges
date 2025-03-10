const whatIsThis = document.querySelector(".whatIsThis");
const popUp = document.querySelector(".popUpDetail");

whatIsThis.addEventListener("click", () => {
  popUp.classList.toggle("show");
});
