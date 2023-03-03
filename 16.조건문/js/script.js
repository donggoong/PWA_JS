/* 
비교연산자 종류 (비교연산자 결과로는 true, false만 반환된다.)
  ===   !==   >   <   >=   <=

논리연산자 종류 (비교 연산자를 두개 이상 사용할 경우 논리연산자로 연결한다.)
  && 모든 비교연산이 true일 경우 최종 true  
  || 비교연산 하나가 true이면 최종 true

조건문(if문)
if(){}
else
*/
$(function () {
  $(`.ex1`).submit(function (e) {
    e.preventDefault()
    var 숫자 = parseInt($(`.ex1 input`).val())
    var 결과
    if (숫자 > 0) {
      결과 = '정답'
    }
    else {
      결과 = '오답'
    }
    $(`.ex1 .output`).text(결과)
  })// submit

  $(`.ex2`).submit(function (e) {
    e.preventDefault()
    var 숫자 = $(`.ex2 input`).val()
    var 결과
    if (숫자 === '1') {
      결과 = 'one'
    }
    else if (숫자 === '2') {
      결과 = 'two'
    }
    else if (숫자 === '3') {
      결과 = 'three'
    }
    else {
      alert('입력오류')
      return false
    }

    $(`.ex2 .output`).text(결과)
  })// submit

  $(`.ex3 button`).click(function () {
    var 숫자 = parseInt($(`.ex3 input`).val())
    var 결과
    if (숫자) {
      if (숫자 >= 3 && 숫자 <= 7) {
        결과 = '정답'
      }
      else {
        결과 = '오답'
      }
      $(`.ex3 .output`).text(결과)
    } else {
      alert('숫자만 입력하세요.')
      return false
    }
  })// click

  $(`.ex4`).submit(function (e) {
    e.preventDefault()
    var 숫자 = parseInt($(`.ex4 input`).val())
    var 결과
    if (숫자) {
      if (숫자 === 1 || 숫자 === 5 || 숫자 === 10 || 숫자 === 25) {
        결과 = '정답'
      }
      else {
        결과 = '오답'
      }
      $(`.ex4 .output`).text(결과)
    }
    else {
      alert('경고')
      return false
    }
  })

  $(`.ex5 button`).click(function () {
    var 숫자 = parseInt($(`.ex5 input`).val())
    var 결과
    if (숫자) {
      if (숫자 % 2 === 0) {
        결과 = '짝수입니다.'
      }
      else {
        결과 = '홀수입니다.'
      }
      $(`.ex5 .output`).text(결과)
    }
    else {
      alert('경고')
      return false
    }

  })
})//ready