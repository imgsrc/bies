;(function () {

    'use strict';


    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }

    $(".popup").magnificPopup();







    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("#call_modal").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $("#subm").toggle();
            $(".success").toggle();
            setTimeout(function () {
                $.magnificPopup.close();
                th.trigger("reset");
            }, 1500);
        });
        return false;
    });



    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });


    // Document on load.
    $(function () {
        //
    });


}());