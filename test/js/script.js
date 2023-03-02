$(function(){
  $(`.ex1 button`).click(function(){
    $(this).siblings('.output').text($(this).text())
  })

  $(`.ex2 button`).click(function(){
    $(this).siblings('.output').text($(this).val())
  })

  $(`.ex3 div`).click(function(){
    $(this).siblings('.output').text($(this).attr('data-bg'))
  })
  
  $(`.ex4 div`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).css({'background':'red'})
  })

  $(`.ex5 div`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).css({'background':$(this).attr('data-bg')})
  })

  $(`.ex6 button`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).siblings(`.box${$(this).val()}`).css({'background':'red'})
  })

  $(`.ex7 button`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).siblings(`.box${$(this).attr('data-n')}`).css({'background':$(this).val()})
  })

  $(`.ex8 button`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).siblings(`.box${$(this).val()}`).css({'background':$(this).siblings(`.box${$(this).val()}`).attr('data-bg')})
  })


})//ready