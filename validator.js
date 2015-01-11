// Form validators, matching to each of the four errors in order
var validators = [
  // Please enter a valid email address
  function () {
    return /^.+@.+\..+$/.test($('form input[type=text]').val());
  },

  // Your password should be at least 8 characters long
  function () {
    return $('form input[type=password]').val().length >= 8;
  },

  // Your password should contain at least one capital letter
  function () {
    return /[A-Z]/.test($('form input[type=password]').val());
  },

  // Your password should contain at least one number (0-9)
  function () {
    return /\d/.test($('form input[type=password]').val());
  }
];

// Hides all validation errors
function hideErrors() {
  $('.errors li').hide();
}

// Runs all validators and display any errors that occur
function validate() {
  hideErrors();
  validators.forEach(function (validator, index) {
    if (!validator()) {
      $('.errors li').eq(index).show();
    }
  });
}

// Run validators initially and whenever an input is updated
$(function () {
  hideErrors();
  validate();
  $('input').on('keyup', validate);
});
