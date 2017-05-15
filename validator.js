// Hide all initial errors
var errors = $(".errors li").hide();

// Assign variables for Email and Password fields
var email = $("input[placeholder='Email']").val();
var password = $("input[placeholder='Password']").val();

// Regex email validator
var email_regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

// Regex password validator types
var password_one_num = /(?=^\w{0,}$)(?=\w*[0-9])^\w+$/;
var password_one_cap = /(?=^\w{1,}$)(?=\w*[A-Z])^\w+$/;
var password_eight_char = /^[a-zA-Z0-9]{8,}$/;

$(function(){
  $("form").submit(function() {
    ValidateForm();
  });
});

function ValidateForm() {
  email = $("input[placeholder='Email']").val();
  password = $("input[placeholder='Password']").val();

  ValidateEmail();
  ValidatePassword();
}

function ValidateEmail() {
  if (email.match(email_regex)) $(".errors li:nth-child(1)").hide();
  else $(".errors li:nth-child(1)").show(); event.preventDefault();
}

function ValidatePassword() {
  if (password.length > 8) $(".errors li:nth-child(2)").hide();
  else $(".errors li:nth-child(2)").show(); event.preventDefault();

  if (password.match(password_one_cap)) $(".errors li:nth-child(3)").hide();
  else $(".errors li:nth-child(3)").show(); event.preventDefault();

  if (password.match(password_one_num)) $(".errors li:nth-child(4)").hide();
  else $(".errors li:nth-child(4)").show(); event.preventDefault();
}
