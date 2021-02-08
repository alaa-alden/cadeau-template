$(".brand-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class="left-arrow-client" aria-hidden="true"></i>',
    '<i class="right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 5,
    },
  },
});

$(".cat-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class=" left-arrow-client" aria-hidden="true"></i>',
    '<i class=" right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 5,
    },

    1366: {
      items: 9,
    },
  },
});
$(".wrap-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 30,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class=" left-arrow-client" aria-hidden="true"></i>',
    '<i class="right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3,
    },

    1366: {
      items: 4,
    },
  },
});
$(".coupon-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  navText: [
    '<i class="left-arrow-client" aria-hidden="true"></i>',
    '<i class="right-arrow-client" aria-hidden="true"></i>',
  ],
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 4,
    },

    1366: {
      items: 5,
    },
  },
});

jQuery(document).on(
  "ready",
  (function ($) {
    "use strict";

    $("body").scrollspy({
      target: ".bs-example-js-navbar-scrollspy",
      offset: 50,
    });

    $("#mainmenu-area").sticky({
      topSpacing: 0,
    });
  })(jQuery)
);

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
    return false;
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
  $(".with-caption").magnificPopup({
    type: "image",
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",

    image: {
      verticalFit: true,
      titleSrc: function (item) {
        var caption = item.el.attr("title");

        return caption;
      },
    },

    gallery: {
      enabled: true,
    },
  });