form = document.forms["sign_in"];

$(document).ready  ->
  $(".errors").children().hide()

  $("form").submit ->
        validateEmail()
        validatePassword()
        return

validateEmail = () ->
  email = /(^[a-z0-9_])+(.|[_])*([a-z0-9])*@([a-z]+).+/
  validateEmail = form.elements[0].value
  $(".errors li:nth-child(1)").show() if validateEmail == null || validateEmail == ""
  $(".errors li:nth-child(1)").show() if !email
  return

validatePassword = () ->
  password = form.elements[1].value
  hasDigit = /[0-9]/.test(password)
  hasUpper = /[A-Z]/.test(password)
  if password == null || password == ""
    $(".errors li:nth-child(2)").show()
    $(".errors li:nth-child(3)").show()
    $(".errors li:nth-child(4)").show()
  $(".errors li:nth-child(2)").show() if password.length < 8
  $(".errors li:nth-child(3)").show() if !hasUpper
  $(".errors li:nth-child(4)").show() if !hasDigit
  return
