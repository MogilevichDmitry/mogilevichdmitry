$( document ).ready(function() {
    $(function () {
        $("#typed-tagline").typed({
            strings: [
                "Imagine. Create. Improve",
                "Нужен сайт? Мы сделаем",
                "Уникальный дизайн",
                "Грамотный код",
                "Поддержка и гарантия",
                "Остались вопросы? Звоните +375 33 332 19 44",
                "Ну, или читайте",
                "Мы молодая и дружная команда",
                "Творчески подходим к заданию",
                "С пользой для бизнеса",
                "И не боимся сложных задач!",
                "Наш подход к делу:"
            ],
            typeSpeed: 35,
            backDelay: 500,
            loop: true,
        });
    });
    $(window).bind('scroll', function () {
        if ($(window).width() > 1040) {
            if ($(window).scrollTop() > 450) {
                $('.common__feedback-btn').fadeIn(200);
            } else {
                $('.common__feedback-btn').fadeOut(200);
            }
        }
    });
});