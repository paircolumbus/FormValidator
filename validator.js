// $() is an alias for $(document).ready() when you pass it a function

$(document).ready( function() {
	$("ul").children().hide();

	$("form").submit( function() {
			ValidateForm();
	});


	function ValidateForm() {
		ValidateEmail();
		ValidatePassword();
	};

	function PreventSubmission() {
		event.preventDefault(); 
	};

	function ValidateEmail() {

		var email = $("input:text").val();
		var email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var invalid_format = !email_regex.test(email)

		if (invalid_format) {
			PreventSubmission;
			$("ul li:nth-child(1)").show();
		}
		else {
			$("ul li:nth-child(1)").hide();
		};
	};

	function ValidatePassword() {
		var password = $("input:password").val();
		var capital_regex = /[A-Z]/;
		var num_regex = /[0-9]/;
		var min_length = 8; 
		var too_short = password < min_length;
		var no_capital_chars = !capital_regex.test(password)
		var no_numbers = !num_regex.test(password)


		if (too_short) {
			PreventSubmission;
			$("ul li:nth-child(2)").show();
		}
		else {
			$("ul li:nth-child(2)").hide();
		};

		if (no_capital_chars) {
			PreventSubmission;
			$("ul li:nth-child(3)").show();
		}
		else {
			$("ul li:nth-child(3)").hide();
		};
		
		if (no_numbers) {
			PreventSubmission;
			$("ul li:nth-child(4)").show();
		}
		else {
			$("ul li:nth-child(4)").hide();
		};
	};
});

// Are these functions queries or commands? Which shoould they be? 

// Ask about addclass? Would it have made more sense to add classes to the li's? 