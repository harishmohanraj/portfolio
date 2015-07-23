$(function(){
  smoothScroll(500);
  workBelt();
  workLoad();

  $("header h1").fitText(1.2, { minFontSize: '14px', maxFontSize: '80px' });

  $(window).scroll(function(){
      var fromTop = $(window).scrollTop();
      $('header .zoom > div').css({
        top: '-'+fromTop+'px',
        left: '-'+fromTop+'px',
        right: '-'+fromTop+'px'
      });
      console.log(fromTop);
  });


});



function workLoad(){
    //Instructing the broser for cache settings and cache it
    $.ajaxSetup({cache: false});
    $('.thumb-unit').on('click',function(){
      var $this = $(this),
          newTitle = $this.find('strong:first-of-type').text(),
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

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
