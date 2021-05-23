jQuery(document).ready(function(){

    "use strict"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    });

//typing siction//
var typed = new Typed(".text", {
    strings: ["<strong>I Love</strong><strong class='typedcolor'> Coding.</strong>", "<strong>And TO</strong><strong class='typedcolor'> Share.</strong>"],
    typeSpeed :100,
    backSpeed: 60,
    loop: true
   });
//sticky nav styling//

$(window).on("scroll",function(){
    if ($(window).scrollTop()){
        $("nav").addClass('secondary');
    }
    else{
        $("nav").removeClass('secondary');
    }

});
$('.work-area').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    },
    // other options
  });

});
// team styling //
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        },
        1280:{
            items:3
        }
    }
})
//counter styling start //
$(document).ready(function(){
    $(".number").counterUp({
        
        time:1400
    });
});
