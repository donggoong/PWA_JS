$(function () {
  function fn1(컨테이너번호) {
    var 첫번째수 = parseInt($(`.ex1 .cont${컨테이너번호} .num1`).val())
    var 두번째수 = parseInt($(`.ex1 .cont${컨테이너번호} .num2`).val())
    var 결과 = 첫번째수 + 두번째수
    $(`.ex1 .cont${컨테이너번호} p`).text(결과)
  }//fn1

  $(`.ex1 button`).click(function () {
    fn1($(this).val())
  })//click
  /* ----------------------------------------ex1--------------------------------------- */
  function fn2(el) {
    var 컨테이너번호 = el.parent().attr('data-cont')
    var 상품가격 = parseInt($(`.ex2 .cont${컨테이너번호} input:checked`).val())
    var 상품갯수 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=number]`).val())
    var 총가격 = 상품가격 * 상품갯수
    $(`.ex2 .cont${컨테이너번호} p`).text(`${총가격} 원`)
  }//fn2

  $(`.ex2 input[type=radio]`).change(function () {
    fn2($(this))
  })//change 

  $(`.ex2 input[type=number]`).bind('input', function () {
    fn2($(this))
  })//bind 
  /* ----------------------------------------ex2--------------------------------------- */
  $(`.ex3 div`).click(function () {
    $(this).siblings('div').css({ 'background': 'none' })
    $(this).css({ 'background': 'red' })
  })
  /* ----------------------------------------ex3--------------------------------------- */
  $(`.ex4 button`).click(function () {
    $(`.ex4 .output`).text($(this).text())
  })
  /* ----------------------------------------ex4--------------------------------------- */
  $(`.ex5 button`).click(function () {
    $(`.ex5 .output`).text($(this).val())
  })
  /* ----------------------------------------ex5--------------------------------------- */
  $(`.ex6 div`).click(function () {
    $(`.ex6 .output`).text($(this).attr('data-bg'))
  })
  /* ----------------------------------------ex6--------------------------------------- */
  $(`.ex7 div`).click(function () {
    $(this).siblings('div').css({ 'background': 'none' })
    $(this).css({ 'background': 'red' })
  })
  /* ----------------------------------------ex7--------------------------------------- */
  $(`.ex8 div`).click(function () {
    var bg = $(this).attr('data-bg')
    $(this).siblings('div').css({ 'background': 'none' })
    $(this).css({ 'background': bg })
  })
  /* ----------------------------------------ex8--------------------------------------- */
  $(`.ex9 button`).click(function () {
    var box_num = $(this).val()
    $(`.ex9 div`).css({ 'background': 'none' })
    $(`.ex9 .box${box_num}`).css({ 'background': 'red' })
  })
  /* ----------------------------------------ex9--------------------------------------- */
  $(`.ex10 button`).click(function () {
    var box_num = $(this).attr('data-n')
    var bg = $(this).val()
    $(`.ex10 div`).css({ 'background': 'none' })
    $(`.ex10 .box${box_num}`).css({ 'background': bg })
  })
  /* ----------------------------------------ex10--------------------------------------- */
  $(`.ex11 button`).click(function () {
    var box_num = $(this).val()
    var bg = $(`.ex11 .box${box_num}`).attr('data-bg')
    $(`.ex11 div`).css({ 'background': 'none' })
    $(`.ex11 .box${box_num}`).css({ 'background': bg })
  })
  /* ----------------------------------------ex11--------------------------------------- */
  $(`.ex12 input`).bind('input', function () {
    var 입력된글자 = $(this).val()
    $(this).siblings('p.output').text(입력된글자)
  })
  /* ----------------------------------------ex12--------------------------------------- */
  $(`.ex13 input[type=radio]`).change(function () {
    var box_num = $(this).val()
    var bg = $(this).siblings(`div.box${box_num}`).attr('data-bg')
    $(this).siblings('div').css({'background':'none'})
    $(this).siblings(`div.box${box_num}`).css({'background':bg})
  })
  /* ----------------------------------------ex13--------------------------------------- */
  /* $(`.ex4 div`).click(function () {
    var bg = $(this).attr('data-bg')
    $(this).siblings('div').css({ 'background': 'none' })
    $(this).css({ 'background': bg })
  }) */
})//ready