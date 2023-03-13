$(function () {
  $(`.ex1 button`).click(function () {
    $(`.ex1 .box`).css({ 'background': 'red' })
  })
})

$(function () {
  $(`.ex2 button`).click(function () {
    $(`.ex2 .box`).each(function () {
      $(this).css({ 'background': $(this).text() })
    })
  })
})

$(function () {
  $(`.ex3 button`).click(function () {
    $(`.ex3 .box`).each(function () {
      var rnd_size = Math.floor(Math.random() * 41) + 30
      $(this).css({
        'width': `${rnd_size}px`,
        'height': `${rnd_size}px`
      })
    })
  })
})

$(function () {
  $(`.ex4 input:not(.user)`).each(function () {
    var rnd_val = Math.floor(Math.random() * 10)
    $(this).val(rnd_val)
  })
  $(`.ex4 button`).click(function () {
    var sum = 0
    $(`.ex4 input:not(.user)`).each(function () {
      sum += parseInt($(this).val())
    })
    var user_result = parseInt($(`.ex4 .user`).val())
    var result = (user_result === sum) ? '정답' : '오답'
    $(`.ex4 .output`).text(result)
  })
})

$(function () {
  $(`.ex5 button`).click(function () {
    var user = $(`.ex5 input:checked`).val()
    var result = (user === 'one') ? '정답' : '오답'
    $(`.ex5 .output`).text(result)
  })
})

$(function () {
  $(`.ex6 button`).click(function () {
    var point = 0
    $(`.ex6 div`).each(function(){
      var user = $(this).find('input:checked').val()
      var result = (user === 'o') ? point+=1 : point+=0
      $(`.ex6 .output`).text(result)
    })
  })
})

$(function () {
$(`.ex7 button`).click(function(){
  $(`.ex7 div`).css({'background':'none'})
  $(this).parent().siblings('div').each(function(){
    var bg = $(this).attr('data-bg')
    $(this).css({'background':bg})
  })
})
})