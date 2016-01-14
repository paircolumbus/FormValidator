
//insert your code here
$(function(){

	$("input:submit").click(function () {
                   
            var entered_email = $("input:text").val();
            alert(entered_email);
                   
            var entered_password = $("input:password").val();
            alert(entered_password);
                  
    		var email = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    		var pswd =  new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);

            var res =  email.test(entered_email);
            var res_pswd =  pswd.test(entered_password);
  				   
  			if (res == true && res_pswd == true) {
          			alert('Congrats! thats a valid email address and password');
         			$(".errors").hide();
         	}
			if (res == true && res_pswd != true){
				   	alert('Invalid password');
				   	$("li").first().hide();
			}
            if (res != true && res_pswd == true){
                    alert('Invalid email');
                    $('li').hide();
                    ('li:first-child').show();
            }
            if (res != true && res_pswd != true){
                    alert("Invalid email and password")
                    $(".errors").show();
            }
  
      });
    
});
