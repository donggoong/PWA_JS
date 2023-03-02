$(function () {
  //////////////////////////ex1///////////////////////////
  function fn1(param) {
    var 첫번째수 = parseInt($(`.ex1 article:${param}-child input:first-child`).val())
    var 두번째수 = parseInt($(`.ex1 article:${param}-child input:last-of-type`).val())
    var 결과 = 첫번째수 + 두번째수
    console.log(첫번째수, 두번째수);
    $(`.ex1 article:${param}-child p`).text(결과)
  }

  $(`.ex1 article:first-child button`).click(function () {
    fn1('first')
  })

  $(`.ex1 article:last-child button`).click(function () {
    fn1('last')
  })
  //////////////////////////ex2///////////////////////////
  function fn2(param) {
    var 성 = $(`.ex2 .div${param} .first-name`).val()
    var 이름 = $(`.ex2 .div${param} .last-name`).val()
    var 결과 = 성 + 이름
    $(`.ex2 .div${param} p`).text(결과)
  }

  $(`.ex2 .div1 button`).click(function () {
    fn2(1)
  })

  $(`.ex2 .div2 button`).click(function () {
    fn2(2)
  })
  //////////////////////////ex3///////////////////////////
  function fn3(contN) {
    var 첫번째수 = parseInt($(`.ex3 .cont${contN} .num1`).val())
    var 두번째수 = parseInt($(`.ex3 .cont${contN} .num2`).val())
    var 결과 = 첫번째수 + 두번째수
    $(`.ex3 .cont${contN} p`).text(결과)
  }

  $(`.ex3 .cont1 input`).bind('input', function () {
    fn3(1)
  })

  $(`.ex3 .cont1 button`).click(function () {
    fn3(1)
  })

  $(`.ex3 .cont2 input`).bind('input', function () {
    fn3(2)
  })

  $(`.ex3 .cont2 button`).click(function () {
    fn3(2)
  })
  //////////////////////////ex4///////////////////////////
  function fn4(el) {
    var 클릭한번호 = el
    var 입력한글자 = $(`.ex4 .cont${클릭한번호} input`).val()
    $(`.ex4 .cont${클릭한번호} p`).text(입력한글자)
    /* el.siblings('p').text(el.siblings('input').val()) */
  }

  $(`.ex4 button`).click(function () {
    fn4($(this).val())
  })

  $(`.ex4 input`).bind('input', function () {
    fn4($(this).attr('data-n'))
  })

})//ready
//$(document).ready이벤트의 약식 표현식으로 html문서를 랜더링 하기 전에 parsing후 자바스크립트를 실행하는 비동기 이벤트 바인딩
/* --------------------변수--------------------
  ·선언
    var,let,const //scope, 변수를 사용할 범위 설정
    var a = 1 //변수를 선언

  ·숫자형변수
    var a = '1'
    a + 1 // '11'
    a - 1 // 0

  ·문자형변수
    var a = 'a1'
    var b = '1a'
    parseInt(a) -> NaN
    parseInt(b) -> 1

  ·문자와 변수 연결 문법
    a = 5
    b = 3
    console.log(a+'+'+b+'='+a+b);
    console.log(`${a}+${b}=${a+b}`);

  ·객체
    var 홍길동 = {
      성 : '홍',
      이름 : '길동',
      나이 : '23',
      성별 : '남'
    }

    console.log(홍길동.이름) // 길동
    console.log(홍길동.성별) // 남

    var {이름, 성별} = 홍길동 // 구조분해
    console.log(이름) //  길동
    console.log(성별) // 남

    ·boolean형
      true값 혹은 false의 값만 가지는 변수
      var a = true
      console.log(a); // true

    ·이벤트바인딩
      $(`쿼리셀렉터`).click(funtion(){
        //할일
      })

      $(`쿼리셀렉터`).bind('click',funtion(){
        //할일
      })

    ·함수
    반복되는 유사 코드를 리팩토링 하는 목적
    
    */