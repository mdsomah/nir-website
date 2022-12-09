!(function ($) {
  ("use strict");
  //Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#nav").addClass("nav-scrolled");
      $("#header").addClass("header-scrolled");
      $(".nav-nir-logo").css({
        display: "block",
        position: "relative",
        bottom: "25px",
      });
    } else {
      $("#nav").removeClass("nav-scrolled");
      $("#header").removeClass("header-scrolled");
      $(".nav-nir-logo").css({
        display: "none",
      });
    }
  });

  // if ($(window).scrollTop() > 100) {
  //   $("#nav").addClass("nav-scrolled");
  //   $("#header").addClass("header-scrolled");
  // }

  // Splide JS Initailizer
  // Splide 1 Hero Section
  new Splide("#splide1", {
    type: "slide",
    perPage: 1,
    rewind: true,
    autoplay: true,
    interval: 5000,
  }).mount();

  // Splide 2 Social Proves Section
  new Splide("#splide2", {
    type: "loop",
    drag: "free",
    snap: true,
    focus: "center",
    perPage: 4,
    autoScroll: {
      speed: 2,
      autoStart: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      interval: 5000,
      rewind: true,
    },
  }).mount(window.splide.Extensions);

  // Bootstrap DateTime Picker Initializer

  // Tippy.JS Tooltip Initializer
  tippy("[data-tippy-content]", {
    animation: "scale",
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });

  // Initiate the venobox plugin
  // $(document).ready(function () {
  //   $(".venobox").venobox();
  // });

  // CounterUp
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  // Initiate the venobox plugin
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Scroll To Top
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".dmtop").css({
        bottom: "90px",
      });
    } else {
      jQuery(".dmtop").css({
        bottom: "-100px",
      });
    }
  });
  // End of Scroll To Top
})(jQuery);
