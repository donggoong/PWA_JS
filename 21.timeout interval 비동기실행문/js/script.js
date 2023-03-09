$(function () {
  var n = 0
  $(`.ex1 button:not(.clr)`).click(function () {
    n += parseInt($(this).text())
    $(`.ex1 .output`).append(`, ${n}`)
  })
  $(`.ex1 .clr`).click(function () {
    n = 0
    $(`.ex1 .output`).text('0')
  })
})//ex1

$(function () {
  var n = 0, i = 0
  $(`.ex2 button:not(.clr)`).click(function () {
    n += ++i
    $(`.ex2 .output`).append(`, ${n}`)
  })
  $(`.ex2 .clr`).click(function () {
    n = 0, i = 0
    $(`.ex2 .output`).text('0')
  })
})//ex2

$(function () {
  var n = 0
  var timeoutID
  $(`.ex3 button`).click(function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      $(`.ex3 .output`).text(++n)
    }, 1000)
  })
})//ex3

$(function () {
  var n = 0
  var intervalID
  $(`.ex4 .btn1`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex4 .output`).text(++n)
    }, 1000)
  })
  $(`.ex4 .btn2`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex4 .output`).text(--n)
    }, 1000)
  })
  $(`.ex4 .btn3`).click(function () {
    clearInterval(intervalID)
  })
})//ex3

$(function () {
  var n = 0
  var intervalID
  intervalID = setInterval(function () {
    $(`.ex5 .output`).text(++n)
  }, 1000)

  $(`.ex5 .btn1`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex5 .output`).text(++n)
    }, 1000)
  })
  $(`.ex5 .btn2`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      $(`.ex5 .output`).text(--n)
    }, 1000)
  })
  $(`.ex5 .btn3`).click(function () {
    clearInterval(intervalID)
  })
})

$(function () {
  var n = 0
  var 클릭가능 = true
  $(`.ex6 button`).click(function () {
    if (!클릭가능) return false
    클릭가능 = false
    setTimeout(function () {
      클릭가능 = true
    }, 1000)
    $(`.ex6 .output`).text(++n)
  })
})

$(function () {
  var n = 0
  var stopT, stopI
  $(`.ex7 .btn1`).click(function () {
    clearTimeout(stopT)
    stopT = setTimeout(function () {
      clearInterval(stopI)
      stopI = setInterval(function () {
        $(`.ex7 .output`).text(++n)
      }, 1000)
    }, 4000)
  })
  $(`.ex7 .btn2`).click(function () {
    clearInterval(stopI)
  })
})

$(function () {
  var x = 0
  var clickSec = true
  $(`.ex8 button`).click(function () {
    if (!clickSec) return false
    clickSec = false
    setTimeout(function () {
      clickSec = true
    }, 1000)

    x += 50
    if (x >= 250) x = 250
    $(`.ex8 div`).css({ 'left': `${x}px` })
    if(x >= 250){
      setTimeout(function(){
        x = 0
        $(`.ex8 div`).css({ 'left': `${x}` })
      },1000)
    }
  })

})

$(function () {
  var imgN = 1, intervalID
  clearInterval(intervalID)
  intervalID = setInterval(function () {
    if (imgN > 5) imgN = 1
    $(`.ex9 img`).hide()
    $(`.img${imgN++}`).show()
  }, 1000)
  $(`.ex9 .btn1`).click(function () {
    clearInterval(intervalID)
    intervalID = setInterval(function () {
      if (imgN > 5) imgN = 1
      $(`.ex9 img`).hide()
      $(`.img${imgN++}`).show()
    }, 1000)
  })
  $(`.ex9 .btn2`).click(function () {
    clearInterval(intervalID)
  })
})