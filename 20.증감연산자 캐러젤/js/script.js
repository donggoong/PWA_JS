$(function () {
  $(`.ex1 .btn1`).click(function () {
    var n = 1
    var a = n++
    $(`.ex1 .output`).text(a)
  })//click
  $(`.ex1 .btn2`).click(function () {
    var n = 1
    var a = ++n
    $(`.ex1 .output`).text(a)
  })//click
  function fn() {
    var n = 1
    return ++n
  }//fn()
  $(`.ex1 .btn3`).click(function () {
    $(`.ex1 .output`).text(fn())
  })//click
})//ready

$(function () {
  var n = 10
  $(`.ex2 button`).click(function () {
    $(`.ex2 .output`).text(++n)
  })
})//ready

$(function () {
  var n = 1
  $(`.ex3 button`).click(function () {
    if (n < 5) $(`.ex3 .output`).text(++n)
  })
})//ready
///////////////////////////////////////////////////////////////////////////////////////////
$(function () {
  function fnSet(exNum) {
    var rnd
    rnd = Math.ceil(Math.random() * 10)
    $(`.ex4_${exNum} .num1`).val(rnd)
    rnd = Math.ceil(Math.random() * 10)
    $(`.ex4_${exNum} .num2`).val(rnd)
  }//fnSet

  fnSet(1)
  fnSet(2)
  fnSet(3)
  fnSet(4)

  var point = 0

  function fnCheck(num) {
    var num1 = parseInt($(`.ex4_${num} .num1`).val())
    var num2 = parseInt($(`.ex4_${num} .num2`).val())
    var num3 = parseInt($(`.ex4_${num} .num3`).val())
    if ((num1 + num2) === num3) {
      point++
    }//if
  }//fnCheck

  $(`.ex4 button`).click(function () {
    point = 0
    fnCheck(1)
    fnCheck(2)
    fnCheck(3)
    fnCheck(4)
    $(`.ex4 .output`).text(point)
  })//click
})//ready
///////////////////////////////////////////////////////////////////////////////////
$(function () {
  function fnSet(exNum) {
    var rnd
    rnd = Math.ceil(Math.random() * 10)
    $(`.ex5_${exNum} .num1`).val(rnd)
    rnd = Math.ceil(Math.random() * 10)
    $(`.ex5_${exNum} .num2`).val(rnd)
  }//fnSet

  fnSet(1)
  fnSet(2)
  fnSet(3)
  fnSet(4)

  function fnCheck(exNum) {
    var num1 = parseInt($(`.ex5_${exNum} .num1`).val())
    var num2 = parseInt($(`.ex5_${exNum} .num2`).val())
    var num3 = parseInt($(`.ex5_${exNum} .num3`).val())
    var result = (num1 + num2 === num3) ? 1 : 0
    return result
  }

  $(`.ex5 button`).click(function () {
    var result = fnCheck(1) + fnCheck(2) + fnCheck(3) + fnCheck(4)
    $(`.ex5 .output`).text(result)
  })//click
})//ready

$(function () {
  var n = 1

  function fnChange(n) {
    $(`.ex6 img`).hide()
    $(`.img${n}`).show()
    $(`.ex6 .indicator button`).removeClass('active')
    $(`.btn${n}`).addClass('active')
  }

  $(`.next`).click(function () {
    ++n
    if (n > 5) n = 1
    fnChange(n)
  })

  $(`.prev`).click(function () {
    --n
    if (n < 1) n = 5
    fnChange(n)
  })

  $(`.indicator button`).click(function () {
    n = parseInt($(this).attr('data-n'))
    fnChange(n)
  })
})//ready

$(function () {
  var n = 0
  $(`.ex7 button`).click(function () {
    var Num = parseInt($(this).text())
    n = n + Num
    $(`.ex7 .output`).append(`, ${n}`)
  })//click
})//ready

$(function () {
  var n = 0, i = 0
  $(`.ex8 button`).click(function () {
    n = n + ++i
    $(`.ex8 .output`).append(`, ${n}`)
  })//click
})//ready