
  //insert your code here

  $(function(){
  	$('.errors > li').hide();
  });

  var Validate = { 
    form: function() {
     $('.errors > li').hide();
     if ($('input:password').val() == "" && $('input:text').val() == ""){
      return false;
    }
    Validate.email($('input:text').val());
    Validate.password($('input:password').val());

    if ($('.errors > li').is(':visible')){
      return false;
    }
    return true;
  },
    email: function (email) { 
     var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!emailFormat.test(email)) {
      Validate.showEmailErrors();
    }
  }, 
  password: function(password){
   if (!password.length >= 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
    Validate.showPasswordErrors();
  }
  },
  showPasswordErrors: function(){
   $(".errors > li:contains('password')").show();
  },
  showEmailErrors: function() {
   $(".errors > li:contains('email')").show();
  }
}
