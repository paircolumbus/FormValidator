
  

$(function(){
	var email_error = $("li:nth-child(1)")
	var pw_8ch_error = $("li:nth-child(2)")
	var pw_cap_error = $("li:nth-child(3)")
	var pw_num_error = $("li:nth-child(4)")
	email_error.hide();
	pw_8ch_error.hide();
	pw_cap_error.hide();
	pw_num_error.hide();
  

	var email = $("input[type='text']").val()
	var password = $("input[type='password']")
	var submit = $("input[type='submit']")

	var capPassword = $("input[type='password']")
	
	var emailValidation = /^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i


	submit.click(function(){
		if (email.match(emailValidation)) {
		} else {
				email_error.show()
		}

		if ((password.length) < 8 ){
				pw_8ch_error.show()
		}

	})
});
