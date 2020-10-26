window.addEventListener('DOMContentLoaded', function() {
  $('.sliderTc').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
})