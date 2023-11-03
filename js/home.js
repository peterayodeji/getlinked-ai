"use strict";

// # Sticky Navigation
let isIntersecting = true;

// * Detecting whether user is scrolling up or down the page
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // * User is scrolling down
    if (!isIntersecting) document.body.classList.remove("sticky");
  } else {
    // * User is scrolling up
    if (!isIntersecting) document.body.classList.add("sticky");
  }

  lastScrollTop = scrollTop;
});

// * Observing the header section as it intersects the viewport

const sectionHeaderEl = document.querySelector(".header");
const navHeight = document.querySelector(".nav").getBoundingClientRect().height;
// console.log(navHeight);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      isIntersecting = false;
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      isIntersecting = true;
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);
obs.observe(sectionHeaderEl);

// # FAQ
const toggles = document.querySelectorAll(".faq__toggle");
const faqs = document.querySelectorAll(".faq-box");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    faqs.forEach((faq) => {
      if (toggle.closest(".faq-box") === faq) return;
      faq.classList.remove("active");
    });

    toggle.closest(".faq-box").classList.toggle("active");
  });
});

// # Reveal sections
// const navLinksContainer = document.querySelector(".nav__links");
// const navLinks = navLinksContainer.querySelectorAll(".link");
// console.log(navLinks);

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);

  // Remove the "active-link" class from all links
  // navLinks.forEach((link) => {
  //   const targetId = link.getAttribute("href").substring(1);

  //   if (document.getElementById(targetId) === entry.target) {
  //     link.classList.add("active");
  //   } else {
  //     link.classList.remove("active");
  //   }
  // });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
