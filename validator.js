
  //insert your code here
$(document).ready(function(){

	var emailField = $('input[type="text"]');
	var passwordField = $('input[type="password"]');
	var submitBtn = $('input[type="submit"]');
	var errorList = $('.errors');

	$(errorList[0].children[0]).hide();
	$(errorList[0].children[1]).hide();
	$(errorList[0].children[2]).hide();
	$(errorList[0].children[3]).hide();

	function validEmail(emailAddress) {
		var emailRe = /^[^\W_]+@[^\W_]+(\.[^\W_0-9]{2,})$/

		if (emailRe.test(emailAddress)){
			$(errorList[0].children[0]).hide();
			return true;
		} else {
			$(errorList[0].children[0]).show();
			return false;
		}
	};

	function testPasswordLength(password) {
		if (password.length >= 8) {
			$(errorList[0].children[1]).hide();
			return true;
		} else {
			$(errorList[0].children[1]).show();
			return false;
		}
	};

	function testPasswordLetters(password) {
		var capitalRe = /[A-Z]/

		if (capitalRe.test(password)){
			$(errorList[0].children[2]).hide();
			return true;
		} else {
			$(errorList[0].children[2]).show();
			return false;
		}
	};

	function testPasswordNumbers(password) {
		var numberRe = /[0-9]/

		if (numberRe.test(password)){
			$(errorList[0].children[3]).hide();
			return true;
		} else {
			$(errorList[0].children[3]).show();
			return false;
		}
	};

	function validPassword(password) {
		var passwordRe = /[A-Z][a-z]*[0-9]/

		if (testPasswordLength(password) && testPasswordLetters(password) && testPasswordNumbers(password)) {
			return true;
		} else {
			return false;
		}

	};

	$(submitBtn).on("click", function(e){
		
		var emailFieldValue = emailField.val();
		var passwordFieldValue = passwordField.val();

		if (validEmail(emailFieldValue) && validPassword(passwordFieldValue)){
			e.preventDefault;
			alert("Success!");
		} else {
			alert("Invalid email address or password");

		}

	});



  //insert your code here
});
