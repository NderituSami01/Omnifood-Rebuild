// Change the toggler button
$(document).ready(function () {
   $('.nav-button').click(function () {
      $('.nav-button').toggleClass('change');
   });
   // Modify the Size of the Navbar on scroll
   $(window).scroll(function () {
      let position = $(this).scrollTop();
      //  console.log(position);
      if (position >= 90) {
         $('.nav-menu').addClass('custom-navbar');
      } else {
         $('.nav-menu').removeClass('custom-navbar');
      }
   });

   //  Configure Carousel Slider
   $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
   });

   // Animate the Pricing Cards
   $(window).scroll(function () {
      let position = $(this).scrollTop();
      // console.log(position);
      if (position >= 3500) {
         $('.card-1').addClass('moveFromLeft');
         $('.card-2').addClass('moveFromBottom');
         $('.card-3').addClass('moveFromRight');
      } else {
         $('.card-1').removeClass('moveFromLeft');
         $('.card-2').removeClass('moveFromBottom');
         $('.card-3').removeClass('moveFromRight');
      }
   });

   // Initialize Scroll Spy
   $('body').scrollspy({
      target: '#main-nav'
   })

   // Smooth Scrolling
   $("#main-nav a").on('click', function (event) {
      if (this.hash !== "") {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate({
               scrollTop: $(hash).offset().top,
            },
            800,
            function () {
               window.location.hash = hash;
            });
      }
   });

   // Scroll on buttons
   $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({
            scrollTop: $('.sign').offset().top,
         },
         1000);
   });

   $('.js--scroll-to-features').click(function () {
      $('html, body').animate({
            scrollTop: $('.features').offset().top,
         },
         1000);
   });

   // Applying Animate.css on various parts
   $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animated fadeInUp');
   }, {
      offset: '70%'
   });

   $('.js--wp-2').waypoint(function (direction) {
      $('.js--wp-2').addClass('animated fadeInLeft');
   }, {
      offset: '70%'
   });

   $('.js--wp-3').waypoint(function (direction) {
      $('.js--wp-3').addClass('animated fadeInDown');
   }, {
      offset: '70%'
   });

   // $('.js--wp-4').waypoint(function (direction) {
   //    $('.js--wp-4').addClass('animated heartBeat');
   // }, {
   //    offset: '70%'
   // });
});

// **************Waypoints****************
// var waypoint = new Waypoint({
//    element: document.getElementById('element-waypoint'),
//    handler: function (direction) {
//       notify(this.element.id + ' triggers at ' + this.triggerPoint)
//    },
//    offset: '75%'
// })
