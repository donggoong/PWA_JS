/* ----------------------------ex1-------------------- */
function add(num1, num2) {
  return sum = parseInt(num1) + parseInt(num2)
}

function mul(num1, num2) {
  return sum = parseInt(num1) * parseInt(num2)
}

function sub(num1, num2) {
  return sum = parseInt(num1) - parseInt(num2)
}

function div(num1, num2) {
  return sum = (parseInt(num1) / parseInt(num2)).toFixed(2)
}

$('.ex1 .div1 button').click(function () {
  var num1 = $('.ex1 .div1 .num1').val()
  var num2 = $('.ex1 .div1 .num2').val()
  var add_sum = add(num1, num2)
  var mul_sum = mul(num1, num2)
  $('.ex1 .div1 .output').html('더하기 결과 = ' + add_sum + '\n 곱하기 결과 = ' + mul_sum)
})

$('.ex1 .div2 button').click(function () {
  var num1 = $('.ex1 .div2 .num1').val()
  var num2 = $('.ex1 .div2 .num2').val()
  var add_sum = add(num1, num2)
  var sub_sum = sub(num1, num2)
  $('.ex1 .div2 .output').html('더하기 결과 = ' + add_sum + '\n 빼기 결과 = ' + sub_sum)
})

$('.ex1 .div3 button').click(function () {
  var num1 = $('.ex1 .div3 .num1').val()
  var num2 = $('.ex1 .div3 .num2').val()
  var sub_sum = sub(num1, num2)
  var mul_sum = mul(num1, num2)
  $('.ex1 .div3 .output').html('빼기 결과 = ' + sub_sum + '\n 곱하기 결과 = ' + mul_sum)
})

$('.ex1 .div4 button').click(function () {
  var num1 = $('.ex1 .div4 .num1').val()
  var num2 = $('.ex1 .div4 .num2').val()
  var add_sum = add(num1, num2)
  var div_sum = div(num1, num2)
  $('.ex1 .div4 .output').html('더하기 결과 = ' + add_sum + '\n 나누기 결과 = ' + div_sum)
})
/*--------------------ex2-----------------------  */
function 계산(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1)
  var 숫자2 = parseInt(숫자2)
  var 더하기 = 숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 = (숫자1 / 숫자2).toFixed(2)
  var 객체 = {
    더하기: 더하기,
    빼기: 빼기,
    곱하기: 곱하기,
    나누기: 나누기
  }
  return 객체
}
$('.ex2 .div1 button').click(function () {
  var 숫자1 = $('.ex2 .div1 .num1').val()
  var 숫자2 = $('.ex2 .div1 .num2').val()
  // var 객체 = 계산(숫자1,숫자2)
  var { 더하기, 곱하기 } = 계산(숫자1, 숫자2)//구조분해할당, destructuring
  $('.ex2 .div1 .output').html('더하기 결과 = ' + 더하기 + '\n 곱하기 결과 = ' + 곱하기)
})
$('.ex2 .div2 button').click(function () {
  var 숫자1 = $('.ex2 .div2 .num1').val()
  var 숫자2 = $('.ex2 .div2 .num2').val()
  var { 더하기, 빼기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div2 .output').html('더하기 결과 = ' + 더하기 + '\n 빼기 결과 = ' + 빼기)
})
$('.ex2 .div3 button').click(function () {
  var 숫자1 = $('.ex2 .div3 .num1').val()
  var 숫자2 = $('.ex2 .div3 .num2').val()
  var { 빼기, 곱하기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div3 .output').html('빼기 결과 = ' + 빼기 + '\n 곱하기 결과 = ' + 곱하기)
})
$('.ex2 .div4 button').click(function () {
  var 숫자1 = $('.ex2 .div4 .num1').val()
  var 숫자2 = $('.ex2 .div4 .num2').val()
  var { 더하기, 나누기 } = 계산(숫자1, 숫자2)
  $('.ex2 .div4 .output').html('더하기 결과 = ' + 더하기 + '\n 나누기 결과 = ' + 나누기)
})
/* -------------------ex3----------------------- */
function result(kor, eng, mat){
  var kor = parseInt(kor)
  var eng = parseInt(eng)
  var mat = parseInt(mat)
  var tot = { kor, eng, mat }
  return tot
}

$('.ex3 .div1 button').click(function () {
  var kor = $('.ex3 .div1 .kor').val()
  var eng = $('.ex3 .div1 .eng').val()
  var mat= $('.ex3 .div1 .mat').val()
  var { kor, eng } = result(kor, eng , mat)
  $('.ex3 .div1 .output').html('영어와 국어의 총점은 ' + (kor + eng) + '평균은 ' + ((kor + eng) / 2))
})

$('.ex3 .div2 button').click(function () {
  var kor = $('.ex3 .div1 .kor').val()
  var eng = $('.ex3 .div2 .eng').val()
  var mat = $('.ex3 .div2 .mat').val()
  var { mat, eng } = result(kor, eng, mat)
  $('.ex3 .div2 .output').html('수학과 영어의 총점은 ' + (mat + eng) + '평균은 ' + ((mat + eng) / 2))
})

/* -------------------ex4----------------------- */
function sum(type, color, num) {
  var type = parseInt(type)
  var color = parseInt(color)
  var num = parseInt(num)
  var result = (type + color) * num
  return result
}
$('.ex4 .div1 button').click(function () {
  var type = $('.ex4 input[name=type]:checked').val()
  var color = $('.ex4 input[name=color]:checked').val()
  var num = $('.ex4 input[name=num]').val()
  var result = sum(type, color, num)
  console.log(result);
  $('.ex4 .div1 .output').html(result + ' 원')
})