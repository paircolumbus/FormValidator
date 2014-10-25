
  //insert your code here
 
$(function(){

	$(".errors li").hide();

	$("form").submit(function() {

		var email = $("input[placeholder='Email']").val();
		var password = $("input[placeholder='Password']").val();

		//Email regex from http://stackoverflow.com/a/719543/1133921
		var emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		var emailIsValid = emailRegexp.test(email);

		(!emailIsValid) ? $(".errors li:nth-child(1)").fadeIn() : $(".errors li:nth-child(1)").hide();

		var pwIsLength8 = /^.{8,}$/.test(password);
		var pwHasUpperCaseChar = /^(?=.*[A-Z]).*$/.test(password);
		var pwHasANumber = /^(?=.*\d).*$/.test(password);

		(!pwIsLength8) ? $(".errors li:nth-child(2)").fadeIn() : $(".errors li:nth-child(2)").hide();
		(!pwHasUpperCaseChar) ? $(".errors li:nth-child(3)").fadeIn() : $(".errors li:nth-child(3)").hide();
		(!pwHasANumber) ? $(".errors li:nth-child(4)").fadeIn() : $(".errors li:nth-child(4)").hide();

		//If the user typed in a valid email and password, display a logging in notification.
		if (emailIsValid && pwIsLength8 && pwHasUpperCaseChar && pwHasANumber) {
			$(".container").append('<div id="success" style="color:green; display:none">Logging In...</div>');
			$("#success").fadeIn();
		}
		else {
			$("#success").hide();
		}

	});

});
