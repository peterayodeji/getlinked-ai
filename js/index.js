// # Make mobile navigation work

const btnNavEl = document.querySelector(".nav__mobile");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");

  // document.body.classList.toggle("hide-overflow");
});

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
