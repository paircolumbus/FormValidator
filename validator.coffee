$(".errors li").hide

->
  $("form").submit = (event) ->

    is_valid = false
    $(".errors li").hide

    email = $("input[placeholder='Email']").val
    password = $("input[placeholder='Password']").val

    if !check_email(email)
      is_valid = false
      $(".errors li:nth-child(1)").show

    if !check_long_enough(password)
      is_valid = false
      $(".errors li:nth-child(2)").show

    if !check_is_capital(password)
      is_valid = false
      $(".errors li:nth-child(3)").show

    if !check_is_number(password)
      is_valid = false
      $(".errors li:nth-child(4)").show

    if !is_valid
      event.stopPropagation
      event.preventDefault


check_email = (email) ->
  /[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.[a-zA-Z0-9-._]/.test(email)

check_is_number = (password) ->
  /\d/.test(password)

check_long_enough = (password) ->
  password.length >= 8;

check_is_capital = (password) ->
  /[A-Z]/.test(password)
