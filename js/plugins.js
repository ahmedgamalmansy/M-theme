$(document).ready(function()
{
	$(".preloader").css("display","none");
    $("html").niceScroll({
        cursorborder: '.5px solid #eee',
        cursorspeed: '80',
        mousescrollstep: '60'
    });

    $("#scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#scroll-section").offset().top,
        }, 1000);
    });
    
    $("#pages").click(function() {
        $('html, body').animate({
            scrollTop: $("#pages-section").offset().top,
        }, 4000);
    });
    
    $("#features").click(function() {
        $('html, body').animate({
            scrollTop: $("#features-section").offset().top,
        }, 5000);
    });
    
    $("#Tutorials").click(function() {
        $('html, body').animate({
            scrollTop: $("#Tutorials-section").offset().top,
        }, 4000);
    });
    
    $("#Extensions").click(function() {
        $('html, body').animate({
            scrollTop: $("#Extensions-section").offset().top,
        }, 4000);
    });
    
    $("#Contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top,
        }, 1500);
    });
    
});