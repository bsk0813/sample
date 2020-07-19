$(function(){
  // $('header,.top').hide().fadeIn(1500);
  $('body').hide().fadeIn(1500);






  $(window).scroll(function (){
        $('.fadein,.bun').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

















});
