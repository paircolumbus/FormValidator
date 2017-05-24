class Validator
  constructor: (@emailSel, @passSel, @errSel) ->
    @emailRegex = /^([a-zA-Z0-9!#$%&'*\+\-\/=?^_`{|}~]+(?:\.*[a-zA-Z0-9!#$%&'*\+\-\/=?^_`{|}~]+)*)@([a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)+)$/
    @upperCaseRegex = /.*[A-Z]+.*/
    @digitRegex = /.*[0-9]+.*/

  check: ->
    $(@errSel).empty()
    @checkEmail() && @checkPassword()

  checkEmail: ->
    s = $(@emailSel).val()
    if not @emailRegex.test(s)
      $(@errSel).append '<li>Please enter a valid email address</li>'
      false
    else
      true

  checkPassword: ->
    s = $(@passSel).val()
    valid = true
    if s.length < 8
      $(@errSel).append '<li>Your password should be at least 8 characters long</li>'
      valid = false
    if not @upperCaseRegex.test s
      $(@errSel).append '<li>Your password should contain at least one capital letter</li>'
      valid = false
    if not @digitRegex.test(s)
      $(@errSel).append '<li>Your password should contain at least one number (0-9)</li>'
      valid = false
    valid

email = 'input[type=text]'
pass = 'input[type=password]'
err = 'ul.errors'
$(err).empty()
v = new Validator email, pass, err

$('input[type=submit]').click (e) ->
  if not v.check()
    e.preventDefault()
  else
    $('form').submit()
    alert 'Sign in successful!'
  null