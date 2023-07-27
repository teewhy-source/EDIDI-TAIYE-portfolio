(function ($) {

  "use strict";
const typ = document.getElementById("typ")
let teewhy= document.getElementById("teewhy")
let ttt=document.getElementById("ttt")
let tw=document.getElementById("tw")
let hnd=document.getElementById("hnd")
    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        typ.style.color="white"
teewhy.style.color="rgb(148, 228, 28)"
ttt.style.color="rgb(148, 228, 28)"
tw.style.color="rgb(148, 228, 28)"
hnd.style.color="rgb(148, 228, 28)"
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
