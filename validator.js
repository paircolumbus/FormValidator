
  //insert your code here
 
$(function(){

  $(".errors li").hide();

  $("form").on("submit", function(event){

    // password needs to be 8 chars long
    if ($("input[type=password]").val().length < 8) {
      $(".errors li:nth-child(2)").show();
    } else {
        $(".errors li:nth-child(2)").hide();
    };

    // password needs to have a capital letter
    if ($("input[type=password]").val().match(/[A-Z]/) == null) {
      $(".errors li:nth-child(3)").show();
    } else {
        $(".errors li:nth-child(3)").hide();
    };

    // password needs to have digit in it
    if ($("input[type=password]").val().match(/[0-9]/) == null) {
      $(".errors li:nth-child(4)").show();
    } else {
        $(".errors li:nth-child(4)").hide();
    };

    // simple validation regex for email
    if ($("input[type=text]").val().match(/\S+@\S+\.\S+/) == null) {
      $(".errors li:nth-child(1)").show();
    } else {
        $(".errors li:nth-child(1)").hide();
    };


  });

});
