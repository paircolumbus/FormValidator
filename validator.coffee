
# The practical concern of name mangling
jQuery( -> (($) ->

  EMAIL_PATTERN = ///
    ^[\w-.]+    # Start with username for service
    @
    (?:\w+\.)+  # Domain name username is associated with
    [a-z]{2,}$  # End with TLD suffix
  ///i

  # Wrapper around a validation function (see isValidEmail, isMinimumLength, etc.) and
  # an HTML element, tying them together without have to modify the function object itself.
  class Validation
    constructor: (@validationFn, element) ->
      @element = $ element

    showElement: -> @element.show()
    hideElement: -> @element.hide()

    apply: (self, args) -> @validationFn.apply(self, args)

  toArray = (obj) -> [].slice.call(obj)

  # Checks if the given value is an array
  isArray = Array.isArray or (value) -> {}.toString.call(value) is '[object Array]'

  createObjectSelector = (selector) -> (fn) -> (obj) -> fn(obj[selector])

  # Takes a variable list of functions and returns a higher order function that accepts a callback and arguments.
  #
  # All functions are given the same arguments, the arguments initially passed in. The callback will receive
  # the most recently called function and it's returned value.
  sequential = ->
    fns = [arguments...]
    fns = arguments[0] if isArray(arguments[0])

    reducer = (cb) -> (args, fn) ->
      result = fn.apply(this, args) unless isArray args[0]
      result = fn.apply(this, args[0]) if isArray args[0]
      cb(fn, result)
      args

    (cb) ->
      initialArgs = [toArray(arguments)[1..]...]
      fns.reduce(reducer(cb), initialArgs)

  # Validation Functions

  isValidEmail =
    (email) -> EMAIL_PATTERN.test email

  isMinimumLength =
    (minLength) -> (text) -> text.length >= minLength

  hasCapitalLetter =
    (text) -> text.toLowerCase() isnt text

  hasDigit =
    (text) -> /[0-9]/.test text

  # Setup

  selectPassword = createObjectSelector('password')
  selectEmail = createObjectSelector('email')

  setup = ->
    # Select relevant form elements
    formElement = $('form[name="sign_in"]')
    emailField = formElement.find('input:text').first()
    passwordField = formElement.find('input:password').first()

    # Select error list and all list items under it
    errorList = $('ul.errors').children()
    [ validEmailReq, passwdLengthReq, passwdCapitalReq, passwdDigitReq ] = errorList

    # No errors at first
    errorList.hide()

    # Combines validations into a single validator. All validations receive the same arguments and
    # are executed in sequential order (according to the array).
    validator = sequential([
      new Validation(selectEmail(isValidEmail), validEmailReq),
      new Validation(selectPassword(isMinimumLength(8)), passwdLengthReq),
      new Validation(selectPassword(hasCapitalLetter), passwdCapitalReq),
      new Validation(selectPassword(hasDigit), passwdDigitReq),
    ])

    # Run validations on submit with form values
    formElement.submit (event) ->
      resultHandler = (validation, passed) ->
        validation.showElement() unless passed
        validation.hideElement() if passed

      fieldValues =
        email: emailField.val()
        password: passwordField.val()

      validator(resultHandler, fieldValues)
      event.preventDefault()

  setup()
)(jQuery))