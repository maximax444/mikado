
$('.contacts__cities-title').on('click', function () {
    $(this).closest('.contacts__cities-block').toggleClass('active');
    if ($(this).closest('.contacts__cities-block').hasClass('active')) {
        let h = $(this).next('.contacts__cities-cont').find('a').length * 22 + 5;
        $(this).next('.contacts__cities-cont').css('height', h + 'px');
        $(this).next('.contacts__cities-cont').slideDown();
    } else {
        $(this).next('.contacts__cities-cont').slideUp();
    }

});

$('.modal-call').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $(this).closest('.overlay').removeClass('overlay-active');
});
$('.contacts__curr').on('click', function () {
    if ($(window).width() <= 767) {
        $('.contacts__cities').toggleClass('active');
    }
});
$('.select').on('click', function (e) {
    $(this).toggleClass('active');
    $('.select').not($(this)).removeClass('active');
});
$('.select__drop li').on('click', function (e) {
    $(this).closest('.select').find('input').val($(this).html());
    if ($(window).width() <= 575) {
        $(this).closest('.select').find('span').hide();
        $(this).closest('.select').find('input').css('padding', '4.69vw 12.25vw 4.69vw 6.25vw');
    }

});
$('.big-placeholder input').on('input', function () {
    if ($(this).val() != "") {
        $(this).next('span').addClass('hide');
        $(this).css('padding', '4.69vw 6.25vw');
    } else {
        $(this).next('span').removeClass('hide');
        $(this).css('padding', '7.81vw 6.25vw');
    }
});
$(".main").slick({
    slide: ".main__slide",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: ".main_left",
    nextArrow: ".main_right"
});
let counter = document.querySelectorAll('.counter');
let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
window.addEventListener('scroll', function () {
    if (limit == counter.length) { return; }

    for (let i = 0; i < counter.length; i++) {
        console.log(1);
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if (pos < win && counter[i].dataset.stop === "0") {
            counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
            let x = 0;
            limit++; // Счетчик будет запущен, увеличиваем переменную на 1
            let int = setInterval(function () {
                // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
                x = x + Math.ceil(counter[i].dataset.to / 25);
                counter[i].innerText = x.toLocaleString();
                if (x > counter[i].dataset.to) {
                    //Как только досчитали - стираем интервал.
                    counter[i].innerText = (counter[i].dataset.to / 1).toLocaleString();
                    clearInterval(int);
                }
            }, 30);
        }
    }
});
if (screen.width >= 1200) {
    let bg = $('.login__img img');
    let bg2 = $('.register__img img');
    let bg3 = $('.programm-top__img img');
    let bg4 = $('.main__img img');
    let map = $('.home-map__map');
    let zekk = $('.zekkert-top__img img');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg2.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg3.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg4.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        zekk.css('transform', 'translateX(-' + x * 30 + 'px)');
        map.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
    });
}
if ($(window).width() <= 575) {
    $(".home-features__wrap").slick({
        slide: ".home-features__block",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".home-features_left",
        nextArrow: ".home-features_right"
    });
}
$('.header-burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__drop').toggleClass('active');
});
$('.brands a[data-start]').each(function () {
    $(this).html("<div class='brands__letter'>" + $(this).attr('data-start') + '</div>' + $(this).html());
});
if ($(window).width() <= 767) {
    $('.header__drop').html('<ul class="nav__lang">' + $('.nav__lang').html() + '</ul><ul class="nav__menu">' + $('.nav__menu').html() + '</ul><div class="header__btns">' + $('.header__btns').html() + '</div>');
    $('.nav__menu span').on('click', function () {
        $(this).toggleClass('active');
    });
}