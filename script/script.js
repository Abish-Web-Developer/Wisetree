
$(document).ready(function(){

    // Navigation 
    $('.hamburger').click(function() {
        if ($('#check').prop('checked')) {
            $('.nav-list').addClass('nav-open').removeClass('nav-close');
        } else {
            $('.nav-list').removeClass('nav-open').addClass('nav-close');
        }
    });

    // Navigation click and scroll 
    $('.nav-list li').click(function(){
        // console.log("clicked");
        let scroll_id = $(this).attr('data-scroll');

        if ($('#' + scroll_id).length) {
            $('html, body').animate({
                scrollTop: $('#' + scroll_id).offset().top - 50
            }, 500);
            $('#check').prop('checked', false);
        } else {
            console.log("Target element not found");
        }
    });

    // Banner btn hover class adding 
    $('.bnr-con-logo-div').hover(
        function() {
            $(this).addClass('width-increase');
            $(this).removeClass('width-reduce');
            $('.bnr-con-logo').hide();
            $('.hamburger-icon').fadeIn(300);
            $('.contact-btn').fadeIn(300);
            $('.bnr-con-logo-div').css('padding', '11px 11px');
        },
        function() { 
            $(this).removeClass('width-increase');
            $(this).addClass('width-reduce');
            $('.hamburger-icon').fadeOut(300);
            $('.contact-btn').fadeOut(300);
            $('.bnr-con-logo-div').css('padding', '14px 40px');
            $('.bnr-con-logo').fadeIn();
            $(".hamburger-icon").removeClass('active');
        }
    );

    $('.contact-btn').click(function(){
        $(".hamburger-icon").addClass('active');
    });
    $('.hamburger-icon').click(function(){
        $(".hamburger-icon").removeClass('active');
    });


    // Unique section hover class adding 
    if ($(window).width() <= 767) {
        $(".unique-sec-learn-btn").addClass('animate');
        $('.learn-btn-dark-style').show();
    }else{
        $('.unique-sec-learn-btn').hover(
            function() {
                $(".unique-sec-learn-btn").addClass('animate');
                setTimeout(function(){
                    $('.learn-btn-dark-style').show();
                },200)
            },
            function() { 
                $(".unique-sec-learn-btn").removeClass('animate');
                setTimeout(function(){
                    $('.learn-btn-dark-style').hide();
                },200)
            }
        );
    }

    // Who we are section slider 

    // who we are section hover class adding 
    if ($(window).width() <= 767){
        $(".who-we-are-section-learn-btn").addClass('animate');
        $('.who-we-are-section-learn-btn-dark-style').show();
    }else{
        $('.who-we-are-section-learn-btn').hover(
            function() {
                $(".who-we-are-section-learn-btn").addClass('animate');
                setTimeout(function(){
                    $('.who-we-are-section-learn-btn-dark-style').show();
                },200)
            },
            function() { 
                $(".who-we-are-section-learn-btn").removeClass('animate');
                setTimeout(function(){
                    $('.who-we-are-section-learn-btn-dark-style').hide();
                },200)
            }
        );
    }

    // who we are section image slider
    $(".who-we-are-slider").slick({
        slidesToShow: 3,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 769, 
                settings: {
                    slidesToShow: 2,   
                    slidesToScroll: 1, 
                    infinite: true,         
                }
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1.2,   
                    slidesToScroll: 1, 
                    infinite: false,  
                    autoplay: true,       
                }
            },
        ]
    });
    $('.who-we-are-slider button').text("");


    // Services Section card click 
    $('.serv-card-main-div').click(function() {
        console.log("Clicked");

        let container = $('.services-card-section');
        let clickedElement = $(this);
        let scrollPosition = clickedElement.position().left + container.scrollLeft();

        // Adjust for the width of the clicked element
        let adjustedScrollPosition = scrollPosition - (container.width() - clickedElement.outerWidth()) / 2;

        container.animate({ scrollLeft: adjustedScrollPosition }, 500);

    
        if ($(this).hasClass("serv-card-active")) {
            $(this).removeClass("serv-card-active");
    
            $(this).find(".serv-bf-click").fadeIn(200);
            $(this).find(".serv-after-click").fadeOut(200);
    
            $(".serv-card-main-div").not(this).removeClass("serv-card-active");
            $(".serv-bf-click").fadeIn(200);
            $(".serv-after-click").fadeOut(200);
        } else {
            $(".serv-card-main-div").removeClass("serv-card-active");
            $(".serv-bf-click").fadeIn(200);
            $(".serv-after-click").fadeOut(200);
    
            $(this).addClass("serv-card-active");
    
            $(this).find(".serv-bf-click").fadeOut(200);
            $(this).find(".serv-after-click").fadeIn(200);
        }
    });
    
    
    // throughout flow section
    $(".through-blog-slider-div").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 767, 
                settings: {
                    autoplay: true,
                    fade: false,        
                }
            },
        ]
    });
    $('.through-blog-slider-div .slick-prev').text("");
    $('.through-blog-slider-div .slick-next').text("");


    // Footer Section connect btn hover 
    if ($(window).width() <= 767){
        $(".footer-sec-coonect-btn").addClass('animate');
        $('.footer-sec-coonect-btn-dark-style').show();
    }else{
        $('.footer-sec-coonect-btn').hover(
            function() {
                $(".footer-sec-coonect-btn").addClass('animate');
                setTimeout(function(){
                    $('.footer-sec-coonect-btn-dark-style').show();
                },200)
            },
            function() { 
                $(".footer-sec-coonect-btn").removeClass('animate');
                setTimeout(function(){
                    $('.footer-sec-coonect-btn-dark-style').hide();
                },200)
            }
        );
    }


    // Footer nav scroll
    $('.footer-nav-page-section p').click(function(){
        // console.log("clicked");
        let scroll_id = $(this).attr('data-scroll');

        if ($('#' + scroll_id).length) {
            $('html, body').animate({
                scrollTop: $('#' + scroll_id).offset().top - 50
            }, 500);
        } else {
            console.log("Target element not found");
        }
    });


    // Scroll to top 
    let scrollTrigger = 200; // Distance to trigger visibility (change if needed)

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollTrigger) {
            $(".scroll-top-top").fadeIn(); // Show button when scrolling down
        } else {
            $(".scroll-top-top").fadeOut(); // Hide button when scrolling up
        }
    });

    $(".scroll-top-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100); // Smooth scroll to top in 500ms
    });
    

});

// Who we are section bottom slider 
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".looking-at-slide");
    const nextBtn = document.querySelector(".looking-slider-next");
    const prevBtn = document.querySelector(".looking-slider-prev");

    let states = [];

    function updateStates() {
        if (window.innerWidth <= 320) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "131px", top: "9px", scale: 0.6, zIndex: 2 },
                { left: "73px", top: "55px", scale: 0.3, zIndex: 1 },
                { left: "27px", top: "71px", scale: 0.2, zIndex: 0 }
            ];
        } else if (window.innerWidth <= 400) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "172px", top: "13px", scale: 0.6, zIndex: 2 },
                { left: "92px", top: "63px", scale: 0.3, zIndex: 1 },
                { left: "35px", top: "82px", scale: 0.2, zIndex: 0 }
            ];
        } else if (window.innerWidth <= 560) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "209px", top: "13px", scale: 0.6, zIndex: 2 },
                { left: "112px", top: "71px", scale: 0.3, zIndex: 1 },
                { left: "41px", top: "92px", scale: 0.2, zIndex: 0 }
            ];
        } else if (window.innerWidth <= 740) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "289px", top: "27px", scale: 0.6, zIndex: 2 },
                { left: "144px", top: "115px", scale: 0.3, zIndex: 1 },
                { left: "47px", top: "137px", scale: 0.2, zIndex: 0 }
            ];
        } else if (window.innerWidth <= 900) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "388px", top: "37px", scale: 0.6, zIndex: 2 },
                { left: "199px", top: "159px", scale: 0.3, zIndex: 1 },
                { left: "56px", top: "189px", scale: 0.2, zIndex: 0 }
            ];
        } else if (window.innerWidth <= 1366) {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "466px", top: "37px", scale: 0.6, zIndex: 2 },
                { left: "233px", top: "192px", scale: 0.3, zIndex: 1 },
                { left: "61px", top: "230px", scale: 0.2, zIndex: 0 }
            ];
        } else {
            states = [
                { left: "0px", top: "0px", scale: 1, zIndex: 3 },
                { left: "714px", top: "42px", scale: 0.6, zIndex: 2 },
                { left: "390px", top: "267px", scale: 0.3, zIndex: 1 },
                { left: "121px", top: "317px", scale: 0.2, zIndex: 0 }
            ];
        }
        updateSlides();
    }

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (states[index]) {
                slide.style.left = states[index].left;
                slide.style.top = states[index].top;
                slide.style.transform = `scale(${states[index].scale})`;
                slide.style.zIndex = states[index].zIndex;
            }
        });

        slides.forEach(slide => slide.classList.remove("active-slide"));

        const activeIndex = states.findIndex(state => state.left === "0px" && state.top === "0px" && state.scale === 1 && state.zIndex === 3);
        if (activeIndex !== -1) {
            slides[activeIndex].classList.add("active-slide");
        }
    }

    nextBtn.addEventListener("click", function () {
        states.unshift(states.pop());
        updateSlides();
    });

    prevBtn.addEventListener("click", function () {
        states.push(states.shift());
        updateSlides();
    });

    let lastWidth = window.innerWidth;
    window.addEventListener("resize", function () {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            updateStates();
        }
    });

    updateStates();

    // Click event for auto scroll
    const Autobutton = document.getElementById("looking-slider-next");
    function triggerClick() {
        Autobutton.click();
    }
    setInterval(triggerClick, 2500);
});



