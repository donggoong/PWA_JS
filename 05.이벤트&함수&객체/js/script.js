$(document).ready(function () {
  /* 1------------------------------------------------------------ */

  function fn1(num1, num2) {
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var sum = num1 + num2
    var sub = num1 - num2
    var multi = num1 * num2
    var divide = (num1 / num2).toFixed(2)
    var obj = { sum, sub, multi, divide }
    return obj
  }//fn1
  $('.section1 .article1 button').click(function () {
    var num1 = $('.section1 .article1 .p1 input:checked').val()
    var num2 = $('.section1 .article1 .p2 input:checked').val()
    var obj = fn1(num1, num2)
    $('.section1 .article1 .output').text(`더하기 : ${obj.sum},
    빼기 : ${obj.sub},
    곱하기 : ${obj.multi},
    나누기 : ${obj.divide}`)/* html : 안에 태그를 넣을 수 있음 text : 글자 만 출력 */
  })
  $('.section1 .article2 button').click(function () {
    var num1 = $('.section1 .article2 .p1 input:checked').val()
    var num2 = $('.section1 .article2 .p2 input:checked').val()
    var { sum, sub, multi, divide } = fn1(num1, num2)
    $('.section1 .article2 .output').text(`더하기: ${sum},
    빼기:${sub},
    곱하기:${multi},
    나누기:${divide}`)
  })
  /* 2------------------------------------------------------------ */
  $('.ex2 input').bind('input', function () { /* text나 number같이 숫자나 글자를 입력하는거에만 사용 가능 */
    var num1 = $('.ex2 .num1').val()
    var num2 = $('.ex2 .num2').val()
    var sum = parseInt(num1) + parseInt(num2)
    $('.ex2 b').text(sum)
  })
  /* 3------------------------------------------------------------ */
  function fn3(num1, num2, num3){
    var num1 = parseInt($('.ex3 .num').val())
    var num2 = parseInt($('.ex3 .radios input:checked').val())
    var num3 = parseInt($('.ex3 select').val())
    var sum = num1 + num2 + num3
    var sub = num1 - num2 - num3
    var multi = num1 * num2 * num3
    var obj = {sum, sub, multi}
    $('.ex3 .output').text(`더하기 : ${obj.sum}, 빼기 : ${obj.sub}, 곱하기 : ${obj.multi}`)
  }
  $('.ex3 .num').bind('input',function(){
    var num = $('.ex3 .num').val()
    $('.ex3 .output').text(num)
    fn3()
  })//input
  $('.ex3 .radios input').change(function(){
    var num = $('.ex3 .radios input:checked').val()
    $('.ex3 .output').text(num)
    fn3()
  })
  $('.ex3 select').change(function(){
    var num = $('.ex3 select').val()
    $('.ex3 .output').text(num)
    fn3()
  })
  /* 4------------------------------------------------------------ */
  function fn4(type, color, num){
    var m_type = parseInt($('.ex4 .prd1 input:checked').val())
    var m_color = parseInt($('.ex4 .prd1 select').val())
    var m_num = parseInt($('.ex4 .prd1 input[name=num]').val())
    var w_type = parseInt($('.ex4 .prd2 input:checked').val())
    var w_color = parseInt($('.ex4 .prd2 select').val())
    var w_num = parseInt($('.ex4 .prd2 input[name=num]').val())
    var man_sum = (m_type + m_color) * m_num
    var women_sum = (w_type + w_color) * w_num
    
    $('.ex4 .prd1 .output').text(man_sum)
    $('.ex4 .prd2 .output').text(women_sum)
    $('.ex4 .total').text(man_sum + women_sum)
  }
  $('.ex4 .prd1 input').change(function(){
    var type = $('.ex4 .prd1 input:checked').val()
    $('.ex4 .prd1 .output').text(type)
    fn4()
  })
  $('.ex4 .prd1 select').change(function(){
    var color = $('.ex4 .prd1 select').val()
    $('.ex4 .prd1 .output').text(color)
    fn4()
  })
  $('.ex4 .prd1 input[name=num]').bind('input',function(){
    var num = $('.ex4 .prd1 input[name=num]').val()
    $('.ex4 .prd1 .output').text(num)
    fn4()
  })
  $('.ex4 .prd2 input').change(function(){
    var type = $('.ex4 .prd2 input:checked').val()
    $('.ex4 .prd2 .output').text(type)
    fn4()
  })
  $('.ex4 .prd2 select').change(function(){
    var color = $('.ex4 .prd2 select').val()
    $('.ex4 .prd2 .output').text(color)
    fn4()
  })
  $('.ex4 .prd2 input[name=num]').bind('input',function(){
    var num = $('.ex4 .prd2 input[name=num]').val()
    $('.ex4 .prd2 .output').text(num)
    fn4()
  })

})//ready