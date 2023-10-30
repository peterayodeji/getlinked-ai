// # Sticky Navigation
let isIntersecting = true;

// * Detecting whether user is scrolling up or down the page
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // * User is scrolling down
    if (!isIntersecting) document.body.classList.add("sticky");
  } else {
    // * User is scrolling up
    if (!isIntersecting) document.body.classList.remove("sticky");
  }

  lastScrollTop = scrollTop;
});

// * Observing the header section as it intersects the viewport

const sectionHeaderEl = document.querySelector(".header");
const navHeight = document.querySelector(".nav").getBoundingClientRect().height;
console.log(navHeight);

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
