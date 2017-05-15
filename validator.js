$(".errors li").hide()

$("form").submit(function(){
  $(".errors li").hide()
  var text = $("input[type='text']").val();
  var pass = $("input[type='password']").val();
  if (!text.match(/.*@.*\..*/)){
    $(".errors li:nth-child(1)").show()
  }if(pass.length<8){
    $(".errors li:nth-child(2)").show()
  }if(!pass.match(/.*[A-Z].*/)){
    $(".errors li:nth-child(3)").show()
  }if(!pass.match(/.*[0-9].*/)){
    $(".errors li:nth-child(4)").show()
  }
});
