
$('.contacts__cities-title').on('click', function() {
 $(this).closest('.contacts__cities-block').toggleClass('active');
 if ($(this).closest('.contacts__cities-block').hasClass('active')) {
  let h = $(this).next('.contacts__cities-cont').find('a').length * 22 + 5;
  $(this).next('.contacts__cities-cont').css('height', h+ 'px');
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
$('.contacts__curr').on('click', function(){
 if ($(window).width() <= 767) {
  $('.contacts__cities').toggleClass('active');
 }
});