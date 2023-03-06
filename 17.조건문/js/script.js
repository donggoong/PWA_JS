$(function () {
  $(`.ex1 button`).click(function () {
    var 국어 = parseInt($(`.ex1 .kor`).val())
    var 영어 = parseInt($(`.ex1 .eng`).val())
    var 수학 = parseInt($(`.ex1 .math`).val())
    var 총점 = 국어 + 영어 + 수학
    var 평균 = (총점 / 3).toFixed(1)
    var 등급
    if (국어 && 영어 && 수학) {
      if (평균 >= 90) {
        등급 = 'A'
      }
      else if (평균 >= 80 && 평균 < 90) {
        등급 = 'B'
      }
      else if (평균 >= 70 && 평균 < 80) {
        등급 = 'C'
      }
      else {
        등급 = 'D'
      }
      $(`.ex1 .output`).text(`총점은 ${총점}, 평균은 ${평균}, 등급은 ${등급}입니다.`)
    }
    else {
      alert('정확한 값을 입력하세요')
      return false
    }
  })

  $(`.ex2 button`).click(function () {
    var 나이 = parseInt($(`.ex2 .age`).val())
    var 점수 = parseInt($(`.ex2 .point`).val())
    var 등급
    if (나이 && 점수) {
      if ((나이 >= 19 && 점수 >= 90) || (나이 < 19 && 점수 >= 80)) {
        등급 = 'A'
      }
      else if ((나이 >= 19 && (점수 >= 80 && 점수 < 90)) || (나이 < 19 && (점수 >= 70 && 점수 < 80))) {
        등급 = 'B'
      }
      else if ((나이 >= 19 && (점수 >= 70 && 점수 < 80)) || (나이 < 19 && (점수 >= 60 && 점수 < 70))) {
        등급 = 'C'
      }
      else {
        등급 = 'D'
      }
      $(`.ex2 .output`).text(`결과는 ${등급}입니다.`)
    }
    else {
      alert('정확한 값을 입력하세요')
      return false
    }
  })

  $(`.ex3 button`).click(function () {
    var 사용자 = $(`.ex3 input:checked`).val()
    var 컴퓨터 = Math.ceil(Math.random() * 3)
    var 결과
    if (컴퓨터 === 1) {
      컴퓨터 = '가위'
    }
    else if (컴퓨터 === 2) {
      컴퓨터 = '바위'
    }
    else {
      컴퓨터 = '보'
    }
    if (사용자) {
      if (컴퓨터 === 사용자) {
        결과 = '비김'
      }
      else if (컴퓨터 !== 사용자) {
        if ((컴퓨터 === '가위' && 사용자 === '바위')||(컴퓨터 === '바위' && 사용자 === '보')||(컴퓨터 === '보' && 사용자 === '가위')) {
          결과 = '사용자승'
        }
        else {
          결과 = '사용자패'
        }
      }
      $(`.ex3 .output`).text(`컴퓨터: ${컴퓨터}, 사용자: ${사용자}, 결과: ${결과}`)
    }
    else {
      alert('체크를 해주세요.')
      return false
    }
  })

  $(`.ex4 button`).click(function(){
    var 숫자1 = parseInt($(`.ex4 .num1-1`).val() + $(`.ex4 .num1-2`).val())
    var 숫자2 = parseInt($(`.ex4 .num2-1`).val() + $(`.ex4 .num2-2`).val())
    var 사칙연산 = $(`.ex4 select`).val()
    var 결과
    if((숫자1 && 숫자2) || ((숫자1 === 0) || (숫자2 === 0))){
      if(사칙연산 === '더하기'){
        결과 = 숫자1 + 숫자2
      }
      else if(사칙연산 === '빼기'){
        결과 = 숫자1 - 숫자2
      }
      else if(사칙연산 === '곱하기'){
        결과 = 숫자1 * 숫자2
      }
      else {
        if(숫자2 === 0){
          alert('0으로는 나눌수 없음')
          return false
        }
        else{
          결과 = (숫자1 / 숫자2).toFixed(1)
        }
      }
      $(`.ex4 .output`).text(결과)
    }
    else{
      alert('숫자를 입력하세요')
      return false
    }
  })

  $(`.ex5 button`).click(function(){
    var 성별 = $(`.ex5 input:checked`).val()
    var 신장 = parseInt($(`.ex5 .height`).val()) / 100
    var 체중 = parseInt($(`.ex5 .weight`).val())
    var 비만도 = (체중 / (신장 * 신장)).toFixed(2)
    var 결과
    if(성별 && 신장 && 체중){
      if((성별 === '남' && 비만도 < 15) || (성별 === '여' && 비만도 < 20)){
        결과 = '마름'
      }
      else if((성별 === '남' && (비만도 >= 15 && 비만도 < 20)) || (성별 === '여' && (비만도 >= 20 && 비만도 < 25))){
        결과 = '적정'
      }
      else if((성별 === '남' && (비만도 >= 20 && 비만도 < 25)) || (성별 === '여' && (비만도 >= 25 && 비만도 < 30))){
        결과 = '약간 비만'
      }
      else {
        결과 = '비만'
      }
      $(`.ex5 .output`).html(`성별: ${성별} <br> BMI수치: ${비만도} <br> BMI분석: ${결과}`)
    }
    else{
      alert('입력이 잘못되었습니다.')
      return false
    }
  })
})

    /* 
    BMI = 체중(kg) ÷ {신장(m) × 신장(m)}
    예)체중 55kg, 신장 160cm 의경우
    BMI는​ 55 ÷ (1.6 × 1.6) = 21.5

    ● 남성의 체지방률
    ~15미만 : 마름
    15이상~20미만 : 적정
    20이상~25미만 : 약간 비만
    25이상 : 비만

    ● 여성의 체지방률
    ~20미만 : 마름
    20이상~25미만 : 적정
    25이상~30미만 : 약간 비만
    30이상 : 비만 
    */