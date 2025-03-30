
$(document).ready(function(){

    // Banner btn hover class adding 
    $('.bnr-con-logo-div').hover(
        function() {
            $('.bnr-con-logo').hide();
            $('.bnr-con-hamburger-div').css('display','flex');
            $('.bnr-con-logo-div').css('padding', '11px 11px');
        },
        function() { 
            $('.bnr-con-hamburger-div').hide();
            $('.bnr-con-logo-div').css('padding', '14px 40px');
            $('.bnr-con-logo').show();
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
    $('.unique-sec-learn-btn').hover(
        function() {
            $(".unique-sec-learn-btn").addClass('animate');
            setTimeout(function(){
                $('.learn-btn-dark-style').show();
            },100)
        },
        function() { 
            $(".unique-sec-learn-btn").removeClass('animate');
            setTimeout(function(){
                $('.learn-btn-dark-style').hide();
            },100)
        }
    );


    // who we are section hover class adding 
    $('.who-we-are-section-learn-btn').hover(
        function() {
            $(".who-we-are-section-learn-btn").addClass('animate');
            setTimeout(function(){
                $('.who-we-are-section-learn-btn-dark-style').show();
            },100)
        },
        function() { 
            $(".who-we-are-section-learn-btn").removeClass('animate');
            setTimeout(function(){
                $('.who-we-are-section-learn-btn-dark-style').hide();
            },100)
        }
    );

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
});
