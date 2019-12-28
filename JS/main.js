$(function(){
    'use strict'

    //Trigger nice Scroll
    
    $('html').niceScroll({
        cursorcolor:'#f61',
        cursorwidth:10,
        cursorborder: '1px solid #f61'
    });

    //change hrader height 
    $('.header').height($(window).height());

    // Scroll To Features 
    $('.header .arrow i').click(function(){
        $('html,body').animate({
          scrollTop:$('.features').offset().top
        }, 1000);
    });
    //whow hidden item from work
    $('.Show-More').click(function(){
      $('.our-work .hidden').fadeIn(1000);
    });

    //check Testimo

    var leftArrow = $('.testim .fa-chevron-left'),
      rightArrow = $('.testim .fa-chevron-right');

    function checkClients(){
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

    $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
}
    checkClients(); 

    $('.testim i').click(function(){
        if ($(this).hasClass('fa-chevron-right')){
              $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
              
                checkClients(); 
            
            });

        }else{
            $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
        
            
       
            });
        }
    
    });

    

});