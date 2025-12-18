;(function( $ ){

/* Fixed header nav */
 document.addEventListener("DOMContentLoaded", function(){
   window.addEventListener('scroll', function() {
       var headerHeight = document.querySelector('.bottom-header').offsetHeight;
       if($(window).width() >= 992)
       {
         if ( window.scrollY > headerHeight ) {
           document.getElementById('masthead').classList.add('fixed-header');
         }else {
           document.getElementById('masthead').classList.remove('fixed-header');
         }
       } else {
         var bottomheaderHeight = document.querySelector('.bottom-header').offsetHeight;
         var mobileheaderHeight =  headerHeight + bottomheaderHeight;
         if ( window.scrollY > mobileheaderHeight ) {
           document.getElementById('masthead').classList.add('fixed-header');
         }else {
           document.getElementById('masthead').classList.remove('fixed-header');
         }
       }
   });
 }); 

/* Show or Hide Search field on clicking search icon */
$( document ).on( 'click', '.header-search-icon .search-icon', function(e){
	e.preventDefault();
	$( '.header-search-form' ).addClass( 'search-in' );
});

$( '.header-search-form, .search-close' ).on( 'click', function(e) {   
    e.preventDefault();
    if(!$(e.target).is( '.header-search-form input' )) {
        $( '.header-search-form' ).removeClass( 'search-in' );
    }
});

/* Mobile slick nav */
$('#navigation').slicknav({
  duration: 500,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: '.mobile-menu-container',
  allowParentLinks: true,
  nestedParentLinks : false,
  label: "Menu", 
  closeOnClick: true, // Close menu when a link is clicked.
});

/* Home client slider */
$('.client-slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 2,
  autoplay: true,
  responsive: [{
    breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }, {
    breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
  }]
});

/* Home testimonial slider */
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
});

$(document).ready(function(){
  /* Count down */
  loopcounter('time-counter');

  // Progress bar
  $(".example").progressBar({
    duration: 1000,
  });
  
});

/* Single gallery slider */
$('.gallery-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 2,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
  responsive: [{
    breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
  }]
});

/* Blog masonry */
function MasonryGrid (){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
  });
}

/* product detail slider */
 $('.product-thumbnails').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-thumb-nav'
});
$('.product-thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-thumbnails',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

$(window).scroll(function() {
  /* back to top */
  if ($(this).scrollTop() > 300) {
    $('#backTotop').fadeIn(200);
  } else {
    $('#backTotop').fadeOut(200);
  }
});
 /* back to top */
$("#backTotop").on( 'click', function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 1000);
});

/* preloader */
$( window ).on( "load", function() {
  $( '#siteLoader' ).fadeOut( 500 );
  /* Blog masonry */
  MasonryGrid ();
});

$(document).on( "resize", function(){
  MasonryGrid ();
});

// price handel
 $( "#slider-range" ).slider({
  range: "max",
  min: 0,
  max: 1000,
  value: 500,
  slide: function( event, ui ) {
    $( "#maxAmount" ).val( ui.value );
  }
});
$( "#maxAmount" ).val( $( "#slider-range" ).slider( "value" ) );

/* popup video */
$("#video-container, #video-container-two").modalVideo({
  youtube:{
    controls:0,
    nocookie: true
  }
});

/* counter up*/
$('.counter').counterUp();

// cart page input increasing order
$('.quantity').prop('disabled', true);
$(document).on('click','.plus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) + 1 );
});
$(document).on('click','.minus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) - 1 );
    if ($('.quantity').val() == 0) {
    $('.quantity').val(1);
  }
});

// Circle progress bar
function animateElements() {
  $('.circle-progressbar').each(function() {
    var elementPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    var percent = $(this).find('.circle-bar').attr('data-percent');
    var percentage = parseInt(percent, 10) / parseInt(100, 10);
    var animate = $(this).data('animate');
    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
      $(this).data('animate', true);
      $(this).find('.circle-bar').circleProgress({
        startAngle: -Math.PI / 2,
        value: percent / 100,
        thickness: 3,
        lineCap: 'round',
        size: 125.0,
        emptyFill: 'rgba(255, 255, 255, 0.5)',
        fill: {
          color: '#FFFFFF'
        }
      }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('.circle-number').text((stepValue * 100).toFixed() + "%");
      }).stop();
    }
  });
}
// Show animated elements
animateElements();
$(window).scroll(animateElements);


})( jQuery );

/*mainslider*/
jQuery("#mainslider").owlCarousel({
autoplay: true,
lazyLoad: false,nav:true,   animateOut: "fadeOut",
    animateIn: "fadeIn",
loop: true,dots: false,
margin:0,center: false, 
responsiveClass: true, 
autoHeight: true,
autoplayTimeout: 7000,  
navText : [" <i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i> "],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 1
},
1366: {
items: 1
}
}
}); 

/*review*/
jQuery("#reviews").owlCarousel({
autoplay: false,
lazyLoad: false,nav:true,   animateOut: "fadeOut",
    animateIn: "fadeIn",
loop: true,dots: false,
margin:0,center: false, 
responsiveClass: true, 
autoHeight: true,
autoplayTimeout: 7000,  
navText : [" <i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i> "],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1024: {
items: 2
},
1366: {
items: 2
}
}
}); 





// Small JS helpers to make the carousel robust and add pointer-based pause/resume
    (function(){
      const wrap = document.querySelector('.marquee-wrap');
      const track = document.getElementById('marqueeTrack');

      // If track's width isn't at least twice the container, duplicate items until it is.
      // This ensures a smooth seamless loop even with few logos.
      function ensureDuplicate(){
        const wrapW = wrap.clientWidth;
        let trackW = track.scrollWidth;
        // if track content is less than twice the container, duplicate the children
        let times = 0;
        while(trackW < wrapW * 2 && times < 5){
          track.innerHTML += track.innerHTML; // simple duplicate
          trackW = track.scrollWidth;
          times++;
        }
      }

      ensureDuplicate();

      // Pointer events: pause when hovering or touching
      function pause(){ track.style.animationPlayState = 'paused'; }
      function resume(){ track.style.animationPlayState = 'running'; }

      wrap.addEventListener('pointerenter', pause);
      wrap.addEventListener('pointerleave', resume);
      // support keyboard focus pause
      wrap.addEventListener('focusin', pause);
      wrap.addEventListener('focusout', resume);

      // Optional: make speed adjustable via wheel (Ctrl+wheel changes speed) - comment out if not desired
      wrap.addEventListener('wheel', (e)=>{
        if(e.ctrlKey) {
          e.preventDefault();
          const current = getComputedStyle(document.documentElement).getPropertyValue('--speed').trim();
          let sec = parseFloat(current.replace('s','')) || 18;
          sec = Math.max(6, Math.min(60, sec + (e.deltaY>0?2:-2)));
          document.documentElement.style.setProperty('--speed', sec + 's');
        }
      }, {passive:false});
    })();