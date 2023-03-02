$(function () {
  function fn1(conN, btnN, bg) {
    $(`.ex1 .cont${conN} div:nth-of-type(${btnN})`).css({ 'background': bg })
    $(`.ex1 .cont${conN} div`).not($(`div:nth-of-type(${btnN})`)).css({ 'background': 'none' })
  }//fn1

  $(`.ex1 .cont1 button`).click(function () {
    var btnN = $(this).text() //클릭한 버튼의 텍스트 내용
    var bg = $(`.ex1 .cont1 div:nth-of-type(${btnN})`).attr('data-bg') //클릭한 버튼에 해당하는 박스의 data-bg속성 값, red, blue, yellow
    fn1(1, btnN, bg)
  })//click

  $(`.ex1 .cont2 button`).click(function () {
    var btnN = $(this).val() //클릭한 버튼의 밸류값
    var bg = $(`.ex1 .cont2 div:nth-of-type(${btnN})`).text() //클릭한 버튼의 텍스트 내용
    fn1(2, btnN, bg)
  })//click
  /////////////////////////////////////////////////ex1//////////////////////////////////////////////
  function fn2(contN, el) {
    $(`.ex2 .cont${contN} div`).css({ 'background': 'none' })
    el.css({ 'background': 'red' })
  }//fn2 

  $(`.ex2 .cont1 button`).click(function () {
    fn2(1, $(this).next())
    //$(`.ex2 .cont1 div`).not($(this).next()).css({'background':'none'})
  })//click

  $(`.ex2 .cont2 button`).click(function () {
    fn2(2, $(this).prev())
  })//click
  /////////////////////////////////////////////////ex2//////////////////////////////////////////////
  function fn3(contN, el) {
    //el.prevAll('div').removeClass('t')
    //el.nextAll('div').removeClass('t')
    $(`.ex3 .cont${contN} div`).not(el).removeClass('t')
    el.toggleClass('t')
  }

  $(`.ex3 .cont1 div`).click(function () {
    fn3(1, $(this))
  })//click

  $(`.ex3 .cont2 div`).click(function () {
    fn3(2, $(this))
  })//click
  /////////////////////////////////////////////////ex3//////////////////////////////////////////////
  function fn4(contN, el1, el2) {
    $(`.ex4 .cont${contN} div`).not(el1).removeClass('t')
    el1.addClass('t')
    el2.addClass('t')
  }//fn4

  $(`.ex4 .cont1 div`).click(function () {
    fn4(1, $(this), $(this).prevAll('div'))
  })//click

  $(`.ex4 .cont2 div`).click(function () {
    fn4(2, $(this), $(this).nextAll('div'))
  })//click
  /////////////////////////////////////////////////ex4//////////////////////////////////////////////
})//ready