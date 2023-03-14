$(function () {
  $(`.ex1 button`).click(function () {
    $(`.ex1 div`).css({ 'background': 'none' })
    $(this).parents().siblings('div').each(function () {
      var bg = $(this).attr('data-bg')
      $(this).css({ 'background': bg })
    })
  })
})

$(function () {
  function fnSetNumber() {
    $(`.ex2 span`).each(function () {
      var rnd = Math.floor(Math.random() * 11)
      $(this).text(rnd)
    })
  }

  var point = 0

  fnSetNumber()

  $(`.ex2 button`).click(function () {
    var sum = 0, user
    user = parseInt($(`.ex2 input`).val())
    $(`.ex2 span`).each(function () {
      sum += parseInt($(this).text())
    })

    if (sum === user) {
      fnSetNumber()
      ++point
      $(`.ex2 input`).val('')
      $(`.ex2 div`).css({ 'background': 'none' })
    }
    else {
      $(`.ex2 div`).css({ 'background': 'red' })
    }

    $(`.ex2 .output`).text(point)
    $(`.ex2 input`).focus()
  })
})

$(function () {
  $(`.ex3 .btn1`).click(function () {
    var point = 0
    $(`.ex3 div`).each(function () {
      var check = $(this).find('input:checked').val()
      if (check === '정답') {
        point += 1
        $(this).find('.radios').css({ 'background': 'green' })
      }
      else {
        $(this).find('.radios').css({ 'background': 'red' })
      }
      //point += (check === '정답')? 1 : 0
    })
    $(`.ex3 .output`).text(point)
  })

  $(`.ex3 .btn2`).click(function () {
    $(`.ex3 .output`).text('0')
    $(`.ex3 .radios`).css({ 'background': 'none' })
    $(`.ex3 input`).prop(`checked`, false)
  })
})

$(function () {
  $(`.ex4 button`).click(function () {
    var Num = $(`.ex4 input`).size() // 체크박스 갯수를 구함 여기에서는 4개
    var checkNum = 0
    $(`.ex4 input`).each(function () {
      var ox = $(this).val() // value값이 'o'인지 'x'인지 불러옴
      var check = $(this).prop('checked') // 박스가 체크되어있는지 
      if ((check === true) && (ox === 'o') || (check === false) && (ox === 'x')) { // 체크o && o 또는 체크x && x
        checkNum += 1 // 조건이 만족하면 checkNum에 1을 더함 (체크박스가 4개이므로 모든 조건이 만족하면 4가나옴)
      }
    })
    var result = (checkNum === Num) ? '정답' : '오답'  // checkNum랑 Num이 같으면 정답 아니면 오답
    $(`.ex4 .output`).text(result)
  })
})

$(function () {
  function fnc1(el){
    var checkNum = 0
      el.children('input').each(function () {  // 각 div안에 있는 input을 한번씩 실행
        var ox = $(this).val()  // value값을 불러옴
        var boxCheck = $(this).prop('checked') // 박스가 true인지 false 인지 
        if ((boxCheck === true) && (ox === 'o') || (boxCheck === false) && (ox === 'x')) {
          checkNum += 1
        }//if
      })//each
      return checkNum
  }//fnc1

  $(`.ex5 .btn1`).click(function () {
    var point = 0 // 포인트 변수 선언
    $(this).siblings('div').each(function () { // 각 div마다 한번씩 실행
      var boxSize = $(this).children('input').size() // 각 div안에 있는 체크박스 갯수

      var checkNum = fnc1($(this))

      if (boxSize === checkNum) {
        point += 1
        $(this).css({ 'background': 'blue' })
      }//if
      else {
        $(this).css({ 'background': 'red' })
      }//else
    })//each
    $(`.ex5 .output`).text(point)
  })//click

  $(`.ex5 .btn2`).click(function () {
    $(`.ex5 div`).css({ 'background': 'none' })
    $(`.ex5 input`).prop('checked', false)
    $(`.ex5 .output`).text('0')
  })//click
})