
  //insert your code here

  $(function(){
  	$('.errors > li').hide();
  });

  function validateForm() {
  	$('.errors > li').hide();
  	if ($('input:password').val() == "" && $('input:text').val() == ""){
  		return false;
  	}
  	validateEmail($('input:text').val());
  	validatePassword($('input:password').val());

  	if ($('.errors > li').is(':visible')){
  		return false;
  	}
  	return true;
  }

  function validateEmail(email) { 
  	var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if (!emailFormat.test(email)) {
  		showEmailErrors();
  	}
  } 

  function validatePassword(password){
  	if (!password.length >= 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
  		showPasswordErrors();
  	}
  }

  function showPasswordErrors(){
  	$(".errors > li:contains('password')").show();
  }

  function showEmailErrors() {
  	$(".errors > li:contains('email')").show();
  }

