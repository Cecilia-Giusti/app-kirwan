/**
 * TimeLine that begins at the start
 */
const loader = () => {
  const background = document.querySelector(".loading-background");
  const backgroundDark = document.querySelector(".loading-background-dark");
  const lineFirst = document.querySelector(".nav-line-first");
  const lineSecond = document.querySelector(".nav-line-second");
  const logo = document.getElementById("logoHeader");
  const navCircles = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav-item");
  const imgCastle = document.querySelector(".home-img-bg");
  const text = document.querySelector(".home-content-text");
  const title = document.querySelector(".home-content-title");
  const btnLanguages = document.querySelector(".header-button-languages");
  const btnNavHeader = document.querySelector(".button-nav");

  const tl = gsap.timeline();
  const hauteurLine = 35;

  tl.to(lineSecond, {
    scaleX: 0,
    transformOrigin: "center",
    duration: 1,
  })
    .to(lineSecond, { autoAlpha: 0 })
    .to(backgroundDark, { opacity: 1, duration: 1 }, "-=1")
    .to(
      logo,
      {
        autoAlpha: 1,
        duration: 1,
      },
      "-=1"
    )
    .to(navCircles, {
      autoAlpha: 1,
      duration: 0.3,
    })
    .to(logo, { y: "-23vh", scale: 0.4, duration: 1 })
    .to(lineFirst, { y: `${hauteurLine}vh`, duration: 1 }, "-=1")
    .to(navCircles, { y: `${hauteurLine + 0.2}vh`, duration: 1 }, "-=1")
    .to(background, { autoAlpha: 0, duration: 1 })
    .to(backgroundDark, { autoAlpha: 0, duration: 1 }, "-=1")
    .to(
      navCircles,
      { width: "100%", transformOrigin: "center", duration: 1 },
      "-=1"
    )
    .to(btnLanguages, { opacity: 1, duration: 1, y: "10px" }, "-=1")
    .to(btnNavHeader, { opacity: 1, duration: 1, y: "10px" }, "-=1")
    .from(imgCastle, { scale: 1.2, duration: 3 }, "-=0.3")
    .from(
      title,
      {
        fontSize: "200px",
        letterSpacing: "50px",
        opacity: 0,
        duration: 3,
        ease: "power2",
      },
      "-=3"
    )
    .from(
      text,
      {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power1",
        onComplete: function () {
          navItems.forEach((item) => item.classList.add("pointer"));
        },
      },
      "-=3"
    );
};

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
  loader();
  navOver();
};

init();
