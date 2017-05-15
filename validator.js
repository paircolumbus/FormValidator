$(document).ready(function() {
    $(".errors").children().hide();

    $("form").submit(function() {
        validateEmail();
        validatePassword();
    });

});

var form = document.forms["sign_in"];

function validateEmail() {
    email = /(^[a-z0-9_])+(.|[_])*([a-z0-9])*@([a-z]+).+/;
    var validateEmail = form.elements[0].value;
    if (validateEmail == null || validateEmail == "") {
        $(".errors li:nth-child(1)").show();
    }
    if (!email) {
        $(".errors li:nth-child(1)").show();
    }
}

function validatePassword() {
    var password = form.elements[1].value;
    var hasDigit = /[0-9]/.test(password)
    var hasUpper = /[A-Z]/.test(password)
    if (password == null || password == "") {
        $(".errors li:nth-child(2)").show();
        $(".errors li:nth-child(3)").show();
        $(".errors li:nth-child(4)").show();
    }
    if (password.length < 8) {
        $(".errors li:nth-child(2)").show();
    }
    if (!hasUpper) {
        $(".errors li:nth-child(3)").show();
    }
    if (!hasDigit) {
        $(".errors li:nth-child(4)").show();
    }

}
