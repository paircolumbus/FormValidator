valid_email_local_part = (lpart) ->
    if lpart is undefined || lpart.length == 0 || lpart.length >64
        return false
    # Localpart is one or more atext pieces separated by .s
    return lpart.match(/^[a-zA-Z0-9!#\$\%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#\$\%&'*+\-/=?^_`{|}~]+)*$/)

valid_domain_label = (label) ->
    if label is undefined || label.length > 63 || label.length == 0
        return false
    return label.match(/^[a-zA-Z0-9](?:[-a-zA-Z0-9]*[a-zA-Z0-9])?$/)

valid_email_domain = (domain) ->
    if domain is undefined || domain.length > 255 || domain.length == 0
        return false
    # a domain is one or more domain labels separated by .s
    labels = domain.split(/\./)
    return ($.grep( labels, (l)->return !valid_domain_label(l) )).length == 0

valid_email = (email) ->
    parts = email.split('@')
    return false if !valid_email_local_part(parts[0])
    return valid_email_domain(parts[1])

display_error_unless = (condition, index) ->
    select = '.errors li:eq(' + index + ')'
    if(condition)
        $(select).hide()
    else
        $(select).show()


$(() ->
  $('.errors li').hide()
  $('input[type="text"]').blur((evt) ->
      email = evt.target.value
      display_error_unless( valid_email(email), 0 )
  )
  $('input[type="password"]').blur((evt) ->
     password = evt.target.value
     display_error_unless( password.length >= 8, 1 )
     display_error_unless( password.match(/[A-Z]/), 2 )
     display_error_unless( password.match(/\d/), 3 )
  )
  $('form[name="sign_in"]').submit((evt) ->
    if $('.errors li').is(':visible')
        evt.preventDefault()
        return false
    return true
  )
)
