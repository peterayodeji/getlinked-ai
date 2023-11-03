"use strict";

// # Make mobile navigation work
const btnNavEl = document.querySelector(".nav__mobile");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");

  // document.body.classList.toggle("hide-overflow");
});

// # Smooth scrolling animation
// const navLinksContainer = document.querySelector(".nav__links");
// const navLinks = navLinksContainer.querySelectorAll(".link");
// console.log(navLinks);

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (!href.startsWith("#")) return;
    e.preventDefault();

    // * Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // * Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
