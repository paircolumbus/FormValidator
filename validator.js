(function(){

  var inputs = document.getElementsByTagName("input");
  var errors = document.getElementsByTagName("li");
  var submitButton = inputs[2];
  var form = (document.getElementsByTagName("form"))[0];
  var anyErrors; 

  // initialize: all errors off
  for (var i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }

  // check for errors when submit button is pressed
  submitButton.addEventListener("click", function() {
    
    anyErrors = false;
    var email = inputs[0].value;
    var password = inputs[1].value;

    emailValidation(email);
    lengthCheck(password);
    uppercaseCheck(password);
    numberCheck(password);

  });

  //stop form submission if there's an error 
  form.onsubmit = function(){
    if (anyErrors) {
      return false;
    }
  }

  // email is valid?
  var emailValidation = function(email) {
    var emailRegex = /[a-zA-Z0-9.+_\-]+@[a-zA-Z0-9.+_\-]+\.[a-zA-Z]+/;
    var isError = !(emailRegex.test(email));
    setError(isError, 0);
  }

  // password is at least 8 in length?
  var lengthCheck = function(password) {
    var isError = (password.length < 8);
    setError(isError, 1);
  }

  // password contains an uppercase letter?
  var uppercaseCheck = function(password) {
    var isError = (password == password.toLowerCase());
    setError(isError, 2);
  }

  // password contains a number?
  var numberCheck = function(password) {
    var numberRegex = /\d/
    var isError = !(numberRegex.test(password));
    setError(isError, 3);
  }

  // if there's an error, display appropriate message
  var setError = function(isError, errorNumber) {
    if (isError) {
      errors[errorNumber].style.display = "";
      anyErrors = true;
    } else {
      errors[errorNumber].style.display = "none";
    }
  }

})();

