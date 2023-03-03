$(function(){
  $(`.ex1 button`).click(function(){
    $(`.ex1 .box`).hide()
    $(`.ex1 .box${$(this).text()}`).show() //css({'display':'block'})
  })//click
  
  $(`.ex2 button`).click(function(){
    $(`.ex2 .box`).not(`.box${$(this).text()}`).hide()
    $(`.ex2 .box${$(this).text()}`).toggle() //show, hide, toggle
  })//click

  $(`.ex3 .box`).click(function(){
    $(`.ex3 .box div`).stop().slideUp()
    $(this).children('div').stop().slideToggle() //sildeUp, sildeDown, sildeToggle
  })

  $(`.ex4 .box`).click(function(){
    $(`.ex4 .box div`).stop().fadeOut()
    $(this).children('div').stop().fadeToggle() //fadeIn, fadeOut, fadeToggle
  })

  $(`.tab button`).click(function(){
    var pane_num = $(this).val()
    $(`.tab button`).removeClass('active')
    $(this).addClass('active')
    $(`.tab .pane`).hide()
    $(`.tab .pane${pane_num}`).show()
  })

  $(`.menu>ul>li>a`).click(function(e){
    e.preventDefault()
    
    $(`.menu>ul>li>ul`).stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()

    $(`.menu>ul>li>a`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
})//ready