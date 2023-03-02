$(function () {
  function fn1(el) {
    var n = el.text()
    var bg = el.siblings(`.box${n}`).attr('data-bg')
    el.siblings(`div`).css({ 'background': 'none' })
    el.siblings(`.box${n}`).css({ 'background': bg })
  }

  $(`.ex1 button`).click(function () {
    fn1($(this))
  })//click

  $(`.ex2 div`).click(function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })

  $(`.ex3 button`).click(function () {
    $(this).siblings('button').css({ 'color': 'black' })
    $(this).css({ 'color': 'red' })
  })

  $(`.ex4 button`).click(function () {
    $(this).siblings(`.active`).removeClass('active')
    $(this).toggleClass('active')
  })

  $(`.ex5 button`).click(function () {
    $(`.ex5 button`).css({ 'color': 'black' })
    $(this).css({ 'color': 'red' })
  })

  $(`.ex6 button`).click(function () {
    $(`.ex6 button`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })

  $(`.ex7 button`).click(function () {
    $(`.ex7 .wrap${$(this).val()} button`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })

  $(`.ex8 button`).click(function () {
    $(this).parents('.wrap').find('button').not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })

  $(`.ex9 button`).click(function () {
    var n = $(this).text()
    $(`.ex9 div`).show()
    $(`.ex9 .box${n}`).hide()
  })

  $(`.ex10 button`).click(function () {
    var n = $(this).text()
    $(`.ex10 div`).hide()
    $(`.ex10 .box${n}`).show()
  })

  $(`.ex11 button`).click(function () {
    var n = $(this).text()
    $(`.ex11 div`).not($(`.box${n}`)).hide()
    $(`.ex11 .box${n}`).toggle()
  })

  $(`.ex12 button`).click(function () {
    var n = $(this).text()
    /*  
    $(`.ex12 div`).not(`.box${n}`).removeClass(`active1 active2 active3`)
    $(`.ex12 .box${n}`).toggleClass(`active${n}`) 
    */
    $(`.ex12 div`).not(`div:nth-of-type(${n})`).removeClass()
    $(`.ex12 div:nth-of-type(${n})`).toggleClass(`active${n}`)
  })

  $(`.ex13 button`).click(function () {
    var n = $(this).text()
    /* 
    $(`.ex13 div`).not(`.box${n}`).removeClass(`active`)
    $(`.ex13 .box${n}`).toggleClass(`active`) 
    */
    $(`.ex13 div`).not(`.ex13 div:nth-of-type(${n})`).removeClass(`active`)
    $(`.ex13 div:nth-of-type(${n})`).toggleClass(`active`) 
  })



})
/* 
prev(), next(), prevAll(), nextAll(), parent(), siblings(), children(), parents(), find()

css
addClass(), removeClass(), toggleClass()

not(), hide(), show()

*/