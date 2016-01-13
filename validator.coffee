emailPattern = /// ^ #begin of line
  ([\w.-]+)         #one or more letters, numbers, _ . or -
  @                 #followed by an @ sign
  ([\w.-]+)         #then one or more letters, numbers, _ . or -
  \.                #followed by a period
  ([a-zA-Z.]{2,6})  #followed by 2 to 6 letters or periods
  $ ///i            #end of line and ignore case

passwordCapitalPattern = /(.*[A-Z].*)/
passwordDigitPattern = /(.*[\d].*)/

$('ul.errors li').hide()
 
$('form').submit ->
  $('ul.errors li').hide()
  email = $('input[type="text"]').val()

  if !emailPattern.test(email)
    $('ul li:nth-child(1)').show()

  password = $('input[type="password"]').val()

  if password.length < 8
    $('ul li:nth-child(2)').show()

  if !passwordCapitalPattern.test(password)
    $('ul li:nth-child(3)').show()

  if !passwordDigitPattern.test(password)
    $('ul li:nth-child(4)').show()
  return false