/* ---------- Mobile Nav Toggle ---------- */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---------- Scroll Reveal ---------- */
const sections = document.querySelectorAll('section');
const reveal = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);
sections.forEach(sec => {
  sec.classList.add('fade');
  reveal.observe(sec);
});