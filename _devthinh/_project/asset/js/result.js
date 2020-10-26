function tab() {
  $('.itTarget').hide();
  $('.itTarget:first').show();
  $('.bOption .item:first').addClass('active');
  $('.bOption .item').click(function(){
      var id_content = $(this).find('a').attr("href");
      $('.itTarget').hide();
      $(id_content).show();
      $('.bOption .item').removeClass('active');
      $(this).addClass('active');
      return false;
  });
}
$(document).ready(function() {
  tab();
});

window.addEventListener('DOMContentLoaded', function () {
  $(window).on('load resize', function () {
    let heightHeader;
    let wWindow = $(window).width();
    if (wWindow > 768) {
      heightHeader = $('.top-level').outerHeight();
    } else if (wWindow <= 768) {
      heightHeader = $('.header.top').outerHeight();
    }
  });

  tab();
})