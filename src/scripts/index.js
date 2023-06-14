/**
 * Handles hover events on navigation items.
 */
const navOver = () => {
  const items = document.querySelectorAll(".nav-item");

  items.forEach((item) => {
    const link = item.querySelector(".nav-item-link");
    item.addEventListener("mouseenter", (e) => {
      gsap.to(link, { autoAlpha: 1, duration: 0.6, y: 0 });
    });

    item.addEventListener("mouseleave", (e) => {
      gsap.to(link, { autoAlpha: 0, duration: 0.6, y: 20 });
    });
  });
};

const init = () => {
  navOver();
};

init();
