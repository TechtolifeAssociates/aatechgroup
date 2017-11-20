// scrolling
$(document).ready(function() {
  $('#demo2').scrollbox({
    linear: true,
    step: 1,
    delay: 0,
    speed: 50
  });
});  
  
$('li a').on('click', function (e) {
    console.log('clicked .... ');
    var targetSec = $(this).text();
    $('html, body').animate({
        scrollTop: $('#' + targetSec).offset().top
    }, 2000);
});