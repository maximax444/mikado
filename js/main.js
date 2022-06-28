
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
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const length_width = 1;
let way = "top";
let way2 = "top";
let way3 = "top";
let way4 = "top";
let wayPart = 1;
let snakeCoord = [];
let snakeCoord2 = [];
let snakeCoord3 = [];
let snakeCoord4 = [];
let snakeCoord5 = [];
snakeCoord.push({ x: 598, y: 149, z: 1 })
for (let i = 0; i < 200; i++) {
    snakeCoord.push({ x: 598, y: 150 + i, z: 0 })
}
snakeCoord.push({ x: 598, y: 350, z: 1 })
for (let j = 0; j < 200; j++) {
    snakeCoord2.push({ x: 547, y: 100 + j, z: 0 })
}
for (let i = 0; i < 200; i++) {
    snakeCoord3.push({ x: 497, y: 150 + i, z: 0 })
}
for (let j = 0; j < 200; j++) {
    snakeCoord4.push({ x: 447, y: 100 + j, z: 0 })
}
for (let j = 0; j < 340; j++) {
    snakeCoord5.push({ x: 395, y: 10 + j, z: 0 })
}
function drawSnakePart(snakePart) {
    ctx.beginPath();
    ctx.fillStyle = "#32A5EB";
    if (snakePart.z == 1) {
        ctx.fillRect(snakePart.x, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x - 1, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x + 1, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x, snakePart.y - 1, 1, 1);
        ctx.fillRect(snakePart.x, snakePart.y + 1, 1, 1);
        ctx.fillRect(snakePart.x, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x - 2, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x + 2, snakePart.y, 1, 1);
        ctx.fillRect(snakePart.x, snakePart.y - 2, 1, 1);
        ctx.fillRect(snakePart.x, snakePart.y + 2, 1, 1);
        ctx.fillRect(snakePart.x - 1, snakePart.y - 1, 1, 1);
        ctx.fillRect(snakePart.x + 1, snakePart.y + 1, 1, 1);
        ctx.fillRect(snakePart.x - 1, snakePart.y + 1, 1, 1);
        ctx.fillRect(snakePart.x + 1, snakePart.y - 1, 1, 1);
    } else {
        ctx.fillRect(snakePart.x, snakePart.y, length_width, length_width);
    }

    ctx.closePath();
}

function drawSnake() {
    snakeCoord.forEach(drawSnakePart);
    snakeCoord2.forEach(drawSnakePart);
    snakeCoord3.forEach(drawSnakePart);
    snakeCoord4.forEach(drawSnakePart);
    snakeCoord5.forEach(drawSnakePart);
}

function moveSnake(dx, dy) {
    const head = {
        x: snakeCoord[0].x + dx,
        y: snakeCoord[0].y + dy,
        z: 1
    };
    snakeCoord[1].z = 0;
    snakeCoord[snakeCoord.length - 2].z = 1;
    snakeCoord.unshift(head);
    snakeCoord.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    setTimeout(function () {
        if (head.y < 1 && way == "top") {
            moveSnake(-length_width, 0);
            way = "left"
        } else if (head.x < 560 && way == "left") {
            moveSnake(0, length_width);
            way = "down"
        } else if (head.y > 317 && way == "down") {
            moveSnake(length_width, 0);
            way = "right"
        } else if (head.x > 598 && way == "right") {
            moveSnake(0, -length_width);
            way = "top"
        } else {
            moveSnake(dx, dy);
        }

    }, 1);
}
function moveSnake2(dx, dy) {
    const head = {
        x: snakeCoord2[0].x + dx,
        y: snakeCoord2[0].y + dy,
        z: 1
    };
    snakeCoord2[1].z = 0;
    snakeCoord2[snakeCoord2.length - 2].z = 1;
    snakeCoord2.unshift(head);
    snakeCoord2.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    setTimeout(function () {
        if (head.y < 1 && way2 == "top") {
            moveSnake2(-length_width, 0);
            way2 = "left"
        } else if (head.x < 520 && way2 == "left") {
            moveSnake2(0, length_width);
            way2 = "down"
        } else if (head.y > 317 && way2 == "down") {
            moveSnake2(length_width, 0);
            way2 = "right"
        } else if (head.x > 547 && way2 == "right") {
            moveSnake2(0, -length_width);
            way2 = "top"
        } else {
            moveSnake2(dx, dy);
        }

    }, 20);
}
function moveSnake3(dx, dy) {
    const head = {
        x: snakeCoord3[0].x + dx,
        y: snakeCoord3[0].y + dy,
        z: 1
    };
    snakeCoord3[1].z = 0;
    snakeCoord3[snakeCoord3.length - 2].z = 1;
    snakeCoord3.unshift(head);
    snakeCoord3.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    setTimeout(function () {
        if (head.y < 1 && way3 == "top") {
            moveSnake3(-length_width, 0);
            way3 = "left"
        } else if (head.x < 480 && way3 == "left") {
            moveSnake3(0, length_width);
            way3 = "down"
        } else if (head.y > 317 && way3 == "down") {
            moveSnake3(length_width, 0);
            way3 = "right"
        } else if (head.x > 497 && way3 == "right") {
            moveSnake3(0, -length_width);
            way3 = "top"
        } else {
            moveSnake3(dx, dy);
        }

    }, 10);
}

function moveSnake4(dx, dy) {
    const head = {
        x: snakeCoord4[0].x + dx,
        y: snakeCoord4[0].y + dy,
        z: 1
    };
    snakeCoord4[1].z = 0;
    snakeCoord4[snakeCoord4.length - 2].z = 1;
    snakeCoord4.unshift(head);
    snakeCoord4.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    setTimeout(function () {
        if (head.y < 1 && way4 == "top") {
            moveSnake4(-length_width, 0);
            way4 = "left"
        } else if (head.x < 438 && way4 == "left") {
            moveSnake4(0, length_width);
            way4 = "down"
        } else if (head.y > 317 && way4 == "down") {
            moveSnake4(length_width, 0);
            way4 = "right"
        } else if (head.x >= 447 && way4 == "right") {
            moveSnake4(0, -length_width);
            way4 = "top"
        } else {
            moveSnake4(dx, dy);
        }

    }, 10);
}
function moveSnake5(dx, dy) {
    const head = {
        x: snakeCoord5[0].x + dx,
        y: snakeCoord5[0].y + dy,
        z: 1
    };
    snakeCoord5[1].z = 0;
    snakeCoord5[snakeCoord5.length - 2].z = 1;
    snakeCoord5.unshift(head);
    snakeCoord5.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    setTimeout(function () {
        if (head.y < 1 && wayPart == 1) {
            moveSnake5(-length_width, 0);
            wayPart = 2
        } else if (head.x < 268 && wayPart == 2) {
            moveSnake5(-0.37, 1);
            wayPart = 3
        } else if (head.x < 199 && wayPart == 3) {
            moveSnake5(-0.37, -1);
            wayPart = 4
        } else if (head.y < 1 && wayPart == 4) {
            moveSnake5(-length_width, 0);
            wayPart = 5
        } else if (head.x < 1 && wayPart == 5) {
            moveSnake5(0, 1);
            wayPart = 6
        } else if (head.y > 317 && wayPart == 6) {
            moveSnake5(length_width, 0);
            wayPart = 7
        } else if (head.x > 90 && wayPart == 7) {
            moveSnake5(0, -1);
            wayPart = 8
        } else if (head.y < 125 && wayPart == 8) {
            moveSnake5(0.37, 1);
            wayPart = 9
        } else if (head.y > 317 && wayPart == 9) {
            moveSnake5(length_width, 0);
            wayPart = 10
        } else if (head.x > 234 && wayPart == 10) {
            moveSnake5(0.37, -1);
            wayPart = 11
        } else if (head.x > 307 && wayPart == 11) {
            moveSnake5(0, 1);
            wayPart = 12
        } else if (head.y > 317 && wayPart == 12) {
            moveSnake5(1, 0);
            wayPart = 13
        } else if (head.x >= 395 && wayPart == 13) {
            moveSnake5(0, -1);
            wayPart = 1
        } else {
            moveSnake5(dx, dy);
        }

    }, 1);
}

function keyPress(e) {

    if (snakeCoord[0].y - length_width !== snakeCoord[1].y) {
        moveSnake(0, -length_width);
    }
    if (snakeCoord2[0].y - length_width !== snakeCoord2[1].y) {
        moveSnake2(0, -1);
    }
    if (snakeCoord3[0].y - length_width !== snakeCoord3[1].y) {
        moveSnake3(0, -length_width);
    }
    if (snakeCoord4[0].y - length_width !== snakeCoord4[1].y) {
        moveSnake4(0, -1);
    }
    if (snakeCoord5[0].y - length_width !== snakeCoord5[1].y) {
        moveSnake5(0, -1);
    }
}


drawSnake();
keyPress();
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
    autoplaySpeed: 225000,
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
// $(".about-history__wrap").niceScroll({
//     cursorcolor: "#32A5EB",
//     cursorwidth: "4px",
//     cursorborder: "0",
//     autohidemode: false,
//     cursorfixedheight: 70,
//     railpadding: { top: -30, right: 1215, left: 0, bottom: 0 }
// });
// $(window).on('resize', function () {
//     var win = $(this).width() - 685;
//     $(".about-history__wrap").getNiceScroll().remove();
//     $(".about-history__wrap").niceScroll({
//         cursorcolor: "#32A5EB",
//         cursorwidth: "4px",
//         cursorborder: "0",
//         autohidemode: false,
//         cursorfixedheight: 70,
//         railpadding: { top: -30, right: win, left: 0, bottom: 0 }
//     });
// });
// $(".about-history__wrap").niceScroll().scrollstart(function (e, info) {
//     e.preventDefault();
//     $('.nicescroll-cursors').css('left', (info.current.x / ($(".about-history__all").innerWidth() - $(".container").innerWidth())) * 70 + '%')


// });
$(document).on({
    mouseenter: function () {
        $('.home-map__point[data-city="' + $(this).attr('data-tocity') + '"]').addClass('active');
    },
    mouseleave: function () {
        $('.home-map__point[data-city="' + $(this).attr('data-tocity') + '"]').removeClass('active');
    }
}, '.home-map .contacts__cities-title');

var $frame = $('.frame__wrap');
var $slidee = $('.frame');
var $wrap = $frame.parent();
$('input[type="tel"]').inputmask("+7 (999) 999-99-99");
// Call Sly on frame
$frame.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 3000,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
});

