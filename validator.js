
  //insert your code here
 
$(function(){
  $( ".errors li" ).hide();

  $( "form" ).on( "submit", function (event) {
    var form_valid = true;
    // This could be a resubmit after trying to correct errors
    // so we'll hide the errors and let the checks turn them back on.
    $( ".errors li" ).hide();
  
    var password = $(this).find( "input[type='password']").first().val();
    var email = $(this).find("input[placeholder='Email']").first().val();
  
    if (validate_email(email) == false) {
      form_valid = false;
      $( ".errors li:nth-child(1)" ).show();
    }

    if (password_long_enough(password) == false) {
      form_valid = false;
      $( ".errors li:nth-child(2)" ).show();
    }

    if (password_with_capital(password) == false) {
      form_valid = false;
      $( ".errors li:nth-child(3)" ).show();
    }

    if (password_with_number(password) == false) {
      form_valid = false;
      $( ".errors li:nth-child(4)" ).show();
    }

    if (form_valid == false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("I'm submitting it!");
    }
  });
});

function validate_email(email) {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(email);
}

function password_long_enough(password) {
  return password.length >= 8;
}

function password_with_capital(password) {
  return /[A-Z]/.test(password);
}

function password_with_number(password) {
  return /\d/.test(password);
}
