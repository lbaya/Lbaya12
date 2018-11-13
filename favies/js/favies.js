$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    
    // run function on resize of the window
    $(window).resize(function() {
    
    });
 
    // run function on scroll
    $(window).scroll(function() {
       
    });
});

function demoFunction() {
    $('.mayinfo').click(function() {
        $('.mayinfo p').toggleClass('black');
        
    })
    $('.rollie').hover(function() {
        $(".rollie").toggleClass('goaway');
    })
   $('.may').hover(function() {
        $(".may").toggleClass('byechloe');
    })
   $('.chlo').dblclick(function() {
        $(".chlo").toggleClass('linesforchloe');
    })
}
function rolly() {
    $('Rolly').addClass('bigger')


}
function vPosH1() {
    var h1H = $('.header').height();
    var wH = $(window).height();
    var tP = ((wH - h1H) / 2);
    $('.header').css('padding-top', tP);
    console.log(h1H);
    console.log(wH);
    console.log(tP);
}