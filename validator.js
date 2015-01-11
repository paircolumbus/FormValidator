// jQuery elements
var $email = $('form input[type=text]');
var $password = $('form input[type=password]');
var $errors = $('.errors li');

// Form validators, matching to each of the four errors in order
var validators = [
  // Please enter a valid email address
  function () {
    return /^.+@.+\..+$/.test($email.val());
  },

  // Your password should be at least 8 characters long
  function () {
    return $password.val().length >= 8;
  },

  // Your password should contain at least one capital letter
  function () {
    return /[A-Z]/.test($password.val());
  },

  // Your password should contain at least one number (0-9)
  function () {
    return /\d/.test($password.val());
  }
];

// Hides all validation errors
function hideErrors() {
  $errors.hide();
}

// Runs all validators and display any errors that occur
function validate() {
  hideErrors();
  validators.forEach(function (validator, index) {
    if (!validator()) {
      $errors.eq(index).show();
    }
  });
}

// Run validators initially and whenever an input is updated
$(function () {
  hideErrors();
  validate();
  $email.on('keyup', validate);
  $password.on('keyup', validate);
});
