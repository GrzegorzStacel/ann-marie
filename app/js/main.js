$(document).ready(function () {
    scroll();
    goTopButton();
    sendingMail();
    formIsFilled();
    slickConfigure();
    click_hamburger();
    toggle_viewport();
    gallery();
})

// start Gallery
function gallery() {
    $("#nanogallery2").nanogallery2({
        // ### gallery settings ### 
        thumbnailHeight: 300,
        thumbnailWidth: 300,
        thumbnailDisplayTransition: 'slideUp',
        thumbnailDisplayInterval: 50,
        thumbnailHoverEffect2: 'borderLighter|borderLighter|image_scale_1.1_1',
        galleryFilterTags: true,
        thumbnailLabel: {
            display: true,
            position: 'overImageOnTop'
        },
        viewerToolbar: {
            display: false,
        },
        viewerTools: {
            topLeft: 'pageCounter',
            topRight: 'closeButton'
        },
        viewerTheme: "border",


        // ### gallery content ### 
        items: [

            // brow
            {
                src: 'img/gallery/gallery_brow_01_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_brow_01_w480_compressed.jpg',
                tags: 'Brwi'
            },
            {
                src: 'img/gallery/gallery_brow_02_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_brow_02_w480_compressed.jpg',
                tags: 'Brwi'
            },
            {
                src: 'img/gallery/gallery_brow_03_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_brow_03_w480_compressed.jpg',
                tags: 'Brwi'
            },
            {
                src: 'img/gallery/gallery_brow_04_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_brow_04_w480_compressed.jpg',
                tags: 'Brwi'
            },
            {
                src: 'img/gallery/gallery_brow_05_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_brow_05_w480_compressed.jpg',
                tags: 'Brwi'
            },


            // make up


            {
                src: 'img/gallery/gallery_makeup_01_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_01_w480_compressed.jpg',
                tags: 'Makijaż'
            },
            {
                src: 'img/gallery/gallery_makeup_02_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_02_w480_compressed.jpg',
                tags: 'Makijaż'
            },
            {
                src: 'img/gallery/gallery_makeup_03_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_03_w480_compressed.jpg',
                tags: 'Makijaż'
            },
            {
                src: 'img/gallery/gallery_makeup_04_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_04_w480_compressed.jpg',
                tags: 'Makijaż'
            },
            {
                src: 'img/gallery/gallery_makeup_05_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_05_w480_compressed.jpg',
                tags: 'Makijaż'
            },
            {
                src: 'img/gallery/gallery_makeup_06_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_makeup_06_w480_compressed.jpg',
                tags: 'Makijaż'
            },


            // nails


            {
                src: 'img/gallery/gallery_nails_01_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_01_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_02_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_02_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_03_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_03_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_04_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_04_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_05_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_05_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_06_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_06_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_07_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_07_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_08_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_08_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_09_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_09_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_10_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_10_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_11_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_11_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_12_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_12_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_13_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_13_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_14_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_14_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_15_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_15_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_16_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_16_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_17_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_17_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_18_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_18_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_19_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_19_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_20_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_20_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_21_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_21_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_22_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_22_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_23_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_23_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_24_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_24_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_25_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_25_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_26_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_26_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_27_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_27_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_28_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_28_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_29_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_29_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_30_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_30_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_31_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_31_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_32_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_32_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_33_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_33_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_34_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_34_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_35_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_35_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_36_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_36_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_37_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_37_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_38_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_38_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_39_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_39_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_40_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_40_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_41_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_41_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_42_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_42_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_43_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_43_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_44_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_44_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_45_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_45_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_46_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_46_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_47_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_47_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_48_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_48_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_49_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_49_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_50_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_50_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_51_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_51_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_52_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_52_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_53_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_53_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_54_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_54_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_55_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_55_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_56_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_56_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_57_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_57_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_58_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_58_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_59_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_59_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_60_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_60_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_61_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_61_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_62_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_62_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_63_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_63_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_64_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_64_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_65_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_65_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_66_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_66_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_67_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_67_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_68_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_68_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_69_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_69_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_70_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_70_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_71_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_71_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_72_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_72_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_73_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_73_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_74_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_74_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_75_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_75_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_76_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_76_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_77_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_77_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_78_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_78_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_79_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_79_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_80_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_80_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_81_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_81_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_82_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_82_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_83_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_83_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_84_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_84_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_85_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_85_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
            {
                src: 'img/gallery/gallery_nails_86_w1920_compressed.jpg',
                srct: 'img/gallery/gallery_nails_86_w480_compressed.jpg',
                tags: 'Paznokcie'
            },
        ]
    });
}

// start Navigation
function click_hamburger() {
    $('.menu_wrapper .hamburger').on('click', function clicker() {
        $('#menu').toggleClass('show');
    })
}

function toggle_viewport() {
    var mobileViewport = window.matchMedia("(max-width: 1240px)");

    // Podpięcie eventów dla mobilków (jednorazowe po załadowaniu)
    if (mobileViewport.matches) {
        $('#main_first .expand_sec').on('click', function () {
            $('#main_second').toggleClass('show_main_sec');
        })

        cliks_nav();

        // Nie mam pojęcia dlaczego to nie działa...
        // $('#main_second li').on('click', 'ul', function () {
        //     console.log(this);
        //     $(this).toggleClass('show_main_thi');
        // })
    }

    // Podbpięcie / odpięcie eventów dla wszystkich rozmiarów (wielokrotne po każdej zmianie szerokości okna)
    mobileViewport.addListener(function (mq) {
        if (mq.matches) {

            $('#main_first .expand_sec').on('click', function () {
                $('#main_second').toggleClass('show_main_sec');
            })

            cliks_nav();

        } else {
            $('#main_first .expand_sec, #main_first .expand_thi').unbind('click')

            $('#main_second').removeClass('show_main_sec');
            $('.main_third').removeClass('show_main_thi');

            cliks_nav()
        }
    });
}

function cliks_nav() {
    $('#main_first .up_nav_1').on('click', function () {
        $('.down_nav_1').toggleClass('show_main_thi');
    })

    $('#main_second .up_nav_2').on('click', function () {
        $('.down_nav_2').toggleClass('show_main_thi');
    })

    $('#main_second .up_nav_3').on('click', function () {
        $('.down_nav_3').toggleClass('show_main_thi');
    })

    $('#main_second .up_nav_4').on('click', function () {
        $('.down_nav_4').toggleClass('show_main_thi');
    })
}
// end Navigation


// start Comments
function slickConfigure() {
    $('.comment').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        arrows: false,
    });
}
// end Comments


// start Button - jump to top of page
function goTopButton() {
    $(window).scroll(function () {
        if ((document.documentElement.scrollTop || document.body.scrollTop) < 100) {
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
        }, 200, 'linear');
    });
}
// end Button - jump to top of page


// start form PHP
function formIsFilled() {
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

function sendingMail() {
    var infoDisplayer = $(".formMessage");
    var form = $("#form1");

    form.on('submit', function (e) {
        $.ajax({
            url: "php/mail.php",
            dataType: "JSON",
            type: "post",
            data: $(this).serialize(),
            beforeSend: function () {
                infoDisplayer.hide();
                infoDisplayer.removeClass("ok error");
                infoDisplayer.text('trwa wysyłanie danych...').slideDown(300);
                console.log("beforeSend");
            },
            success: function (obj) {
                if (obj.type == "ok") {
                    infoDisplayer.addClass("ok").removeClass("error").html(obj.text).delay(4000).slideUp(500);
                    // form.get(0).reset();
                    console.log("success - ok");
                } else {
                    infoDisplayer.addClass("error").removeClass("ok").html(obj.text);
                    console.log("success - error");
                }
            },
            error: function () {
                infoDisplayer.addClass("error").removeClass("ok").html("Wystąpił błąd podczas wysyłania informacji.");
                console.log("error");
            },
            complete: function () {
                // infoDisplayer.fadeIn();
                console.log("complete");
            }
        });
        e.preventDefault();
    })
}
// end form PHP