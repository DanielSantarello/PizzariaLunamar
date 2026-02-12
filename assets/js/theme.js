/*-----------------------------------------------------------------------------------
    
Template Name: Foodix - Fast Foods & Restaurants HTML Template
URI: site.com 
Description: Foodix is a versatile and innovative website template tailored for a wide range of food-related businesses including restaurants, cafes, pubs, fast food outlets, bistros, bakeries, and more. Whether you specialize in pizzas, burgers, coffees, or offer food booking services, Foodix is designed to meet your needs with its clean and creative layout.This is highly customizable and looks awesome on tablets and mobile devices. We have included best practices of web development and you can create a great website layout based on Bootstrap or Grid 1320px.
Author: Pixelfit
Author URI: https://themeforest.net/user/pixelfit
Version: 1.0 

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Nav Overlay
    ## Preloader
    ## Sticky
    ## Back to top
    ## Magnific-popup js
    ## Nice select
    ## Slick Slider
    ## Quantity Number js
    ## Parallax js
    ## Datepicker js
    ## WOW Js
    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        
        // Variables
        var var_window = $(window),
        navContainer = $('.header-navigation'),
        navbarToggler = $('.navbar-toggler'),
        navMenu = $('.foodix-nav-menu'),
        navMenuLi = $('.foodix-nav-menu ul li ul li'),
        closeIcon = $('.navbar-close');

        // navbar toggler

        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });

        // close icon

        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        // adds toggle button to li items that have children

        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });

        // expands the dropdown menu on each click

        navMenu.find(".dd-trigger").on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(!0, !0).slideToggle(350);
            $(this).toggleClass('sub-menu-open')
        });

        // check browser width in real-time

    };

    // Document Ready

    $(document).ready(function() {
        mainMenu();
    });


    // Offcanvas Overlay

    $(".cart-button").on("click", function() {
        $(".sidemenu-wrapper-cart").addClass("info-open");
    });
    $(".navbar-toggler, .offcanvas__overlay,.cart-button").on('click', function (e) {
        $(".offcanvas__overlay").toggleClass("overlay-open");
    });
    $(".offcanvas__overlay").on('click', function (e) {
        $(".navbar-toggler").removeClass("active");
        $(".foodix-nav-menu").removeClass("menu-on");
        $(".sidemenu-wrapper-cart").removeClass("info-open");
    }); 
    $(".sidemenu-cart-close").on("click", function() {
        $(".sidemenu-wrapper-cart").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });

    //===== Preloader
    
    $(window).on('load', function(event) {
        $('.fd-preloader').delay(400).fadeOut('400');
    })
    
    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    //===== Back to top

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Magnific-popup js
    
    if ($('.video-popup').length){
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if ($('.img-popup').length){
        $(".img-popup").magnificPopup({
            type: "image",
             gallery: { 
              enabled: true 
            }
        });
    }

    //===== Nice select js
    
    if ($('select').length){
        $('select').niceSelect();
    }
    
    //===== Slick slider js

    if ($('.menu-slider-one').length) {
        $('.menu-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.testimonial-slider-one').length) {
        $('.testimonial-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-two').length) {
        $('.testimonial-slider-two').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-three').length) {
        $('.testimonial-slider-three').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.special-off-slider').length) {
        $('.special-off-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i></span></div>',
            nextArrow: '<div class="next"><span><i class="far fa-arrow-right"></i></span></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider-one').length) {
        $('.gallery-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1   
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider-two').length) {
        $('.gallery-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1   
                    }
                }
            ]
        });
    }
    if ($('.instagram-slider-one').length) {
        $('.instagram-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                }
            ]
        });
    }
    if ($('.instagram-slider-two').length) {
        $('.instagram-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3    
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2   
                    }
                }
            ]
        });
    }
    //======= Quantity Number js
    
    $('.quantity-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
    });
    $('.quantity-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    //====== Parallax js

    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });


    //===== Datepicker
    $( function() {
        $( "#bookingDate" ).datepicker();
    } );


    //===== Simply Countdown

    if ($('.simply-countdown').length){
        simplyCountdown('.simply-countdown', {
            year: 2025,
            month: 12,
            day: 31,
            words: { //words displayed into the countdown
                days: { singular: 'day', plural: 'Days' },
                hours: { singular: 'hour', plural: 'Hours' },
                minutes: { singular: 'minute', plural: 'Min' },
                seconds: { singular: 'second', plural: 'Sec' }
            },
        });
    }

    //===== Wow js
    
    new WOW().init();
    
    //===== Category Carousel - Sistema de Rolagem Ultra Otimizado =====
    
    function initCategoryCarousel() {
        var $carousel = $('#categoryCarousel');
        var $prevBtn = $('.category-carousel-prev');
        var $nextBtn = $('.category-carousel-next');
        
        if (!$carousel.length || !$prevBtn.length || !$nextBtn.length) return;
        
        var carouselData = {
            scrollAmount: 340,
            isAnimating: false,
            touchStartX: 0,
            touchStartScroll: 0,
            isMobile: $(window).width() <= 768,
            scrollDuration: 450,
            maxVelocity: 0
        };
        
        // Easing function otimizado: spring-like behavior
        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }
        
        // Função de scroll ultra otimizada
        function smoothScroll(direction, customAmount) {
            if (carouselData.isAnimating) return;
            
            carouselData.isAnimating = true;
            var currentScroll = $carousel.scrollLeft();
            var scrollDistance = customAmount || carouselData.scrollAmount;
            var targetScroll = direction === 'next' 
                ? currentScroll + scrollDistance 
                : currentScroll - scrollDistance;
            
            // Limitar scroll aos limites do container
            var maxScroll = $carousel[0].scrollWidth - $carousel.width();
            targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
            
            var startScroll = currentScroll;
            var startTime = performance.now();
            
            function animate(currentTime) {
                var elapsed = currentTime - startTime;
                var progress = Math.min(elapsed / carouselData.scrollDuration, 1);
                var easeProgress = easeOutExpo(progress);
                
                var newScroll = startScroll + (targetScroll - startScroll) * easeProgress;
                $carousel.scrollLeft(newScroll);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    carouselData.isAnimating = false;
                    $carousel.scrollLeft(targetScroll); // Garantir posição exata no fim
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        // Event listeners otimizados para botões com debounce
        function handleButtonClick(direction) {
            return function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (!carouselData.isAnimating) {
                    smoothScroll(direction);
                }
            };
        }
        
        $prevBtn.on('click', handleButtonClick('prev'));
        $nextBtn.on('click', handleButtonClick('next'));
        
        // Adicionar feedback visual ao clicar
        $prevBtn.on('mousedown', function() {
            $(this).css('transform', 'translateY(-50%) scale(0.95)');
        });
        $prevBtn.on('mouseup mouseleave', function() {
            $(this).css('transform', 'translateY(-50%)');
        });
        
        $nextBtn.on('mousedown', function() {
            $(this).css('transform', 'translateY(-50%) scale(0.95)');
        });
        $nextBtn.on('mouseup mouseleave', function() {
            $(this).css('transform', 'translateY(-50%)');
        });
        
        // Suporte a touch/swipe com momentum
        var touchData = { startX: 0, endX: 0, startScroll: 0, velocity: 0 };
        var touchStartTime = 0;
        
        $carousel.on('touchstart', function(e) {
            touchStartTime = performance.now();
            touchData.startX = e.touches[0].clientX;
            touchData.startScroll = $carousel.scrollLeft();
            carouselData.maxVelocity = 0;
        });
        
        $carousel.on('touchmove', function(e) {
            if (carouselData.isAnimating) return;
            
            var currentX = e.touches[0].clientX;
            var diff = touchData.startX - currentX;
            var newScroll = touchData.startScroll + diff;
            
            $carousel.scrollLeft(newScroll);
            
            // Calcular velocidade para momentum
            var now = performance.now();
            var timeDiff = now - touchStartTime;
            if (timeDiff > 0) {
                carouselData.maxVelocity = Math.abs(diff) / timeDiff;
            }
        });
        
        $carousel.on('touchend', function(e) {
            touchData.endX = e.changedTouches[0].clientX;
            var swipeDiff = touchData.startX - touchData.endX;
            
            // Detectar swipe ou momentum
            if (Math.abs(swipeDiff) > 30 || carouselData.maxVelocity > 0.5) {
                if (swipeDiff > 0) {
                    smoothScroll('next');
                } else if (swipeDiff < 0) {
                    smoothScroll('prev');
                }
            }
        });
        
        // Keyboard navigation
        $(document).on('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                $prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                $nextBtn.click();
            }
        });
        
        // Responsividade dinâmica
        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                var newIsMobile = $(window).width() <= 768;
                if (newIsMobile !== carouselData.isMobile) {
                    carouselData.isMobile = newIsMobile;
                    carouselData.scrollAmount = newIsMobile ? 280 : 340;
                }
            }, 250);
        });
        
        // Otimizar scroll passivo para melhor performance
        if ($carousel[0].addEventListener) {
            $carousel[0].addEventListener('wheel', function(e) {
                // Permitir scroll natural
            }, { passive: true });
        }
    }
    
    // Inicializar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCategoryCarousel);
    } else {
        initCategoryCarousel();
    }

})(window.jQuery);