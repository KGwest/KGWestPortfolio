window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  console.log("GSAP is running after DOM is loaded!");

  // Hero: Fade in + scale
  gsap.from(".hero-section", {
    opacity: 0,
    scale: 0.95,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });

  // About: Slide up and fade
  gsap.from(".about-section", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

  // Projects: Rotate and fade in
  gsap.from(".projects-section", {
    opacity: 0,
    y: 150,
    rotateX: 10,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Skills: Slide from left
  gsap.from(".skills-section", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

  // Books: Fade in and float up
  gsap.from(".my-books", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".my-books",
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });

  // Contact: Pop in
  gsap.from(".contact-section", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
});
