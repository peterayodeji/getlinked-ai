// # Make mobile navigation work
const btnNavEl = document.querySelector(".nav__mobile");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");

  // document.body.classList.toggle("hide-overflow");
});
