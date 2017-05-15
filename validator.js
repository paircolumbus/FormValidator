$("ul").children().eq(0).hide();
$("ul").children().eq(1).hide();
$("ul").children().eq(2).hide();
$("ul").children().eq(3).hide();

 
$("form").submit(function(event){

  event.preventDefault()

  var email = document.getElementsByTagName("input")[0].value;
  var password = document.getElementsByTagName("input")[1].value;

  if (!isEmail(email)) {
    $("ul").children().eq(0).show();
  } else {
    $("ul").children().eq(0).hide();
  }

  if (!isValidLength(password)) {
    $("ul").children().eq(1).show();
  } else {
    $("ul").children().eq(1).hide();
  }

  if (!containsUppercase(password)) {
    $("ul").children().eq(2).show();
  } else {
    $("ul").children().eq(2).hide();
  }

  if (!containsNumber(password)) {
    $("ul").children().eq(3).show();
  } else {
    $("ul").children().eq(3).hide();
  }

});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isValidLength(password) {
  return password.length >= 8;
}

function containsUppercase(password) {
  return /[A-Z]/.test(password);
}

function containsNumber(password) {
  return /\d+/.test(password);
}

