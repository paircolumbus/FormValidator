class Validator
    constructor: (@input, @tests) ->

    validate: ->

        passing = true
        @errorMessages = []

        for test in @tests
            if not test.passes()
                passing = false
                @errorMessages.push test.errorMessage

        return passing


class EmailValidator extends Validator

    validate: ->
        ampersandAndPeriodTest = new Test(new RegExp("^([\\w.-]+)@([\\w.-]+)\\.([\\w.-]+)"), @input, "Invalid Email Address. Must have an ampersand and a period.")

        @tests = [ampersandAndPeriodTest]

        super


class PasswordValidator extends Validator

    validate: ->
        lengthTest = new Test(new RegExp("^(.+){8,}"), @input, "Password must be at least 8 characters long.")
        capitalTest = new Test(new RegExp(".*[A-Z]+.*"), @input, "Password must have at least one capital letter.")
        numberTest = new Test(new RegExp(".*[0-9]+.*"), @input, "Password must have at least one number.")

        @tests = [lengthTest, capitalTest, numberTest]

        super


class Test

    constructor: (@regex, @input, @errorMessage) ->

    passes: ->
        @regex.test @input


errorMessageDomElement = $("ul.errors")
errorMessageDomElement.empty()

form = $('form[name="sign_in"]')

form.submit ->

    errorMessageDomElement.empty()

    email = form.find("input[type=text]").val()
    password = form.find("input[type=password]").val()

    emailValidator = new EmailValidator email
    passwordValidator = new PasswordValidator password

    validators = [emailValidator, passwordValidator]

    validationResults = validators.map (validator) -> validator.validate()
    errorMessages = (validators.map (validator) -> validator.errorMessages).reduce (a, b) -> a.concat b

    for message in errorMessages
        liElement = "<li>" + message  + "</li>"
        errorMessageDomElement.append liElement
