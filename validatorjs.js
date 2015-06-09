$(".errors li").hide();


$(function(){


  $("form").submit(function(event) {
    var is_valid = false;
    $(".errors li").hide();

    var email = $("input[placeholder='Email']").val();
    var password = $("input[placeholder='Password']").val();

    if(!check_email(email)){
      is_valid = false;
      $(".errors li:nth-child(1)").show();
    }

    if(!check_long_enough(password)){
      is_valid = false;
      $(".errors li:nth-child(2)").show();
    }

    if(!check_is_capital(password)){
      is_valid = false;
      $(".errors li:nth-child(3)").show();
    }

    if(!check_is_number(password)){
      is_valid = false;
      $(".errors li:nth-child(4)").show();
    }

    if(!is_valid){
      event.stopPropagation();
      event.preventDefault();
    }

  });
});

function check_email(email) {
  return /[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.[a-zA-Z0-9-._]/.test(email);
}

function check_long_enough(password) {
  return password.length >= 8;
}

function check_is_capital(password) {
  return /[A-Z]/.test(password);
}

function check_is_number(password) {
  return /\d/.test(password);
}
