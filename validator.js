function valid_email_local_part(lpart)
{
    if(lpart === undefined || lpart.length > 64 || lpart.length == 0)
        return false;
    // Localpart is one or more atext pieces separated by .s
    return lpart.match(/^[a-zA-Z0-9!#\$\%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#\$\%&'*+\-/=?^_`{|}~]+)*$/);
}
function valid_domain_label(label)
{
    if(label === undefined || label.length > 63 || label.length == 0)
        return false;
    return label.match(/^[a-zA-Z0-9](?:[-a-zA-Z0-9]*[a-zA-Z0-9])?$/);
}
function valid_email_domain(domain)
{
    if(domain === undefined || domain.length > 255 || domain.length == 0)
        return false;
    // a domain is one or more domain labels separated by .s
    var labels = domain.split(/\./)
    return ($.grep( labels, function(l){ return !valid_domain_label(l) } )).length == 0;
}
function valid_email(email)
{
    var parts = email.split('@');
    if(!valid_email_local_part(parts[0]))
        return false;
    return valid_email_domain(parts[1]);
}
function display_error_unless(condition, index)
{
    var select = '.errors li:eq(' + index + ')';
    if(condition)
        $(select).hide();
    else
        $(select).show();
}

$(function(){

  $('.errors li').hide();
  $('input[type="text"]').blur(function(evt){
      var email = evt.target.value;
      display_error_unless( valid_email(email), 0 );
  });
  $('input[type="password"]').blur(function(evt){
     var password = evt.target.value;
     display_error_unless( password.length >= 8, 1 );
     display_error_unless( password.match(/[A-Z]/), 2 );
     display_error_unless( password.match(/\d/), 3 );
  });
  $('form[name="sign_in"]').submit(function(evt){
    if( $('.errors li').is(':visible') ) {
        evt.preventDefault();
        return false;
    }
    return true;
  });
});
