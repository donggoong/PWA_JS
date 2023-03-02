$(function () {

  function fn1(el) {
    var 숫자 = el.val()
    var 알파벳 = el.attr('data-n')
    alert(`숫자 : ${숫자}, 알파벳 : ${알파벳}`)
  }

  $('.ex1 button').click(function () {
    fn1($(this))
  })//click

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function fn2(el,con) {
    el.css({'color':'red'})
    $(`.ex2 .con${con} button`).not(el).css({'color':'black'})
  }

  $('.ex2 button').click(function () {
    var con = $(this).val()
    fn2($(this),con)
  })//click

  //////////////////////////////////////////////////////////////////////////////////

  function fn3(el, con){
    var con = el.attr('data-con')
    el.css({'color':'red'})
    $(`.ex3 .con${con} span`).not(el).css({'color':'blue'})
  }

  $('.ex3 span').click(function(){
    fn3($(this))
  })

  //////////////////////////////////////////////////////////////////////////////////
  function fn4(el, num, con){
    var bg = $(`.ex4 .con2 .box${num}`).text()
    $(`.ex4 .con${con} .box${num}`).css({'background' : bg })
    $(`.ex4 .con${con} div`).not($(`.box${num}`)).css({'background':'none'})
  }

  $(`.ex4 .con1 button`).click(function(){
    var num = $(this).text()
    fn4($(this), num, 1)
  })

  $(`.ex4 .con2 button`).click(function(){
    var num = $(this).val()
    fn4($(this), num, 2)
  })
})//ready