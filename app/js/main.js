$("form").submit(function() {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
        type: "POST",
        url: 'php/mail.php',
        data: formNm.serialize(),
        success: function(data) {
            // Вывод текста результата отправки
            $(formNm).html(data);
        },
        error: function(jqXHR, text, error) {
            // Вывод текста ошибки отправки
            $(formNm).html(error);
        }
    });
    return false;
});

$(".header__description .tab_item").not(":first").hide();
$(".header__description .description-tabs__wrapper .tab").click(function() {
    $(".header__description .description-tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".header__description .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
