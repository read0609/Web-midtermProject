var isClick__footer__share = false;
var arrow1 = false;
var arrow2 = false;
var arrow3 = false;
var arrow4 = false;

$('.footer__share').click(function() {
  if (!isClick__footer__share) {
    $('.footer__share__btn__ul').addClass('footer__share__btn__ul--display');
    isClick__footer__share = true;
  } else {
    $('.footer__share__btn__ul').removeClass('footer__share__btn__ul--display');
    isClick__footer__share = false;
  }
});

$('.index__arr__down1').click(function() {
  if (!arrow1) {
    $('.index__about__square1__content1').addClass('content_display');
    $('.index__arr__down1').addClass('index__arr__down--hide');
    $('.index__arr__up1').addClass('index__arr__down--display');
    arrow1 = true;
  }
});

$('.index__arr__up1').click(function() {
  if (arrow1) {
    $('.index__about__square1__content1').removeClass('content_display');
    $('.index__arr__down1').removeClass('index__arr__down--hide');
    $('.index__arr__up1').removeClass('index__arr__down--display');
    arrow1 = false;
  }
});
$('.index__arr__down2').click(function() {
  if (!arrow2) {
    $('.index__about__square2__content2').addClass('content_display');
    $('.index__arr__down2').addClass('index__arr__down--hide');
    $('.index__arr__up2').addClass('index__arr__down--display');
    arrow2 = true;
  }
});

$('.index__arr__up2').click(function() {
  if (arrow2) {
    $('.index__about__square2__content2').removeClass('content_display');
    $('.index__arr__down2').removeClass('index__arr__down--hide');
    $('.index__arr__up2').removeClass('index__arr__down--display');
    arrow2 = false;
  }
});
$('.index__arr__down3').click(function() {
  if (!arrow3) {
    $('.index__about__square3__content3').addClass('content_display');
    $('.index__arr__down3').addClass('index__arr__down--hide');
    $('.index__arr__up3').addClass('index__arr__down--display');
    arrow3 = true;
  }
});

$('.index__arr__up3').click(function() {
  if (arrow3) {
    $('.index__about__square3__content3').removeClass('content_display');
    $('.index__arr__down3').removeClass('index__arr__down--hide');
    $('.index__arr__up3').removeClass('index__arr__down--display');
    arrow3 = false;
  }
});
$('.index__arr__down4').click(function() {
  if (!arrow4) {
    $('.index__about__square4__content4').addClass('content_display');
    $('.index__arr__down4').addClass('index__arr__down--hide');
    $('.index__arr__up4').addClass('index__arr__down--display');
    arrow4 = true;
  }
});

$('.index__arr__up4').click(function() {
  if (arrow4) {
    $('.index__about__square4__content4').removeClass('content_display');
    $('.index__arr__down4').removeClass('index__arr__down--hide');
    $('.index__arr__up4').removeClass('index__arr__down--display');
    arrow4 = false;
  }
});

$(document).ready(function() {
  //when a hanburger menu is click
  $(".header__menu").click(function() {
    var $ul = $(".header__nav");
    //if menu is already active and click
    if ($ul.hasClass("menu-click")) {
      $ul.removeClass("menu-click");
      $ul.slideUp();
    } else {
      //if section is made active
      $ul.addClass("menu-click");
      $ul.slideDown();
      return false;
    }
  }); // end click event handler
});
