
# constants

EMAIL_REGEX = /// # this is NOT comprehensive and only allows common format emails
  [a-z0-9._-]+
  @
  [a-z0-9._-]+
  \.
  [a-z0-9._-]+
///i

ERROR_MESSAGE_MAP = # edit this if error message types or their ordering changes
  invalidEmail: 0
  passwordTooShort: 1
  passwordMissingDigit: 2
  passwordMissingCapitalLetter: 3

# html elements we will use

loginForm = $ "form"
emailInput = loginForm.children("input[type='text']")
passwordInput = loginForm.children("input[type='password']")
submitButton = loginForm.children("input[type='submit']")
errorMessages = $ ".errors li"

# helper functions

getEmailErrors = (typing) ->
  emailAddress = emailInput.val() 
  return {} if emailAddress.length == 0 && typing
  invalidEmail: not EMAIL_REGEX.test emailAddress

getPasswordErrors = (typing) ->
  password = passwordInput.val()
  return {} if password.length == 0 && typing
  passwordTooShort: password.length < 8
  passwordMissingDigit: not /\d/.test password
  passwordMissingCapitalLetter: not /[A-Z]/.test password

getAllErrors = (typing) ->
  $.extend {}, getEmailErrors(typing), getPasswordErrors(typing) 

isErrorFree = (errors) ->
  for own errorKey, hasError of errors
    return false if hasError
  true

updateErrorVisibility = (errors) ->
  for own errorKey, errorIndex of ERROR_MESSAGE_MAP
    errorMessages.eq(errorIndex).toggle !!errors[errorKey] 

doTypingErrorCheck = () ->
  errors = getAllErrors true
  updateErrorVisibility errors
  if (errorKey for own errorKey of errors).length > 0 && isErrorFree errors
    submitButton.removeAttr "disabled"
  else
    submitButton.attr "disabled", "disabled"
  
# dom events

loginForm.submit (event) ->
  errors = getAllErrors(false)
  return if isErrorFree(errors)
  updateErrorVisibility errors
  event.preventDefault()

emailInput.change doTypingErrorCheck
emailInput.keyup doTypingErrorCheck
passwordInput.change doTypingErrorCheck 
passwordInput.keyup doTypingErrorCheck

# initialization

doTypingErrorCheck()
