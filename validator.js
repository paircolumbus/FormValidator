$(document).ready(function(){
	$( "form input:text" ).keyup(function(){
		var val = this.value;

		var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if(email.test(val)) {
			$("ul li:nth-child(1)").hide();
		} else {
			$("ul li:nth-child(1)").show();
		};


	});
	
	$( "form input:password" ).keyup(function(){
		var password = this.value;

		if(password.length < 8){
			$("ul li:nth-child(2)").show();
		} else {
			$("ul li:nth-child(2)").hide();
		};

		if(/[A-Z]/.test(password)){
			$("ul li:nth-child(3)").hide();
		} else {
			$("ul li:nth-child(3)").show();
		};

		if(/[0-9]/.test(password)){
			$("ul li:nth-child(4)").hide();
		} else {
			$("ul li:nth-child(4)").show();
		};
	});

})