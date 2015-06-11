$(".errors li").hide()

$("form").submit(() ->
  $(".errors li").hide()
  text = $("input[type='text']").val();
  pass = $("input[type='password']").val();
  $(".errors li:nth-child(1)").show() if !text.match(/.*@.*\..*/)
  $(".errors li:nth-child(2)").show() if pass.length<8
  $(".errors li:nth-child(3)").show() if !pass.match(/.*[A-Z].*/)
  $(".errors li:nth-child(4)").show() if !pass.match(/.*[0-9].*/));