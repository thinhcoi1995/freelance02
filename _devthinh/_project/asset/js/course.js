
window.addEventListener('DOMContentLoaded', function () {
  $(window).on('load resize', function () {
    let heightHeader;
    let wWindow = $(window).width();
    if (wWindow > 768) {
      heightHeader = $('.top-level').outerHeight();
    } else if (wWindow <= 768) {
      heightHeader = $('.header.top').outerHeight();
    }
    $('.scroll[href^="#"]').click(function () {
      var speed = 800;
      var href = jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - heightHeader;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });

})