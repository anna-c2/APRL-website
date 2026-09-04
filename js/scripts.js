/*-----------------------------------------------------------------------------------

    Theme Name: Hiluxx - One Page Parallax Multipurpose Template
    Description: One Page Parallax Multipurpose Template
    Author: chitrakootweb
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Add Class Reveal for Scroll to Top
        04. ScrollUp Active Code
        05. Sidemenu toggle
        06. navbar scrolling background
        07. progress bar
        08. sections background image from data background
        09. owl-carousel
        10. magnificPopup
        11. ourstoryPopup
        12. countUp
        13. window When Loading
        14. FullScreenHeight Resize function
        15. Slider
        16. Contact form
        17. CountDown for coming soon page
        18. Gradient layout

        
    ---------------------------------- */    

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(function() {

    "use strict";

    var wind = $(window);

    // Preloader
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });


    // Add Class Reveal for Scroll to Top
    wind.on('scroll', function() {
        if (wind.width() > 600) {
            if (wind.scrollTop() > 600) {
                $('#back-to-top').addClass('reveal');
            } else {
                $('#back-to-top').removeClass('reveal');
            }
        }
    });

    // ScrollUp Active Code
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

   // Sidemenu toggle
    if ($("#sidebar_toggle").length) {
       $("body").addClass("sidebar-menu");
       $("#sidebar_toggle").on("click", function () {
          $(".sidebar-menu").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
       }), $("#close_sidebar").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
       }), $("#btn_sidebar_colse").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
       });
    }

    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            darkbg = $(".bg-black .logo> img"),
            lightbg = $(".bg-white .logo> img"),
            themebg = $(".bg-theme .logo> img"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
            darkbg.attr('src', 'img/logo-light.png');
            themebg.attr('src', 'img/logo-black.png');
            lightbg.attr('src', 'img/logo-dark.png');

        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            lightbg.attr('src', 'img/logo-dark.png');
            themebg.attr('src', 'img/logo-white.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });
    
     var windowsize = wind.width();
        if (windowsize <= 991) {
        $('.navbar-nav .nav-link').on("click", function(){
            $('.navbar-collapse.show').removeClass('show');
        });
      }
   
    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });

    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        autoplay:true,
        smartSpeed:500
    });

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:false,
        margin: 30,
        autoplay:false,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            700:{
                items:2,
                margin: 15
            },
            1000:{
                items:4
            }
        }
    });

    // Client owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop:true,
        margin: 15,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            700:{
                items:2,
                margin: 15
            },
            1000:{
                items:5
            }
        }
    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // ourstoryPopup
    $('.story-video').magnificPopup({
        delegate: '.video',
        type: 'iframe'
    });
 
    // countUp
    if ($(".numbers").length !== 0) {
        $('.numbers').appear(function() {
            $('.count').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    }

    // === window When Loading === //

    $(window).on("load",function (){

        var wind = $(window);

        // stellar
        wind.stellar();

        // isotope
        $('.gallery').isotope({
          // options
          itemSelector: '.items'
        });

        var $gallery = $('.gallery').isotope({
          // options
        });

        // filter items on button click
        $('.filtering').on( 'click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({ filter: filterValue });
        });
        $('.filtering').on( 'click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });

    // FullScreenHeight Resize function
    $(window).resize(function(event) {
        setTimeout(function() {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });

    // FullScreenHeight function
    function fullScreenHeight() {
        var element = $(".full-screen");
        var $minheight = $(window).height();
        element.css('min-height', $minheight);
    }

    // FullScreenHeight with resize function
    function SetResizeContent() {
        fullScreenHeight();
    }

    SetResizeContent();

    // Slider 
    $(document).ready(function() {

        var owl = $('.header .owl-carousel');

        // Slider owlCarousel
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

        // Slider owlCarousel
        $('.slider .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            mouseDrag: false,
            autoplay:true,
            smartSpeed:500
        });

        // Slider text animation
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('h3').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.btn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated fadeInUp');
        });

        // Contact form 
        var form = $('.contact-form');
        form.submit(function() {
            $.post(form.attr('action'), $('.contact-form').serialize(), function(data) {
                form.prev().text(data.message).fadeIn().delay(3000).fadeOut();
            }, 'json');
            return false;
        });

        // CountDown for coming soon page
            if ($(".countdown").length !== 0) {
                $(".countdown").countdown({
                    date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                    format: "on"
                });
            }
            
        // Gradient layout
        if ($("#canvas-basic").length !== 0) {
            var granimInstance = new Granim({
                element: '#canvas-basic',
                name: 'basic-gradient',
                direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
                opacity: [1, 1],
                isPausedWhenNotInView: true,
                states : {
                    "default-state": {
                        gradients: [
                            ['#ff9c00', '#d93b0a'],
                            ['#c20165', '#4c0c82'],
                            ['#061766', '#007f33']
                        ]
                    }
                }
            });
        }
    });

});
