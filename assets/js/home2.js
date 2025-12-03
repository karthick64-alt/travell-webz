document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation and dropdown functionality is handled by main.js
  // This file only handles Home 2 specific features (carousel, animations, etc.)

  if (typeof Swiper !== "undefined") {
    new Swiper(".home2-carousel", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
      delay: 4200,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        780: {
          slidesPerView: 2,
        },
        1180: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }

  if (window.jQuery) {
    const $ = window.jQuery;
    $(".home2-step").each(function (index) {
      $(this).attr("data-aos", "fade-up").attr("data-aos-delay", index * 120);
    });

    $(".home2-destination-card").hover(
      function () {
        $(this).addClass("is-hovered");
      },
      function () {
        $(this).removeClass("is-hovered");
      }
    );
  }
});

