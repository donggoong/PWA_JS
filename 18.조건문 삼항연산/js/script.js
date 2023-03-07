$(function () {
  $(`.ex1 button`).click(function () {
    var 숫자1_1 = $(`.ex1 .num1_1`).val()
    var 숫자1_2 = $(`.ex1 .num1_2`).val()
    var 숫자2_1 = $(`.ex1 .num2_1`).val()
    var 숫자2_2 = $(`.ex1 .num2_2`).val()
    var 숫자1 = parseInt(숫자1_1 + 숫자1_2)
    var 숫자2 = parseInt(숫자2_1 + 숫자2_2)
    var 연산자 = $(`.ex1 select option:selected`).text()
    var 결과
    console.log((숫자1_1 - 숫자1_2), (숫자2_1 - 숫자2_2));
    if (((숫자1_1 - 숫자1_2) !==false && (숫자2_1 - 숫자2_1) !==false) || (숫자1_1 - 숫자1_1) !== NaN) {
      if (연산자 === '+') {
        결과 = 숫자1 + 숫자2
      }
      else if (연산자 === '-') {
        결과 = 숫자1 - 숫자2
      }
      else if (연산자 === '*') {
        결과 = 숫자1 * 숫자2
      }
      else {
        if (연산자 === '/' && 숫자2 === 0) {
          alert('0으로는 나눌수 없습니다.')
          return false
        }
        결과 = (숫자1 / 숫자2).toFixed(1)
      }
      $(`.ex1 .output`).text(결과)
    }
    else {
      alert('숫자입력이 되지 않았습니다.')
      return false
    }
  })//ex1 click  

  $(`.ex2 button`).click(function () {
    var 숫자 = parseInt($(`.ex2 input`).val())
    var 결과
    if (숫자) {
      /* 
      if ((숫자 % 2 === 0) && (숫자 > 10)) {
        결과 = '짝수입니다.'
      }
      else {
        결과 = '홀수이거나 10미만 입니다'
      }
      */
      var 결과 = (숫자 % 2 === 0) && (숫자 > 10) ? '짝수입니다' : '홀수이거나 10미만 입니다' //삼항연산
      $(`.ex2 .output`).text(결과)
    }
    else {
      alert('숫자를 입력하세요.')
      return false
    }
  })

  $(`.ex3 b`).text(Math.ceil(Math.random() * 3))
  $(`.ex3 button`).click(function () {
    var 알파벳 = $(`.ex3 input`).val()
    if (알파벳) {
      var 결과 = (($(`.ex3 b`).text() === '1') && 알파벳 === 'one') || (($(`.ex3 b`).text() === '2') && 알파벳 === 'two') || (($(`.ex3 b`).text() === '3') && 알파벳 === 'three') ? '정답' : '오답'
      $(`.ex3 .output`).text(결과)
    }
    else {
      alert('입력오류')
      return false
    }
  })

  $(`.ex4 input`).click(function(){
    $(this).val()==='o'?$(this).val('x'):$(this).val('o')
  })
  $(`.ex4 button`).click(function(){
    $(this).toggleClass('active')
  })
})//ready