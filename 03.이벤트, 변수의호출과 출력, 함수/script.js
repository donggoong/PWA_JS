// event, callback function 
// $() == .jquery() ''을 이용해야 함.
function fb(a, b){
  var num1 = a
  var num2 = b
  var add = num1 + num2
  var sub = num1 - num2
  var mul = num1 * num2
  var div = (num1 / num2).toFixed(2)
  alert('' + num1 + ' + ' + num2 + ' = ' + add + '\n' + num1 + ' - ' + num2 + ' = ' + sub + '\n' + num1 + ' * ' + num2 + ' = ' + mul + '\n' + num1 + ' / ' + num2 + ' = ' + div + '')
}//fn

function fn1(a, b, c){
  var con = a
  var grid_num = b
  var grid_area = c
  var gird_tot = grid_num * grid_area
  var void_tot = con - gird_tot
  var void_num = grid_num - 1
  var void_area = void_tot / void_num
  alert('한칸의 여백의 넓이는 '+void_area+'입니다.')
}

function fn2(a, b, c){
  var con = a
  var void_num = b
  var void_area = c
  var void_tot = void_num * void_area
  var grid_tot = con - void_tot
  var grid_num = void_num + 1
  var grid_area = grid_tot / grid_num
  alert('그리드 한칸의 넓이는 '+grid_area+'입니다.')
}

$(".ex1 button").click(function () {
  var sum = parseInt($('.ex1 .add1').val()) + parseInt($('.ex1 .add2').val())
  alert(sum)
}) //ex1

$('.ex2 button').click(function () {
  var sum = parseInt($('.ex2 .add1').val()) + parseInt($('.ex2 .add2').val())
  alert(sum)
}) //ex2

$('.ex3 button').click(function () {
  var sum = $('.ex3 input:checked').val() * parseInt($('.ex3 .ex3').val(
  ))
  alert(sum)
}) //ex3

$('.ex4 button').click(function () {
  fb(parseInt($('.ex4 .num1').val()), parseInt($('.ex4 .num2').val()))
}) //ex4

$('.ex5 button').click(function () {
  fb(parseInt($('.ex5 .num1').val()), parseInt($('.ex5 .num2').val()))
}) //ex5

$('.ex6 button').click(function(){
  fn1(parseInt($('.ex6 .con').val()), parseInt($('.ex6 .grid_num').val()), parseInt($('.ex6 .grid_area').val()))
}) //ex6

$('.ex7 button').click(function(){
  fn2(parseInt($('.ex7 .con').val()), parseInt($('.ex7 .void_num').val()), parseInt($('.ex7 .void_area').val()))
}) //ex7