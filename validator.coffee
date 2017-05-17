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
  if !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(input)
    $('.errors li:nth-child(1)').show()
    return false
  else
    return true

checkPassword = (input) ->
  if !/^(?=.*\d)(?=.*[A-Z]).{8,}$/g.test(input)
    $('.errors li:nth-child(2), .errors li:nth-child(3), .errors li:nth-child(4)').show()
    return false
  else
    return true

