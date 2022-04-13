$(window).scroll(function(){
    if( $(this).scrollTop() > 100 ){
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
$(document).ready(function(){
    if(screen.width < 767){
        $('.bar .fa-bars').click(function(){
            $('header nav').toggle();
            $('.fa-xmark').show();
            $(this).hide();
        });
        $('.fa-xmark').click(function(){
            $('header nav').toggle();
            $('.fa-bars').show();
            $(this).hide();
        });
    }
});