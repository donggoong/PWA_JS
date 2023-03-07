$(function () {
  /* 
    증감연산은 초기값이 있어야함
    초기값 선언위치가 중요함

    증감연산자
    n += 2 // n = n + 2
    n ++ // n += 1
    ++ n // n += 1
    증감, 검사, 호출
  */
  function fn(param) {
    var n = 1
    n += param
    if (n > 5) n = 5
    if (n < -5) n = -5
    $(`.ex1 .output`).text(n)
  }
  $(`.ex1 .increase`).click(function () {
    fn(1)
  })
  $(`.ex1 .decrease`).click(function () {
    fn(-1)
  })
})//ready

$(function () {
  var n = 1
  function fn(param) {
    n += param
    if (n < 5) n = 1
    if (n > 1) n = 5
    $(`.ex2 .output`).text(n)
  }
  $(`.ex2 .increase`).click(function () {
    fn(1)
  })

  $(`.ex2 .decrease`).click(function () {
    fn(-1)
  })
})//ready

$(function () {
  /* 
  function fn() {
    var rdn
    for (n = 1; n < 5; n++) {
      rdn = Math.floor(Math.random() * 10)
      $(`.ex3_${n} .num1`).val(rdn)
      rdn = Math.floor(Math.random() * 10)
      $(`.ex3_${n} .num2`).val(rdn)
      $(`.ex3_${n} input:last-child`).val(parseInt($(`.ex3_${n} .num1`).val()) + parseInt($(`.ex3_${n} .num2`).val()))
    }
  } 
  */
  var rdn
  function fn1(n){
    rdn = Math.floor(Math.random() * 10)
    $(`.ex3_${n} .num1`).val(rdn)
    rdn = Math.floor(Math.random() * 10)
    $(`.ex3_${n} .num2`).val(rdn)
  }
  
  fn1(1)
  fn1(2)
  fn1(3)
  fn1(4)
  
  $(`.ex3 button`).click(function () {
    console.log();
    var result
    /* if($(`.ex3_1 input:last_child`.val()) === (parseInt($(`.ex3_1 .num1`).val())+parseInt($(`.ex3_1 .num2`).val()))){
      result = '정답'
    }
    else{
      result = '오답'
    } */
    $(`.ex3 .output`).text(result)
  })

})//ready