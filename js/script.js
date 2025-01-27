$(document).ready(function(){
    $("#baner_slider").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        margin:10,
        // mouseDrag:false,
        // startPosition:3,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

     // loader
     setTimeout(function(){
        $('.loader').fadeOut();
    },3000)

    //bottom to top
    $('.bottom_top').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        },1500);
        return false;
    });

    $("#slider2").owlCarousel({
        items:5,
        loop:true,
        nav:true,
        margin:0,
        // mouseDrag:false,
        startPosition:-1,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });


    $("#slider3").owlCarousel({
        items:3.5,
        loop:false,
        nav:false,
        margin:10,
        // mouseDrag:false,
        // startPosition:-1,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $("#slider4").owlCarousel({
        items:3.5,
        loop:false,
        nav:false,
        margin:10,
        // mouseDrag:false,
        // startPosition:-1,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $("#test_slider").owlCarousel({
        items:2,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        margin:0,
        dots: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
      
    });


    $("#seeds").owlCarousel({
        items:4,
        // loop:false,
        nav:false,
        margin:10,
        // mouseDrag:false,
        // startPosition:-1,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
   
})