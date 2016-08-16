$( document ).ready(function() {
    $(function () {
        $("#typed-tagline").typed({
            strings: [
                "Imagine. Create. Improve",
                "Нужен сайт? Мы сделаем",
                "Почему мы?",
                "Уникальный дизайн",
                "Грамотный код",
                "Поддержка и гарантия",
                "Остались вопросы? Звоните +375 33 332 19 44",
                "Ну, или читайте",
                "Мы молодая и дружная команда",
                "Творчески подходим к заданию",
                "С пользой для бизнеса",
                "И не боимся сложных задач!",
            ],
            typeSpeed: 35,
            backDelay: 500,
            loop: true,
        });
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 450) {
            $('.home__feedback-btn').addClass('home__feedback-btn_fixed').fadeIn(200);
        } else {
            $('.home__feedback-btn').removeClass('home__feedback-btn_fixed').fadeOut(150);
        }
    });
});