$(function(){
  smoothScroll(500);
  workBelt();
});

function workBelt(){
    $('.thumb-unit').on('click',function(){
      $('.work-belt').css('left','-100%');
      $('.work-container').show();
    });
    $('.work-return').on('click',function(){
      $('.work-belt').css('left','0%');
      $('.work-container').hide(800);
    });
}

function smoothScroll (duration) {
  var target;
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    },duration);
  });
}
