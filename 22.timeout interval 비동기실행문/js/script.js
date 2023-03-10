$(function () {
  var x = 0, move = 50, click = true, IntervalID

  $(`.ex1 button`).click(function () {
    clearInterval(IntervalID)// 클릭 시 실행되고 있는 인터벌이 있으면 종료

    if (!click) return false
    click = false
    setTimeout(function () {
      click = true
    }, 1000)//클릭 가능한 속도를 1초로 제한

    x += move//클릭 할때 마다 x가 50씩 커짐

    if (x > 250) x = 250// x가 250이상이 되면 x를 250으로 고정

    $(`.ex1 .box`).css({ 'transform': `translateX(${x}px)` })// x만큼 오른쪽으로 이동

    if (x === 250) {
      IntervalID = setInterval(function () {
        x -= move
        $(`.ex1 .box`).css({ 'transform': `translateX(${x}px)` })
        if (x === 0) clearInterval(IntervalID)
      }, 500)// x가 -50만큼 감소하는 인터벌
    }// x가 250이되면 실행

  })//click
})

$(function () {
  var n = 1, IntervalID
  function fnChange() {
    n++
    if (n > 5) n = 1
    $(`.ex2 img`).hide()
    $(`.ex2 .img${n}`).show()
  }

  IntervalID = setInterval(function () {
    fnChange()
  }, 1000)

  $(`.ex2 .play`).click(function () {
    clearInterval(IntervalID)
    IntervalID = setInterval(function () {
      fnChange()
    }, 1000)
    $(`.ex2 .btns`).removeClass('active')
  })

  $(`.ex2 .pause`).click(function () {
    $(`.ex2 .btns`).toggleClass('active')
    clearInterval(IntervalID)
  })

})
/* $(function () {
  var move_left = 250, move_right= 0, IntervalID
  $(`.ex3 .move`).click(function(){
    $(`.ex3 button`).toggleClass('active')
    clearInterval(IntervalID)

    IntervalID = setInterval(function(){

      if(move_left > 0) {
        move_right += 50
      $(`.ex3 .box`).css({'transform':`translateX(${move_right}px)`})
      }//오른쪽으로 이동

      if(move_right > 250) {
        move_left -= 50
        $(`.ex3 .box`).css({'transform':`translateX(${move_left}px)`})
        if(move_left === 0) { move_left = 250; move_right = 0 }
      }//왼쪽으로 이동

    },500)

  })

  $(`.ex3 .stop`).click(function(){
    $(`.ex3 button`).removeClass('active')
    clearInterval(IntervalID)
  })

}) */
$(function () {
  var 목적지 = 0, 이동량 = 50, IntervalID
  $(`.ex3 .move`).click(function () {
    $(`.ex3 button`).toggleClass('active')
    clearInterval(IntervalID)

    IntervalID = setInterval(function () {
      목적지 += 이동량
      if(목적지 > 250){목적지=200;이동량=-50}
      if(목적지 < 0){목적지=50;이동량=+50}
      $(`.ex3 .box`).css({ 'transform': `translateX(${목적지}px)` })
    }, 500)

  })

  $(`.ex3 .stop`).click(function () {
    $(`.ex3 button`).removeClass('active')
    clearInterval(IntervalID)
  })
})

$(function () {
  $(`.ex4 button`).click(function(){
    var sec = parseInt($(`.ex4 input`).val()) //사용자가 입력한 초를 가져옴

    if(!sec || sec < 0) { alert('양수를 입력하세요.'); return false} // 유효성검사

    $(this).hide() //시작을 누르면 사라짐

    var IntervalID = setInterval(function(){
      $(`.ex4 .output`).text(sec--) //초가 .output에 출력이 됨
      if(sec < 0) { //초값이 0보다 작아지면
        clearInterval(IntervalID) //인터벌 종료
        setTimeout(function(){ // 1초후 시작버튼과 타이머 출력
          $(`.ex4 button`).show()
          $(`.ex4 .output`).text('타이머')
        },1000)//setTimeout()
      }//if()
    },1000)//setInterval()
  })//click()
})//ready()

$(function () {
  var box_Num = 0 , IntervalID
  $(`.ex5 .start`).click(function(){
    $(`.ex5 button`).toggleClass('active')
    
    IntervalID = setInterval(function(){
      box_Num += 1
      if(box_Num === 6) {
        $(`.ex5 .box${box_Num-1}`).removeClass('active')
        box_Num = 1
      }
      $(`.ex5 .box${box_Num}`).addClass('active')
      $(`.ex5 .box${box_Num-1}`).removeClass('active')
      console.log(box_Num);
    },1000)
  })//click
  $(`.ex5 .stop`).click(function(){
    clearInterval(IntervalID)
    $(`.ex5 button`).toggleClass('active')
    $(`.ex5 div`).removeClass('active')
    box_Num = 0
  })//click
})

$(function () {

})

$(function () {

})