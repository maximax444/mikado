
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
    let map = $('.home-map__map');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        map.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
    });
}