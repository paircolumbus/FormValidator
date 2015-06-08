
  //insert your code here
  $(".errors li").hide();

$(function(){

  //Hides all error tags at the beginning


  $("#").on("submit", function() {
    var valid_form = true;
    $(".errors li").hide();

    var email = $(this).find("input[placeholder='Email']").first().val();
    var password = $(this).find("input[placeholder='Password']").first().val();

    if(!checkEmail(email)){
      valid_form = false;
      $(".errors li:nth-child(1)").show();
    }

    if(!check_long_enough(password)){
      valid_form = false;
      $(".errors li:nth-child(2)").show();
    }

    if(!check_is_capital(password)){
      valid_form = false;
      $(".errors li:nth-child(3)").show();
    }

    if(!check_is_number(password)){
      valid_form = false;
      $(".errors li:nth-child(4)").show();
    }

    if(valid_form === false){
      event.preventDefault();
      event.stopPropagation();
    }
    else {

    }
  });
});

function checkEmail(email) {
  return /[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.[a-zA-Z0-9-._]/.test(email);
}

function check_long_enough(password) {
  return password.length() >= 8;
}

function check_is_capital(password) {
  return /[A-Z]/.test(password);
}

function check_is_number(password) {
  return /\d/.test(password);
}
