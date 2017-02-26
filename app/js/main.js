$(function() {
    console.log('in main.js!');
});
$(document).ready(function() {
    $('body').on('mousewheel', function(event) {
        console.log(event.deltaY);
    });
}); // --> ready.mousewheel;


$(document).ready(function() {
    /*------------- mousewheel (скрол) -------------*/
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

$(".header__tel .tab_item").not(":first").hide();
$(".header__tel .header-tabs__wrapper .tab").click(function() {
    $(".header__tel .header-tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".header__tel .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".header__description .tab_item").not(":first").hide();
$(".header__description .description-tabs__wrapper .tab").hover(function() {
    $(".header__description .description-tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".header__description .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

/*
$(document).ready(function() {

    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({ until: austDay, format: 'yowdHMS' });

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function(direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, { offset: 100 });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function() {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 4
    });
    owl.on("mousewheel", ".owl-wrapper", function(e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function() {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function() {
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function() {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});
*/
