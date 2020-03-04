window.onload = function() {
    zoomwall.create(document.getElementById('gallery'), true);

};

$(document).ready(function () {
    scroll();
    mainStick();
    goTopButton();
    obslugaGalerii();
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
        $(this).siblings().css('opacity', 0.85);
    }, function () {
        $(this).siblings().css('opacity', 1);
    })
}