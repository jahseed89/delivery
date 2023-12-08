gsap.registerPlugin(ScrollTrigger);

gsap.from(
  ".nav-logo-anim, .nav__items>ul>li, .btn-outline-custom-primary, .btn-outline-custom-secondery",
  {
    opacity: 0,
    duration: 0.5,
    y: -70,
    ScrollTrigger:
      ".nav-logo-anim, .nav__items>ul>li, .btn-outline-custom-primary, .btn-outline-custom-secondery",
  }
);

gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });

gsap.from(".delevery__hero-img", {
  scale: 0,
  duration: 2,
  ease: "easeOut",
});

gsap.from(".burga-img, .delevery-time-img", {
  scale: -1,
  duration: 2.5,
  delay: 1.1,
  ease: "easeOut",
});

gsap.from(".rates", {
  opacity: 0,
  duration: 1,
  x: -50,
  stagger: 0.6,
  ScrollTrigger: ".rates",
});

gsap.from(".about-us__hero", {
  scale: 0,
  duration: 1,
  ease: "easeOut",
  ScrollTrigger: {
    trigger: ".about-us__hero",
  },
});

gsap.from(".our-mission__hero", {
  scale: 0,
  duration: 1,
  ease: "easeOut",
  ScrollTrigger: {
    trigger: ".our-mission__hero",
  },
});

gsap.from(".card", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.6,
  ScrollTrigger: {
    trigger: ".card",
  },
});

gsap.from(".avata", { opacity: 0, duration: 1, stagger: 0.6 });

gsap.from(".press-news__card", { opacity: 0, duration: 1, delay: 1.1 });

gsap.from(".footer-menu, .utility, .availability, .availability-rest, ", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
