import * as myFunctions from "./modules/functions.js";
import * as bootstrap from "bootstrap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import { SplitText } from "gsap/SplitText.js";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Thumbs,
  Controller,
} from "swiper";

import Choices from "choices.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import { ParticlesConfig } from "/node_modules/particles.js/particles.js";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  MorphSVGPlugin,
  SplitText,
  DrawSVGPlugin
);

myFunctions.isWebp();

(function lightGalleryItem() {
  // lightGallery

  const lg = document.querySelectorAll(".lg-list");
  lg.forEach((item) => {
    lightGallery(item, {
      plugins: [lgVideo, lgThumbnail],
      videojs: true,
      licenseKey: "your_license_key",
      selector: ".lg-item",
      mode: "lg-slide",
      speed: 800,
      loop: false,
      counter: false,
      download: false,
      thumbnail: true,
      mobileSettings: {
        showCloseIcon: true,
      },
    });
  });
})();


// show popup
(function popUpModal() {
  const seconds = 45000;
  const timer = setTimeout(function () {
    const myModal = new bootstrap.Modal(document.getElementById("popupModal"));
    var isshow = localStorage.getItem('isshow');
    if (isshow== null) {
      localStorage.setItem('isshow', 1)
      myModal.show();
    }
  }, seconds);

  const modal = document.querySelectorAll(".modal");
  modal.forEach(function (el) {
    el.addEventListener("show.bs.modal", function () {
      clearTimeout(timer);
    });
  });
})();

// Dropdown Select
(function selectChoices() {
  var multipleCancelButton = new Choices("#choices-single-custom-templates", {
    allowHTML: true,
  });
})();

// Fancybox
(function fancyBox() {
  Fancybox.bind('[data-fancybox="certificate"]', {
    Image: {
      zoom: false,
    },
    showClass: "fancybox-zoomIn",
    hideClass: "fancybox-zoomOut",
  });
})();

// (function outNum() {
//   let counter = document.querySelectorAll(".counter");
//   let limit = 0;
//   window.addEventListener("scroll", function () {
//     if (limit == counter.length) {
//       return;
//     }

//     for (let i = 0; i < counter.length; i++) {
//       let pos = counter[i].getBoundingClientRect().top;
//       let win = window.innerHeight - 10;
//       if (pos < win && counter[i].dataset.stop === "0") {
//         counter[i].dataset.stop = 1;
//         let x = 0;
//         limit++;
//         let int = setInterval(function () {
//           x = x + Math.ceil(counter[i].dataset.to / 10);
//           counter[i].innerText = x;
//           if (x > counter[i].dataset.to) {
//             counter[i].innerText = counter[i].dataset.to;
//             clearInterval(int);
//           }
//         }, 2);
//       }
//     }
//   });
// })();

(function gsapMatchMedia() {
  ScrollTrigger.matchMedia({
    all: function () {},
    // 2500 - 993
    "(max-width: 2500px) and (min-width: 993px)": function () {
      const boxes = gsap.utils.toArray(".gs-anim");
      boxes.forEach((box) => {
        gsap.from(box, {
          yPercent: 10,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "center 40%",
          },
        });
      });

      const boxes1 = gsap.utils.toArray(".services-section__cards");
      boxes1.forEach((box) => {
        gsap.from(box, {
          yPercent: 10,
          duration: .1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "center 40%",
          },
        });
      });

      // Spa animation

      gsap.to(".spa-video-section__decoration_img", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".spa-video-section",
          start: "top bottom",
          scrub: true,
        },
      });

      // Spa animation

      gsap.to(".spa__decoration_img", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".insurance-companies-section",
          start: "top bottom",
          scrub: true,
        },
      });

      // Spa animation

      gsap.to(".spa-masseur-section__decoration_img", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".spa-masseur-section",
          start: "top bottom",
          scrub: true,
        },
      });

      // cosmetology animation

      gsap.to(".cosmetology-section__decoration_img", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".cosmetology-section",
          start: "top bottom",
          scrub: true,
        },
      });

      gsap.to(".cosmetology-banner__decoration_img", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".cosmetology-banner",
          start: "top bottom",
          scrub: true,
        },
      });

      // cosmetology animation
      gsap.to(".health-section__decoration_img", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".health-section",
          start: "top bottom",
          scrub: true,
        },
      });
    },
    // 992 - 769
    "(max-width: 992px) and (min-width: 769px)": function () {},
    // 768 - 577
    "(max-width: 768px) and (min-width: 577px)": function () {},
    // 576 - 320
    "(max-width: 576px) and (min-width: 320px)": function () {},
  });
})();

// Swiper banner
(function swiperInteryor() {
  document
    .querySelectorAll(".banner-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiperBanner = new Swiper(el, {
        modules: [Pagination, Autoplay],
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 5000,
        },
        // Pagination
        pagination: {
          el: ".banner-section__pagination.swiper-pagination",
          clickable: true,
        },
      });
    });
})();

// Swiper video
(function swiperInteryor() {
  document
    .querySelectorAll(".video-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiperVideo = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        // Navigation arrows
        navigation: {
          nextEl: ".video-section__slide .forSwiper .main__btn-next",
          prevEl: ".video-section__slide .forSwiper .main__btn-prev",
        },
      });
    });
})();

// Swiper personnel
(function swiperFloor() {
  document
    .querySelectorAll(".personnel-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        // loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        // Pagination
        pagination: {
          el: ".personnel-section__pagination.swiper-pagination",
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          prevEl: ".personnel-section__slide .forSwiper .main__btn-prev",
          nextEl: ".personnel-section__slide .forSwiper .main__btn-next",
        },
      });
    });
})();

// Swiper reviews
(function swiperFloor() {
  document
    .querySelectorAll(".reviews-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        // loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        // Pagination
        pagination: {
          el: ".reviews-section__pagination.swiper-pagination",
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          prevEl: ".reviews-section__slide .forSwiper .main__btn-prev",
          nextEl: ".reviews-section__slide .forSwiper .main__btn-next",
        },
      });
    });
})();

// Swiper stock
(function swiperFloor() {
  document
    .querySelectorAll(".stock-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        modules: [Pagination],
        slidesPerView: 1,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        // Pagination
        pagination: {
          el: ".stock-section__pagination.swiper-pagination",
          clickable: true,
        },
      });
    });
})();

// Swiper insurance
(function swiperInsuranse() {
  document
    .querySelectorAll(".insurance-companies-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
        // Navigation arrows
        navigation: {
          prevEl:
            ".insurance-companies-section__swiper .forSwiper .main__btn-prev",
          nextEl:
            ".insurance-companies-section__swiper .forSwiper .main__btn-next",
        },
      });
    });
})();

// Swiper insurance
(function swiperMasseur() {
  document
    .querySelectorAll(".spa-masseur-section__swiper.swiper")
    .forEach(function (el, index) {
      const swiper = new Swiper(el, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        // Pagination
        pagination: {
          el: ".spa-masseur-section__swiper__pagination.swiper-pagination",
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          prevEl: ".spa-masseur-section__swiper .forSwiper .main__btn-prev",
          nextEl: ".spa-masseur-section__swiper .forSwiper .main__btn-next",
        },
      });
    });
})();

(function ParticlesJS() {
  const elements = document.querySelectorAll("div[id^='particles-js']");

  elements.forEach((element) => {
    particlesJS(element.getAttribute("id"), {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#5BA0FE",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#5BA0FE",
          },
          polygon: {
            nb_sides: 1,
          },
          image: {
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 5,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#5BA0FE",
          opacity: 2,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 1000,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  });
})();
