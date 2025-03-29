
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
});
