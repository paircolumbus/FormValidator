error_display = (el) -> el.css('display', 'auto')
error_hide = (el) -> el.css('display', 'none')

form = $('form[name="sign_in"]')
email_field = form.children().eq(0)
pwd_field = form.children().eq(2)
submit_button = $('input[type="submit"]')

error_list = $('.errors').children()

error_hide error_list


$( ->
  form.submit( ->

    email = email_field.val()
    pwd = pwd_field.val()
    email_regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
    conditions = [
      {
        condition: (email.match email_regex) != null
        error_no: 0
      }, {
        condition: pwd.length >= 8
        error_no: 1
      }, {
        condition: (pwd.match /[A-Z]/) != null
        error_no: 2
      }, {
        condition: (pwd.match /\d/) != null
        error_no: 3
      }
    ]

    console.log conditions

    (error_hide error_list.eq(x.error_no)) for x in conditions
    (
      if x.condition
        error_hide error_list.eq(x.error_no)
      else
        error_display error_list.eq(x.error_no)
    ) for x in conditions

    if conditions.every((el) -> el.condition == true)
      alert "Success"

  )
  true



)
