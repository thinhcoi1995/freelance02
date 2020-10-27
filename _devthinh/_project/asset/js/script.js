var scrollFixed = function () {
  function scrollFixed() {
    var s = this;
    this._target = document.getElementById('header');
    this._mobile = document.getElementById('bHeader__bottom');
    // this._btnFixed = document.querySelector('.btnFixed');
    // this._hand = function(top) {
    //   if (top > 0) {
    //     s._btnFixed.classList.add('show');
    //   } else {
    //     s._btnFixed.classList.remove('show');
    //   }
    // }
    // this.handling = function () {
    //   var _top = document.documentElement.scrollTop || document.body.scrollTop;
    //   var _left = document.documentElement.scrollLeft || document.body.scrollLeft;
    //   if (window.innerWidth < 769) {
    //     s._hand(_top);
    //   } else {
    //     s._hand(_top);
    //   }
    // };
    window.addEventListener('scroll', s.handling, false);
    window.addEventListener('resize', s.handling, false);
    window.addEventListener('load', s.handling, false);
  }
  return scrollFixed;
}();

window.addEventListener('DOMContentLoaded', function() {
  new scrollFixed();
  // var $slide = $(".slide")
  //   .slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   speed: 2000,
  //   arrows: false,
  //   autoplaySpeed: 4000,
  //   autoplay: true
  // })
  // .on({
  //   beforeChange: function(event, slick, currentSlide, nextSlide) {
  //     $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
  //     $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
  //   },
  //   afterChange: function() {
  //     $(".preve-slide", this).removeClass("preve-slide　slide-animation");
  //   }
  // });
  // $slide.find(".slick-slide").eq(0).addClass("slide-animation");

  $('.slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true
  })
});

window.addEventListener('DOMContentLoaded', function() {
		//ハンバーガーメニュー
		$("#menu_btn").click(function () {
			$(this).toggleClass("open");
			$("#g_nav").slideToggle(200);
			$("#over_ray").fadeToggle(200);
		});
		$("#over_ray").click(function () {
			$("#menu_btn").toggleClass("open");
			$("#g_nav").slideToggle(200);
			$("#over_ray").fadeToggle(200);
		});
		
});