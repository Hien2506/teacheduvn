$(document).ready(function () {
    $('.header-icon.icon-toggle').click(function () {
        $('.nav.nav-mobile').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });
    $('.close-menu').click(function () {
        $('.nav.nav-mobile').removeClass('show');
        $('body').removeClass('no-scroll');
    });


    //slider trang chủ
    $('.box-banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '#prev-banner',
        nextArrow: '#next-banner',
    });
    //slider quote
    $('.slider-quote').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '#btn-right',
        nextArrow: '#btn-prev',
    });
    //slider-book
    $('.slider-book').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.icon-show').click(function (e) {
        e.preventDefault();
        $(this).siblings('.sub-menu').slideToggle(400);
        $(this).toggleClass('open');
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            $('.header-main').addClass('header-fixed');
        } else {
            $('.header-main').removeClass('header-fixed');
        }
    });
});
