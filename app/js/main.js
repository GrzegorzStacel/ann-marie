window.onload = function() {
    zoomwall.create(document.getElementById('gallery'), true);

};

$(document).ready(function () {
    scroll();
    mainStick();
    goTopButton();
    obslugaGalerii();
    sendingMail();
    formIsFilled();
})

function mainStick() {
    $(window).scroll(function () {
        if ($('html, body').scrollTop() < 50) {
            // Odklejenie menu
            $('header .top-main').removeClass('stick');
        } else {
            // Przykleja menu
            $('header .top-main').addClass('stick');
        }
    })
}

function goTopButton() {
    $(window).scroll(function () {
        if ($('html, body').scrollTop() < 100) {
            $('.arrow').css({
                'transform': 'translateY(200px)',
            });
        } else {
            $('.arrow').css({
                'transform': 'translateY(0)',
                'transition': '1.2s'
            });
        }
    });

    $('.arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'linear');
    });
}

function obslugaGalerii() {
    $("#gallery img").hover(function () {
        $(this).siblings().css('opacity', 0.65);
    }, function () {
        $(this).siblings().css('opacity', 1);
    })
}

// Frmularz PHP - START

function formIsFilled() {
    console.log('im in')
    $('form input, form textarea').focus(function () {
        $(this).parent().addClass('focus');
    })
    $('form input, form textarea').focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass('filled');
        } else {
            $(this).parent().removeClass('focus');
        }
    })
}




function sendingMail(){
    var infoDisplayer = $(".formMessage");
    var form = $("#form1");
    

    form.on('submit', function (e){
        $.ajax({
                url: "php/mail.php",
                dataType: "JSON",
                type: "post",
                data:$(this).serialize(),
                beforeSend: function(){
                    infoDisplayer.hide();
                    infoDisplayer.removeClass("ok error");
                    infoDisplayer.text('trwa wysyłanie danych...').slideDown(300);
                    console.log("beforeSend");
                },
                success: function(obj){
                    if (obj.type=="ok")
                    {
                        infoDisplayer.addClass("ok").removeClass("error").html(obj.text).delay(4000).slideUp(500);
                        // form.get(0).reset();
                        console.log("success - ok");
                    } else
                    {
                       infoDisplayer.addClass("error").removeClass("ok").html(obj.text);
                       console.log("success - error");
                    }
                },
                error : function(){
                    infoDisplayer.addClass("error").removeClass("ok").html("Wystąpił błąd podczas wysyłania informacji.");
                    console.log("error");
                },
                complete: function(){
                   // infoDisplayer.fadeIn();
                   console.log("complete");
                }
           });
        e.preventDefault();
    })
}

// Frmularz PHP - END
