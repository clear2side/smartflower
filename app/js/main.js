$(document).ready(function() {

    /*------------- mousewheel (скрол) -------------*/
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
    /*------- сайт скролиться по 100% секциям ------*/
    var
        screen = 0,
        container = $('.visible__page'),
        pages = $('.page'),
        inscroll = false;

    $('page:first-child').addClass('active');
    $('body').on('mousewheel', function(event) {
        var
            activePage = pages.filter('.active');
        if (!inscroll) {
            inscroll = true;
            if (event.deltaY > 0) {
                if (activePage.prev().length) {
                    screen--;
                }
            } else {
                if (activePage.next().length) {
                    screen++;
                }
            }
        }
        var
            position = (-screen * 100) + '%';
        pages.eq(screen).addClass('active').siblings().removeClass('active');
        container.css('top', position);

        setTimeout(function() {
            inscroll = false;
        }, 500);
    })
});

//Функция отображения PopUp
function PopUpShow() {
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
}

$("form").submit(function() {
    $.ajax({
        type: "GET",
        url: "mail.php",
        data: $("form").serialize()
    }).done(function() {
        alert("Спасибо за заявку!");
        setTimeout(function() {}, 1000);
    });
    return false;
});

$(".header__description .tab_item").not(":first").hide();
$(".header__description .description-tabs__wrapper .tab").click(function() {
    $(".header__description .description-tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".header__description .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
