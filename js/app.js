$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: ".prev_btn",
    nextArrow: ".next_btn",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.buddy_banner').slick({
  centerMode: true,
  autoplay:true,
  slidesToShow: 3,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    $(".nav_trigger").click(function () {
      $(".site_content_wrapper").toggleClass("scaled");
    });
});
