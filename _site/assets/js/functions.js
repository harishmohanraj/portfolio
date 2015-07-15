$(function(){
  smoothScroll(500);
});

function smoothScroll (duration) {
  var target;
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    },duration)
  })
}
