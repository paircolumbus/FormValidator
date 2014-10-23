$(function(){
	$('li').hide();

	$('input[type=submit]').click(function () {
		var email = $('input[type=text]').val().toString();
		var password = $('input[type=password]').val().toString();
		
		if (!email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
			$('ul li:nth-child(1)').slideDown('slow');
		} else {
			$('ul li:nth-child(1)').slideUp('slow');
		}

		if (password.length < 8) {
			$('ul li:nth-child(2)').slideDown('slow');
		} else {
			$('ul li:nth-child(2)').slideUp('slow');
		}

		if (!password.match(/^(?=.*[A-Z]).+$/)) {
			$('ul li:nth-child(3)').slideDown('slow');
		} else {
			$('ul li:nth-child(3)').slideUp('slow');
		}

		if (!password.match(/.*[0-9].*/)) {
			$('ul li:nth-child(4)').slideDown('slow');
		} else {
			$('ul li:nth-child(4)').slideUp('slow');
		}
	});
});
