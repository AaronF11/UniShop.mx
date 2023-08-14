/*----------------- typed js -------------------*/
const typed = new Typed(".main-title", {
  strings: ["Unishop.mx"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

/*----------------- scroll reveal -------------------*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal(".header, .main__container", {
  origin: "top",
});
ScrollReveal().reveal("", { 
    origin: "bottom" 
});
ScrollReveal().reveal(".main__content", { 
    origin: "left" 
});
ScrollReveal().reveal(".main__img", { 
    origin: "right" 
});
