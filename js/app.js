$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let a = document.querySelector('.nn');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

a.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

});

/*Scroll to top when arrow up clicked BEGIN*/
// $(window).scroll(function() {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//       $('#back2Top').fadeIn();
//   } else {
//       $('#back2Top').fadeOut();
//   }
// });
// $(document).ready(function() {
//   $("#back2Top").click(function(event) {
//       event.preventDefault();
//       $("html, body").animate({ scrollTop: 0 }, "slow");
//       return false;
//   });

// });
/*Scroll to top when arrow up clicked END*/