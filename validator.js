
//insert your code here
var invalidEmailError = $(".errors li:nth-child(1)");
var passwordTooShortError = $(".errors li:nth-child(2)");
var noCapitalLetterError = $(".errors li:nth-child(3)");
var noNumberError = $(".errors li:nth-child(4)");

function ProcessForm() {
  var validEmail = ValidateEmail();
  var validPass = ValidatePassword();
  return validEmail && validPass;
}

function ValidateEmail() {

  var email = $("input:text").val();
  var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!emailRegex.test(email)) {
    invalidEmailError.show();
    return false;
  } else {
    invalidEmailError.hide();
    return true;
  }
};

function ValidatePassword() {

  var password = $("input:password").val();
  var capitalLetterRegex = /.*[A-Z].*/;
  var numberRegex = /.*[0-9].*/;
  var minPassLength = 8;
  var validPassword = true;

  if (password.length < minPassLength) {
    passwordTooShortError.show();
    validPassword = false;
  } else {
    passwordTooShortError.hide();
  };

  if (!capitalLetterRegex.test(password)) {
    noCapitalLetterError.show();
    validPassword = false;
  } else {
    noCapitalLetterError.hide();
  };

  if (!numberRegex.test(password)) {
    noNumberError.show();
    validPassword = false;
  } else {
    noNumberError.hide();
  }
  return validPassword;
}

$(function() {
  $(".errors li").hide();
  $("form").submit( function() {
    var validForm = ProcessForm();
    if (!validForm) {
      event.preventDefault();
    }
  });
});
