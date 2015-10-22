$('ul.errors li').hide()

$ ->
  $('form').submit ->
    $('ul.errors li').hide()

    # validate email
    email = $('input[type="text"]').val();
    email_test = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if !email_test.test(email)
      $('ul li:first-child').show()

    # validate password
    password = $('input[type="password"]').val()
    if password.length < 8
      $('ul li:nth-child(2)').show()
    if password == password.toLowerCase()
      $('ul li:nth-child(3)').show()
    if password == password.replace(/[0-9]/g, ' ')
      $('ul li:nth-child(4)').show()
    return
  return
