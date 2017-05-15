var valid = (function() {
  
  var email = function(email) {
    var expression = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return email.match(expression) !== null;
  };

  var passwordLength = function(password) {
    return password.length > 7;
  };

  var passwordCapitalization = function(password) {
    return password.toLowerCase() !== password;
  };

  var passwordNumber = function(password) {
    return password.match(/\d+/g) !== null;
  };

  return {
    email: email,
    passwordLength: passwordLength,
    passwordCapitalization: passwordCapitalization,
    passwordNumber: passwordNumber
  }

})();

function input(element) {
  if(element === 'email') {
    element = 'text';
  }
  return $('input[type="' + element + '"]');
}

function inputValue(element) {
  if(element === 'email') {
    element = 'text';
  }
  return $('input[type="' + element + '"]').val();
}

function errorElement() {
  var error = $('.container ul li');
  return {
    invalidEmail: error.eq(0),
    shortPassword: error.eq(1),
    noCapitalPassword: error.eq(2),
    noNumberPassword: error.eq(3),
    invalidEmailText: error.eq(0).text(),
    shortPasswordText: error.eq(1).text(),
    noCapitalPasswordText: error.eq(2).text(),
    noNumberPasswordText: error.eq(3).text()
  }
}

var validate = function() {
  var email = function() {
    if(!valid.email(inputValue('email'))) {
      return errorElement().invalidEmail.show();
    }
  };

  var passwordLength = function() {
    if(!valid.passwordLength(inputValue('password'))) {
      return errorElement().shortPassword.show();
    }
  };

  var passwordCapitalization = function() {
    if(!valid.passwordCapitalization(inputValue('password'))) {
      return errorElement().noCapitalPassword.show();
    }
  };

  var passwordNumber = function() {
    if(!valid.passwordNumber(inputValue('password'))) {
      return errorElement().noNumberPassword.show();
    }
  };

  return {
    email: email(),
    passwordLength: passwordLength(),
    passwordCapitalization: passwordCapitalization(),
    passwordNumber: passwordNumber()
  }
};

function hideMessages() {
  $('.container ul li').hide();
}

function validateInputs() {
  input('submit').on('click', function() {
    hideMessages();
    var v = validate();
    v.email;
    v.passwordLength;
    v.passwordCapitalization;
    v.passwordNumber;
  });
};

$(function() {
  hideMessages(); //this would be unnecessary if they were initially hidden with css (which would be better)
  validateInputs();
});
