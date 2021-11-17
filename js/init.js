$(document).ready(function(){
    if (matchMedia("screen and (max-width: 600px)").matches) {
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 64) {
                $('header').addClass('scroll');
            }
            else {
                $('header').removeClass('scroll');
            }
            //
            if ($(window).scrollTop() >= 1360) {
                $('#nav').addClass('sticky');
            }
            else {
                $('#nav').removeClass('sticky');
            }
        });
    } else {
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 96) {
                $('header').addClass('scroll');
            }
            else {
                $('header').removeClass('scroll');
            }
            //
            if ($(window).scrollTop() >= 980) {
                $('#nav').addClass('sticky');
            }
            else {
                $('#nav').removeClass('sticky');
            }
        });
    }
});

$('.top_slide').slick({
    infinite: true,
    dots: true,
    fade: true,
    autoplay: true
});

$('.about_slide').slick({
    infinite: true,
    dots: true,
    adaptiveHeight: true
});

$(".tab_con").hide();
$(".tab_con:first").show();

$(".tabs li").click(function(){
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_con").hide()
    var activeTab = $(this).attr("data-tab");
    $("#" + activeTab).fadeIn()
});

$(".collapsible_head").click(function () {
    $collapsible_head = $(this);
    $collapsible_body = $collapsible_head.next();
    $collapsible_body.slideToggle(400, function () {
        $collapsible_body.css("border-top","1px solid #E2E2E2");
    });
});

$('[open-modal]').on('click', function(){
    var id = $(this).attr('open-modal');
    $('.modal#'+id).addClass('active');
});

$('[close-modal]').on('click', function(){
    $(this).parents('.modal').removeClass('active');
});

$('.modal').on('click', function(e) {
    if(e.target !== this){return};
    $(this).removeClass('active');
});
