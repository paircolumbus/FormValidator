$(document).ready(() ->
  $('.errors').children().hide()
)

$('input[type="submit"').click((e) ->
  e.preventDefault()
  $('.errors').children().hide()
  emailValid = checkEmail($('[placeholder="Email"]').val())
  passwordValid = checkPassword($('[placeholder="Password"]').val())
  if  emailValid && passwordValid
    $('form').submit()
    alert 'Form submitted'
)

checkEmail = (input) -> 
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
  if emailInvalid = !emailRegex.test(input)
    $('.errors li:nth-child(1)').show()
  return !emailInvalid

checkPassword = (input) ->  
  passwordDigitRegex = /(?=.*\d)/g
  passwordCapitalRegex = /(?=.*[A-Z])/g
  passwordLengthRegex = /.{8,}/g
  if passInvalid1 = !passwordLengthRegex.test(input)
    $('.errors li:nth-child(2)').show()
  if passInvalid2 = !passwordCapitalRegex.test(input)
    $('.errors li:nth-child(3)').show()
  if passInvalid3 = !passwordDigitRegex.test(input)
    $('.errors li:nth-child(4)').show()
  return !passInvalid1 && !passInvalid2 && !passInvalid3
