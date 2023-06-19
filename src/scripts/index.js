gsap.registerPlugin(ScrollTrigger);

/**
 * Handles hover events on navigation items.
 */
const navOver = () => {
  const items = document.querySelectorAll(".nav-item");

  items.forEach((item) => {
    const link = item.querySelector(".nav-item-link");
    item.addEventListener("mouseenter", () => {
      gsap.to(link, { autoAlpha: 1, duration: 0.6, y: "-20px" });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(link, { autoAlpha: 0, duration: 0.6, y: "20px" });
    });
  });
};

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
  const imgCastle = document.querySelector(".homeWinesQuotesSections-img-bg");
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
    .set(
      lineSecond,
      {
        y: `${hauteurLine}vh`,
        duration: 1,
        width: "0%",
        autoAlpha: 1,
        scaleX: 1,
        transformOrigin: "left",
      },
      "-=1"
    )
    .to(navCircles, { y: `${hauteurLine - 0.2}vh`, duration: 1 }, "-=1")
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
        onComplete: () => {
          navItems.forEach((item) => item.classList.add("pointer"));
          navOver();
        },
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
      },
      "-=3"
    );
};

const scrollAnim = () => {
  const contentTextHome = document.querySelector(".home-content");
  const imgCastle = document.querySelector(".homeWinesQuotesSections-img-bg");
  const trunk = document.querySelector(".wines-img-trunk");
  const leaf = document.querySelector(".wines-img-leaf");
  const bottle = document.querySelector(".wines-img-bottle");
  const btnBottle = document.querySelector(".wines-bottle-button");
  const lineBottle = document.querySelector(".wines-bottle-line");
  const text = document.querySelector(".wines-content-text");
  const paragraph = document.querySelector(".wines-content-paragraph");
  const title = document.querySelector(".wines-content-title");
  const link = document.querySelector(".links-wrapper");
  const linkText = document.querySelector(".wines-content-link");

  let sections = gsap.utils.toArray(".section");
  gsap.to(contentTextHome, {
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".homeWinesQuotesSections",
      start: "90% 80%",
      end: "bottom 80%",
      scrub: 0.5,
      markers: true,
    },
  });

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".homeWinesQuotesSections",
      pin: true,
      scrub: 1,
      end: "+=300",
      snap: 1 / (sections.length - 1),
    },
  });

  gsap.to(imgCastle, {
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",
      toggleActions: "play none none reset",
    },
  });

  gsap.to(trunk, {
    autoAlpha: 1,
    y: "-10%",
    x: "19%",
    duration: 2,
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });

  gsap.to(leaf, {
    autoAlpha: 1,
    y: "20%",
    x: "8%",
    delay: 1,
    duration: 2,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });
  gsap.to(bottle, {
    autoAlpha: 1,
    y: "-15%",
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });

  tl.to(btnBottle, {
    autoAlpha: 1,
    duration: 0.5,
    delay: 1,
  })
    .to(btnBottle, {
      x: "-200px",
      duration: 1.3,
      onComplete: () => {
        btnPlay();
      },
    })
    .to(
      lineBottle,
      {
        duration: 1.3,
        width: "175px",
      },
      "-=1"
    );

  gsap.to(text, {
    duration: 1,
    y: "20px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });
  gsap.to(paragraph, {
    duration: 1,
    y: "20px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });
  gsap.to(link, {
    duration: 1,
    y: "20px",
    autoAlpha: 1,
    onComplete: () => {
      lineLinkAnim(linkText);
    },
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });
  gsap.to(title, {
    duration: 1,
    letterSpacing: "5px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: trunk,
      start: "bottom 80%",

      toggleActions: "play none none reset",
    },
  });
};

const btnPlay = () => {
  const btnsPlay = document.querySelectorAll(".button-play");

  btnsPlay.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.2, duration: 0.1 });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.1 });
    });
  });
};

const lineLinkAnim = (linkText) => {
  const link = linkText.nextElementSibling;
  const circle = link.querySelector(".links-circle");
  const line = link.querySelector(".links-underline-second");

  linkText.addEventListener("mouseenter", () => {
    gsap.to(linkText, {
      letterSpacing: "0.3em",
    });
    gsap.to(circle, {
      opacity: 1,
    });
    gsap.to(line, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.5,
    });
  });
  linkText.addEventListener("mouseleave", () => {
    gsap.to(linkText, {
      letterSpacing: "0.1em",
    });
    gsap.to(circle, {
      opacity: 0,
    });
    gsap.to(line, {
      scaleX: 1,
      transformOrigin: "center",
      duration: 0.5,
    });
  });
};

const init = () => {
  loader();
  scrollAnim();
};

init();
