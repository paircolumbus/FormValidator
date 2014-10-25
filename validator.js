//insert your code here
$("li").hide();

$(function(){
  //insert your code here

  $(document).ready(function(){
    $("input[type=submit]").click(function(){
      // email validation
      // RFC 2822
      var reRFC2822 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      if ( reRFC2822.test($("input[type=text]").val()) ) {
        $("li:nth-child(1)").hide();
      } else {
        $("li:nth-child(1)").show();
      }

      // password length validation
      if ($("input[type=password]").val().length < 8) {
        $("li:nth-child(2)").show();
      } else {
        $("li:nth-child(2)").hide();
      }

      // password capital letter requirement
      var passcapre = /[A-Z]/
      if (passcapre.test($("input[type=password]").val()) ) {
        $("li:nth-child(3)").hide();
      } else {
        $("li:nth-child(3)").show();
      }

      // password number requirement
      var passcapre = /[0-9]/
      if (passcapre.test($("input[type=password]").val()) ) {
        $("li:nth-child(4)").hide();
      } else {
        $("li:nth-child(4)").show();
      }

    });
  });

});
