$(function () {
  function fnsetNum() {
    return Math.floor(Math.random() * 10)
  }//fnsetNum

  function fnSetQuestion(contNum) {
    $(`.ex1 .cont${contNum} .num1`).text(fnsetNum())
    $(`.ex1 .cont${contNum} .num2`).text(fnsetNum())
    $(`.ex1 .cont${contNum} .num3`).text(fnsetNum())
  }//fnSetQuestion()

  fnSetQuestion(1)
  fnSetQuestion(2)

  function fn1(el) {
    var n1 = parseInt(el.siblings('.num1').text())
    var n2 = parseInt(el.siblings('.num2').text())
    var n3 = parseInt(el.siblings('.num3').text())
    var input = parseInt(el.siblings('input').val())
    var oper = el.val()
    var calc = (oper === 'plus') ? n1 + n2 + n3 : n1 - n2 - n3
    var cls = (input === calc) ? 'green' : 'red'//삼항연산자 (조건)?참일때값 : 거짓일때값
    //el.parent().removeClass('green red')
    //el.parent().addClass(cls)
    el.parent().css({ 'background': cls })
  }//fn1

  $(`.ex1 button`).click(function () {
    fn1($(this))
  })//click

  $(`.ex2 button`).click(function () {
    var age = parseInt($(this).siblings().children('input').val())
    var type = parseInt($(this).siblings().children('input:checked').val())
    var num = parseInt($(this).siblings('input').val())
    var sum = type * num
    var adult = (age >= 19) ? `${sum}원 입니다.` : '미성년자는 구매할 수 없습니다.'
    $(this).siblings('.output').text(adult)
  })//click
})//ready