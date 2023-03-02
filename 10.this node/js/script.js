$(function () {
  /*               1-1, 1-2 함수                */
  function func1(contN, el1, el2) {
    $(`.ex1 .cont${contN} div`).removeClass('active')
    el1.addClass('active')
    el2.addClass('active')
  }//func1

  /*                   1-1                      */
  $(`.ex1 .cont1 div`).click(function () {
    func1(1, $(this), $(this).prev('div'))
  })//click

  /*                   1-2                      */
  $(`.ex1 .cont2 div`).click(function () {
    func1(2, $(this), $(this).next('div'))
  })//click

  /*                   1-3                      */
  $(`.ex1 .cont3 div`).click(function () {
    $(`.ex1 .cont3 div`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })//click
  ///////////////////////////////////////////////////////////////////////////////////////
  /*                  2-1 함수                  */
  /* function func2(contN, el){                           //첫번째 방법 함수 .addClass이용
    $(`.ex2 .cont${contN} button`).removeClass('active')
    el.siblings('button').addClass('active')
  } */

  function func2(el, contN, style) {                      //두번째 방법 함수 .css이용
    var { css, init, active } = style
    $(`.ex2 .cont${contN} button`).css({ [css]: init })
    el.siblings('button').css({ [css]: active })
  }//func2

  /*                   2-1                      */
  $(`.ex2 .cont1 button`).click(function () {
    var style = {                                         //두번째 방법
      css: 'color',
      init: '#000',
      active: 'red'
    }
    func2($(this), 1, style)                              //두번째 방법    
    /* func2(1,$(this)) */                                //첫번째 방법
  })//click

  /*                   2-2                      */
  $(`.ex2 .cont2 button`).click(function () {
    var style = {                                         //두번째 방법
      css: 'font-weight',
      init: 'normal',
      active: 'bold'
    }
    func2($(this), 2, style)                              //두번째 방법
    /* func2(2,$(this)) */                                //첫번째 방법
  })//click
  ///////////////////////////////////////////////////////////////////////////////////////
  /*           3-1, 3-2, 4-1, 4-2 함수         */
  function func3(el1, el2){
    var contN = el1.parent().parent().attr('data-n')
    $(`.ex${contN} button`).removeClass('active')
    el1.parent().siblings('article').children(`button:nth-of-type(${el2})`).addClass('active')
  }

  /*                3-1, 3-2                   */
  $(`.ex3 button`).click(function(){
    func3($(this), $(this).text())
  })//click

  /*                4-1, 4-2                   */
  $(`.ex4 button`).click(function(){
    func3($(this), $(this).text())
  })//click
  ///////////////////////////////////////////////////////////////////////////////////////
})//ready