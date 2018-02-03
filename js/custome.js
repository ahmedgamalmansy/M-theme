$(window).load(function(){
   /*============================*/
        //preloader
    /*============================*/
    $(".preloader").fadeOut(100,function(){
        $("body").css({
            overflow: 'auto'
        });
        $(this).remove();
    }); 
});

$(document).ready(function(){
    /*============================*/
        //nicescroll
    /*============================*/
    $("html").niceScroll({
        cursorborder: '1px solid #eee',
        cursorspeed: '80',
        mousescrollstep: '40'
    });
    
    /*============================*/
        //manage option box
    /*============================*/
    var colorLink = $('.options ul li');
    colorLink
        .eq(0).css('backgroundColor','#00a8e8').end()
        .eq(1).css('backgroundColor','#e74c3c').end()
        .eq(2).css('backgroundColor','#16a085').end()
        .eq(3).css('backgroundColor','#f0ad4e');
    
    colorLink.click(function(){
        
        console.log($(this).attr("data-value"));
        console.log($("link[href*='theme']"));
        
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    
    $('.option-button').click(function(){
        var box_left = $('#option-box').css("left");
        
        if (box_left == '-160px') {
            $('#option-box').animate({left:'0'});
        } else {
            $('#option-box').animate({left:'-160px'});
        }
        
    });
    /*============================*/
        //manage navigation
    /*============================*/
    var nav_height = $('nav').outerHeight();
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#services-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#services").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#about-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top,
        }, 1000);
        $(this).addClass("active");
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
    
    $("#portfolio-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#team-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#pricing-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#faq-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#faq").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#blog-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#blog").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    $("#contact-li").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top,
        }, 1000);
        $(this).addClass("active");
    });
    
    
    /*============================*/
        //navbar-fixed action
    /*============================*/
    $(window).on('scroll',function(){
        var cur_pos = $(this).scrollTop();
        if (cur_pos >10){
            $('nav').css({
                background: 'rgba(0 ,23 ,31 , 1)',
                position: 'fixed',
                width: '100%',
                paddingTop: '0px',
                paddingBottom: '0px',
                transition: 'all .3s linear',
            });
            $('.navbar-brand img').css({
                width: '85%'
            });
        } else {
            $('nav').css({
                background: 'transparent',
                position: 'absolute',
                width: '100%',
                paddingTop: '30px',
                paddingBottom: '30px',
                transition: 'all .3s linear'
            });
        }
        
    /****** manage scrollTop icon appearance ******/
        
        if (cur_pos >200){
            $('.scroll_up').fadeIn(500);
        } else{
            $('.scroll_up').fadeOut(500);
        }
    });
    
    /*====================================*/
        //counter active
    /*====================================*/
    jQuery(document).ready(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
    
    /*=====================================================*/
        //change classes for active and inactive filters
    /*=====================================================*/
    
    $('.filters li').click(function(){
        var ulist = $('.filters');
        ulist.find('li').removeClass('active');
        $(this).addClass('active');
    });
    
    /*=====================================================*/
        //اhandle the fancybox
    /*=====================================================*/
    $("[data-fancybox]").fancybox({
        loop : true,
        buttons : [
            'slideShow',
            'fullScreen',
            'thumbs',
            //'share',
            'download',
            'zoom',
            'close'
        ],
        transitionEffect : "slide",
        transitionDuration : 1000,
        animationEffect : "zoom-in-out"
    });
    
    /*===============================*/
        //start customizing progress bars
    /*===============================*/
    /*$(window).on('scroll',function(){
        var current_pos = $(this).scrollTop();
        var count_pos = $("#counters").offset().top;
        console.log(current_pos,count_pos);
        if (current_pos >= count_pos){
            
        }
    });*/
    $("#graphic").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        foregroundColor: "#000",
        backgroundColor: "#000",
        fillColor: 'none',
        percent: 93,
        iconColor: '#fff',
        icon: 'f1fc',//f108,f121,f3cd
        iconSize: '40',
        iconPosition: 'middle',
        start:0,
        showPercent:1,
        target:0,
        text : "GRAPHIC DESIGN",
        textColor: "#fff",
        textBelow: true,
        textStyle: "font-size:18px;font-weight:400;font-family:'Lato',sans-serif",
        foregroundColor: "#fff",
        fontColor: "#fff",
        targetColor: "#000",
        //animateInView: true
    });
    $("#web-design").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        foregroundColor: "#000",
        backgroundColor: "#000",
        fillColor: 'none',
        percent: 97,
        iconColor: '#fff',
        icon: 'f108',
        iconSize: '40',
        iconPosition: 'middle',
        start:0,
        showPercent:1,
        target:0,
        text : "WEB DESIGN",
        textColor: "#fff",
        textBelow: true,
        textStyle: "font-size:18px;font-weight:400;font-family:'Lato',sans-serif",
        foregroundColor: "#fff",
        fontColor: "#fff",
        targetColor: "#000",
        //animateInView: true
    });
    $("#web-develop").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        foregroundColor: "#000",
        backgroundColor: "#000",
        fillColor: 'none',
        percent: 86,
        iconColor: '#fff',
        icon: 'f121',
        iconSize: '40',
        iconPosition: 'middle',
        start:0,
        showPercent:1,
        target:0,
        text : "WEB DEVELOPMENT",
        textColor: "#fff",
        textBelow: true,
        textStyle: "font-size:18px;font-weight:400;font-family:'Lato',sans-serif",
        foregroundColor: "#fff",
        fontColor: "#fff",
        targetColor: "#000",
        //animateInView: true
    });
    $("#mobile").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 8,
        foregroundColor: "#fff",
        backgroundColor: "#000",
        fillColor: 'none',
        percent: 80,
        iconColor: '#fff',
        icon: 'f10b',
        iconSize: '40',
        iconPosition: 'middle',
        start:0,
        showPercent:1,
        target:0,
        text : "MOBILE DEVELOPMENT",
        textColor: "#fff",
        textBelow: true,
        textStyle: "font-size:18px;font-weight:400;font-family:'Lato',sans-serif",
        foregroundColor: "#fff",
        fontColor: "#fff",
        targetColor: "#000",
        //animateInView: true
    });
    
    /*===============================*/
        //initialze swipper
    /*===============================*/
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        speed: 400,
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 3000,
          },
        
      });
    
    var mySwiper1 = new Swiper ('.swiper-container-2', {
        slidesPerView: 6,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }
      });
    
    /*========================================*/
        //manage scroll top and counter 
    /*========================================*/
    
    $('.scroll_up').click(function(){
        $('html, body').animate({
            scrollTop: '0px',
        }, 1000);
    });
    
});