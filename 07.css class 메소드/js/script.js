$(document).ready(function () {
  $('.ex1 button').click(function () {
    $('.ex1 button').css({ 'color': 'red' })
  })//click

  $('.ex2 button').click(function () {
    $('.ex2 .box').css({
      'width': '100px',
      'height': '100px',
      'background': 'red',
      'border-radius': '50%',
      'text-align': 'center',
      'line-height': '100px',
      'color': 'white'
    })
  })//click

  $('.ex3 .btn1').click(function(){
    $('.ex3 .box').addClass('tt')
  })//click

  $('.ex3 .btn2').click(function(){
    $('.ex3 .box').removeClass('tt')
  })//click

  $('.ex3 .btn3').click(function(){
    $('.ex3 .box').toggleClass('tt')
  })//click

  $('.ex4 .btn1').click(function(){
    $('.ex4 div').css({'display':'block'})
  })//click

  $('.ex4 .btn2').click(function(){
    $('.ex4 div').css({'display':'inline-block'})
  })//click

  $('.ex5 button').click(function(){
    $('.ex5').toggleClass('t1')
  })
})//ready