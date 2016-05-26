var validation = (function() {
  
  var email: function(email) {
    return true;
  }

  var passLength = function(password) {
    return true;
  }

  var passCapitalization = function(password) {
    return true;
  }

  var passNumber = function(password) {
    return true;
  }

  return {
    email: email,
    passLength: passLength,
    passCapitalization: passCapitalization,
    passNumber: passNumber
  }

})();

