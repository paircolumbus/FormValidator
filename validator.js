$(function(){
    $("li").hide();

    $("form").submit(function(event) {
        $("li").hide();

        var email =     $($("input")[0]).val();
        var password =  $($("input")[1]).val();

        if (!email.match(/[\w\.]+@[\w\.]+\.[\w\.]+/)) {
            $($("li")[0]).show();
            event.preventDefault();
        }

        if (password.length < 8) {
            $($("li")[1]).show();
            event.preventDefault();
        }

        if (!password.match(/[A-Z]/)) {
            $($("li")[2]).show();
            event.preventDefault();
        }

        if (!password.match(/\d/)) {
            $($("li")[3]).show();
            event.preventDefault();
        }
    });
});
