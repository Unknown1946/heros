$(document).ready(function() {    
    $("body").css("opacity", "1");
  });

$('#Description').click(function() {  
        $('#Description').fadeOut('fast')
$('#Characteristics').fadeOut('fast')
$('#Poddershka').fadeOut('fast')
$('#bubu').fadeOut('fast')  
$('#start').fadeOut('fast') 
        $('.content').fadeOut('fast')
        setTimeout(function() {
            $('#Des').fadeIn('slow')
        }, 500)
    })
$('#Characteristics').click(function() {     
        $('.content').fadeOut('fast')
        $('#Description').fadeOut('fast')
$('#Characteristics').fadeOut('fast')
$('#Poddershka').fadeOut('fast')
$('#bubu').fadeOut('fast')
$('#start').fadeOut('fast')
        setTimeout(function() {
            $('#Char').fadeIn('slow')
        }, 500)
    })

$('#Poddershka').click(function() {     
        $('.content').fadeOut('fast')
        $('#Description').fadeOut('fast')
$('#Characteristics').fadeOut('fast')
$('#Poddershka').fadeOut('fast')
$('#bubu').fadeOut('fast')
$('#start').fadeOut('fast')
        setTimeout(function() {
            $('#poddershka').fadeIn('slow')
        }, 500)
    })



$('.banner__button').click(function(){
  $('#black_background').fadeIn('fast')

  setTimeout(function() {
    $('.page__modal').fadeIn()
  }, 520)   

})
$('.modal__close').click(function() {
  $('.page__modal').fadeOut()
  $('#black_background').fadeOut()
})
$(document).keyup(function(e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    $('.page__modal').fadeOut()
    $('#black_background').fadeOut()
  }
});
$('#tp').click(function(){
    $('#Description').fadeIn('slow')
    setTimeout(function() {
            $('#Characteristics').fadeIn('slow')
        }, 200)
    setTimeout(function() {
            $('#Poddershka').fadeIn('slow')
        }, 400)
    setTimeout(function() {
            $('#bubu').fadeIn('slow')
        }, 600)
})
