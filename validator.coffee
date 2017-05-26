class Test
  constructor: (@sel, @func, @errMsg) ->

  run: -> if @func $(@sel).val() then null else @errMsg

class Validator
  constructor: (@errList) ->
    @tests = []

  addTest: (t) ->
    @tests.push t

  check: ->
    $(@errList).empty()
    valid = true
    for t in @tests
      error = t.run()
      if error != null
        $(@errList).append '<li>' + error + '</li>'
        valid = false
    valid

emailRegex = /^([a-zA-Z0-9!#$%&'*\+\-\/=?^_`{|}~]+(?:\.*[a-zA-Z0-9!#$%&'*\+\-\/=?^_`{|}~]+)*)@([a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)+)$/
upperCaseRegex = /.*[A-Z]+.*/
digitRegex = /.*[0-9]+.*/

v = new Validator 'ul.errors'
v.addTest new Test 'input[type=text]', ((s) -> emailRegex.test s), 'Please enter a valid email address'
v.addTest new Test 'input[type=password]', ((s) -> s.length >= 8), 'Your password should be at least 8 characters long'
v.addTest new Test 'input[type=password]', ((s) -> upperCaseRegex.test s), 'Your password should contain at least one capital letter'
v.addTest new Test 'input[type=password]', ((s) -> digitRegex.test s), 'Your password should contain at least one number (0-9)'

$('ul.errors').empty()
$('input[type=submit]').click (e) ->
  if not v.check()
    e.preventDefault()
  else
    $('form').submit()
    alert 'Sign in successful!'
  null
