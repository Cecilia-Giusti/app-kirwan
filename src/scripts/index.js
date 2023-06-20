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

//TODO Animation de la navbar en pourcentage

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
  const imgCastle = document.querySelector(".homePageSections-img-bg");
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

/**
 * Animations when the user scrolls on the homepage
 */
const scrollAnim = () => {
  //Horizontal Scroll
  const contentTextHome = document.querySelector(".home-content");

  let sections = gsap.utils.toArray(".section");

  gsap.to(contentTextHome, {
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".homePageSections",
      start: "90% 80%",
      end: "bottom 80%",
      scrub: 0.5,
    },
  });

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".homePageSections",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
    },
  });

  // Our-Wines Page Animation - On enter
  const imgBgFirst = document.querySelector(".homePageSections-img-bg-first");
  const winesSection = document.querySelector(".wines");
  const trunk = document.querySelector(".wines-img-trunk");
  const leaf = document.querySelector(".wines-img-leaf");
  const bottle = document.querySelector(".wines-img-bottle");
  const btnBottle = document.querySelector(".wines-bottle-button");
  const lineBottle = document.querySelector(".wines-bottle-line");
  const text = document.querySelector(".wines-content-text");
  const paragraph = document.querySelector(".wines-content-paragraph");
  const title = document.querySelector(".wines-content-title");
  const link = document.querySelector(".wines-content .links-wrapper");
  const linkText = document.querySelector(".wines-content-link");

  // Background
  gsap.to(imgBgFirst, {
    filter: "blur(5px)",
    duration: 0.5,
    scrollTrigger: {
      trigger: winesSection,
      start: "bottom 80%",
      toggleActions: "play none none reset",
    },
  });

  // Elements - Trunk, leaf and bottle
  gsap.to(trunk, {
    autoAlpha: 1,
    y: "-10%",
    x: "19%",
    duration: 2,
    delay: 1,
    scrollTrigger: {
      trigger: winesSection,

      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });

  gsap.to(leaf, {
    autoAlpha: 1,
    y: "20%",
    x: "8%",
    delay: 1,
    duration: 2,
    scrollTrigger: {
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });
  gsap.to(bottle, {
    autoAlpha: 1,
    y: "-15%",
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });

  // Btn Play
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
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
      ease: "none",
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

  // ContentText Animations
  gsap.to(text, {
    duration: 1,
    y: "20px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: winesSection,

      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });
  gsap.to(title, {
    duration: 1,
    letterSpacing: "5px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });
  gsap.to(paragraph, {
    duration: 1,
    y: "20px",
    autoAlpha: 1,
    delay: 1,
    scrollTrigger: {
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
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
      trigger: winesSection,
      start: `bottom 85%`,
      end: `bottom 80%`,
      toggleActions: "play reset restart reset",
    },
  });

  //TODO Our wines page Animation - On leave

  // Quotes page Animation - On start
  const quoteFirst = document.querySelector(".quote-first");
  const quoteSecond = document.querySelector(".quote-second");
  const imgBgSecond = document.querySelector(".homePageSections-img-bg-second");
  const textQuote = document.querySelector(".quote-content-text");
  const titleQuote = document.querySelector(".quote-content-title");
  const paragraphQuote = document.querySelector(".quote-content-paragraph");
  const linkQuote = document.querySelector(".quote-content .links-wrapper");
  const linkTextQuote = document.querySelector(".quote-content-link");
  const imgCarrousel = document.querySelector(".quote-carrousel-img");

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".quote",
      start: "bottom 70%",
      end: "bottom 60%",
      markers: true,
      toggleActions: "play reset none reset",
    },
  });

  tl2
    .fromTo(
      quoteFirst,
      {
        x: "100%",
      },
      {
        x: "0%",
        autoAlpha: 1,
        duration: 1,
      }
    )
    .to(quoteFirst, {
      x: "-100%",
      autoAlpha: 0,
      delay: 1,
      duration: 1,
    })
    .fromTo(
      quoteSecond,
      {
        x: "100%",
      },
      {
        x: "0%",
        autoAlpha: 1,
        duration: 1,
      },
      "-=0.5"
    )
    .to(quoteSecond, {
      scale: 180,
      x: "30vw",
      duration: 4,
      ease: "slow",
    })
    .to(
      quoteSecond,
      {
        autoAlpha: 0,
      },
      "-=4"
    )
    .to(
      imgBgSecond,
      {
        autoAlpha: 1,
        duration: 1,
      },
      "-=4"
    )
    .to(
      textQuote,
      {
        duration: 1,
        y: "20px",
        autoAlpha: 1,
        delay: 0.5,
      },
      "-=3"
    )
    .to(
      titleQuote,
      {
        duration: 1,
        letterSpacing: "5px",
        autoAlpha: 1,
        delay: 0.5,
      },
      "-=3"
    )
    .to(
      paragraphQuote,
      {
        duration: 1,
        y: "20px",
        autoAlpha: 1,
        delay: 0.5,
      },
      "-=3"
    )
    .to(
      linkQuote,
      {
        duration: 1,
        y: "20px",
        autoAlpha: 1,
        onComplete: () => {
          lineLinkAnim(linkTextQuote);
        },
        delay: 0.5,
      },
      "-=3"
    )
    .to(
      imgCarrousel,
      {
        duration: 1,
        y: "10vh",
        autoAlpha: 1,
      },
      "-=1"
    );

  //TODO Quotes section Animations - On leave

  // Local section animations
  const localImgBg = document.querySelector(".homePageSections-img-bg-third");
  const localText = document.querySelector(".local-content-text");
  const localTitle = document.querySelector(".local-content-title");
  const localParagraph = document.querySelector(".local-content-paragraph");
  const localLink = document.querySelector(".local .links-wrapper");
  const localLinkText = document.querySelector(".local-content-link");
  const btnLocal = document.querySelector(".local-buttonLine");

  gsap.to(localImgBg, {
    autoAlpha: 1,
    duration: 3,
    scrollTrigger: {
      trigger: ".local",
      start: "bottom 55%",
      toggleActions: "play none none reset",
    },
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".local",
      start: "bottom 52%",
      end: `bottom 45%`,
      toggleActions: "play reset restart reset",
      markers: true,
    },
  });

  // ContentText Animations
  tl3
    .to(localText, {
      duration: 1,
      y: "20px",
      autoAlpha: 1,
      delay: 1,
    })
    .to(
      localTitle,
      {
        duration: 1,
        letterSpacing: "5px",
        autoAlpha: 1,
        delay: 1,
      },
      "-=2"
    )
    .to(
      localParagraph,
      {
        duration: 1,
        y: "20px",
        autoAlpha: 1,
        delay: 1,
      },
      "-=2"
    )
    .to(
      localLink,
      {
        duration: 1,
        y: "20px",
        autoAlpha: 1,
        onComplete: () => {
          lineLinkAnim(localLinkText);
        },
        delay: 1,
      },
      "-=2"
    )
    .to(btnLocal, {
      autoAlpha: 1,
      duration: 0.5,
      onComplete: () => {
        btnPlay();
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
  //TODO Ajouter un scroll vers le haut au rechargement de la page
  loader();
  scrollAnim();
};

init();
