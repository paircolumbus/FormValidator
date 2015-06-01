function Validator () {
  this.length = 8;
  this.capitals = 1;
  this.numbers = 1;
  this.email_error = '.errors li:nth-child(1)'
  this.length_error = '.errors li:nth-child(2)'
  this.caps_error = '.errors li:nth-child(3)'
  this.nums_error = '.errors li:nth-child(4)'
}

Validator.prototype.validateEmail = function(email, selector) {
  if (email.search(/^[^@]+@[^@]+\.[^@]+$/) == -1) {
    $(selector).show()
     return false;
  } else {
    return true;
  }
}

Validator.prototype.validatePWLength = function(password, selector) {
  if (password.length < 8) {
    $(selector).show()
    return false;
  } else {
    return true;
  }
}

Validator.prototype.validatePWCAPS = function(password, selector) {
  if (password.search(/[A-Z]/) == -1) {
    $(selector).show()
    return false;
  } else {
    return true;
  }
}

Validator.prototype.validatePWNums = function(password, selector) {
  if (password.search(/\d/) == -1) {
    $(selector).show();
    return false;
  } else {
    return true;
  }
}

Validator.prototype.validate = function(email, password) {
  var tests = [this.validateEmail(email, this.email_error),
  this.validatePWLength(password, this.length_error),
  this.validatePWCAPS(password, this.caps_error),
  this.validatePWNums(password, this.nums_error)]

  if (tests.join("").search(/false/) == -1) {
    return true
  } else {
    return false
  }
}

function hideErrors() {
  $('.errors li').hide()
}

var form = '.container form'

$(document).ready(function(){
  var validator = new Validator;
  hideErrors();
  $(form).on('submit',function(e){
    hideErrors();

    var email = $($(this).children()[0]).val();
    var password = $($(this).children()[2]).val();

    if (!validator.validate(email, password)) {
      e.preventDefault();
    }
  });
});

