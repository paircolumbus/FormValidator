
  //insert your code here

$(function(){
  var form = $('.container').children('form')[0].children;
  var username = form[0];
  var password = form[2];
  var submit = form[4];

  submit.disabled = true;

  var errors_list = $('.container').children('ul').children();

  var validEmail = errors_list[0];
  var minLength = errors_list[1];
  var captialLetter = errors_list[2];
  var numberPresent = errors_list[3];

  window.captialLetter = captialLetter;
  window.numberPresent = numberPresent;

  var validState = {
    v_username: false,
    v_password: false
  };

  username.onkeyup = function(e){
    var text = e.target.value;

    if (checkIfEmailIsValid(text) === true){
      validEmail.hidden = true;
      validState.v_username = true;
      console.log(text);
    } else {
      validEmail.hidden = false;
      validState.v_username = false;
    }

    manageSubmitAbility();
  };


  password.onkeyup = function(e){
    var text = e.target.value;
    var checkCount = 0;

    if (text.length >= 8){
      minLength.hidden = true;
      checkCount++;
    } else {
      minLength.hidden = false;
    }

    if (checkIfCapitalLetterPresent(text) === true){
      captialLetter.hidden = true;
      checkCount++;
    } else {
      captialLetter.hidden = false;
    }

    if (checkIfNumberPresent(text) === true){
      numberPresent.hidden = true;
      checkCount++;
    } else {
      numberPresent.hidden = false;
    }

    if(checkCount === 3){
      validState.v_password = true;
    } else {
      validState.v_password = false;
    }

    manageSubmitAbility();

  };

  function checkIfCapitalLetterPresent(text){
    return /[A-Z]+/.test(text);
  }

  function checkIfNumberPresent(text){
      return /[0-9]+/.test(text);

  }

  function checkIfEmailIsValid(text) {
    //from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(text);
  }


  function manageSubmitAbility(){
    if (validState.v_username === true && validState.v_password === true){
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  }


});
