
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
$('.brands__wrap a, .brands-exc__wrap a').on('click', function (e) {
    e.preventDefault();
    $('.overlay-brand').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});

$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.overlay-brand').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-brand').removeClass('overlay-active');
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
    $(".about-features__wrap").slick({
        slide: ".about-features__block",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".home-features_left1",
        nextArrow: ".home-features_right1"
    });
    $(".about-last .zekkert-main__wrap").slick({
        slide: ".about-last__block",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".home-features_left2",
        nextArrow: ".home-features_right2"
    });

}
if ($(window).width() <= 767) {
    var items = $('.brands__wrap a'),
        per = 20,
        i = 1,
        total = 0;
    $('.brands__btn').on('click', function (e) {
        e.preventDefault();
        total = per * (i++);
        items.slice(0, total).css('display', 'block');
        $(this)[total >= items.length ? 'hide' : 'show']();
    }).click();
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

$('.brands-top__list-title').on('click', function () {
    $(this).next('.brands-top__drop').toggleClass('active');
});
$('.brands-top__drop a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.brands-top__drop').removeClass('active');
    $(this).closest('.brands-top__list').find('.brands-top__list-title span').html($(this).html());
    $('.brands-top__type').val($(this).html());
});
$(".about-history__wrap").niceScroll({
    cursorcolor: "#32A5EB",
    cursorwidth: "4px",
    cursorborder: "0",
    autohidemode: false,
    railpadding: { top: -30, right: 0, left: 0, bottom: 0 }
});
$(".about-history__wrap").niceScroll().scrollstart(function (info) {
    $('.nicescroll-cursors').css('left', (info.current.x / ($(".about-history__all").innerWidth() - $(".container").innerWidth())) * 70 + '%')


});