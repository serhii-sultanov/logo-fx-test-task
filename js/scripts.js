// $(".carousel").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   variableWidth: true,
//   respondTo: "slider",
// });
// $(".carousel-team").slick({
//   dots: false,
//   arrows: false,
//   autoplay: true,
//   infinite: true,
//   speed: 1500,
//   fade: true,
//   cssEase: "linear",
// });
$(".carousel-achievements").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
