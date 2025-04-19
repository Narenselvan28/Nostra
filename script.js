document.addEventListener("DOMContentLoaded", () => {
  // Offer Close
  const offclose = document.getElementById("offer-close");
  const offers = document.getElementById("offer-bar");
  if (offclose && offers) {
    offclose.addEventListener("click", function () {
      offers.classList.add("hidden");
    });
  }

  // Mobile Navbar
 
  // Swiper JS
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      speed: 2000,
    });
  }

  // Heart toggle

  document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach((heart) => {
      heart.addEventListener("click", function () {
        // Toggle classes to switch between red and black colors
        heart.classList.toggle("text-red-700");  // Toggle the red color on click
        heart.classList.toggle("text-black");   // Toggle the black color on click
      });
    });
  });



  // Scroll functionalities
  const scrollNewArrival = document.getElementById("na");
  const scrollMostWanted = document.getElementById("mw");

  if (scrollNewArrival) {
    scrollNewArrival.addEventListener("click", function () {
      const section = document.querySelector("#NewArrival");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (scrollMostWanted) {
    scrollMostWanted.addEventListener("click", function () {
      const section = document.querySelector("#MostWanted");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }
});
