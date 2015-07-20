$(function(){
  smoothScroll(500);
  workBelt();
  workLoad();
});

function workLoad(){
    //Instructing the broser for cache settings and cache it
    $.ajaxSetup({cache: true});
    $('.thumb-unit').on('click',function(){
      var $this = $(this),
          newTitle = $this.find('strong').text(),
          newContent = $this.data('folder'),
          spinner = '<div class="loader">Loading...</div>',
          newHTML = '/work/'+newContent+'.html';
      $('.project-load').html(spinner).load(newHTML);
      $('.project-title').text(newTitle);
    });
}

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
