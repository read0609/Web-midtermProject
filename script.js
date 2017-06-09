var isClick__footer__share = false;
var arrow1, arrow2, arrow3, arrow4, arrow5, arrow6, arrow7, arrow8, arrow9 = false;


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
    $('.index__about__square1__content1').addClass('content--display');
    $('.index__arr__down1').addClass('index__arr__down--hide');
    $('.index__arr__up1').addClass('index__arr__down--display');
    $('.sup1__data').addClass('sup1__data--display');
    arrow1 = true;
  }
});

$('.index__arr__up1').click(function() {
  if (arrow1) {
    $('.index__about__square1__content1').removeClass('content--display');
    $('.index__arr__down1').removeClass('index__arr__down--hide');
    $('.index__arr__up1').removeClass('index__arr__down--display');
    $('.sup1__data').removeClass('sup1__data--display');
    arrow1 = false;
  }
});
$('.index__arr__down2').click(function() {
  if (!arrow2) {
    $('.index__about__square2__content2').addClass('content--display');
    $('.index__arr__down2').addClass('index__arr__down--hide');
    $('.index__arr__up2').addClass('index__arr__down--display');
        $('.sup2__data').addClass('sup2__data--display');
    arrow2 = true;
  }
});

$('.index__arr__up2').click(function() {
  if (arrow2) {
    $('.index__about__square2__content2').removeClass('content--display');
    $('.index__arr__down2').removeClass('index__arr__down--hide');
    $('.index__arr__up2').removeClass('index__arr__down--display');
    $('.sup2__data').removeClass('sup2__data--display');
    arrow2 = false;
  }
});
$('.index__arr__down3').click(function() {
  if (!arrow3) {
    $('.index__about__square3__content3').addClass('content--display');
    $('.index__arr__down3').addClass('index__arr__down--hide');
    $('.index__arr__up3').addClass('index__arr__down--display');
    $('.sup3__data').addClass('sup3__data--display');
    arrow3 = true;
  }
});

$('.index__arr__up3').click(function() {
  if (arrow3) {
    $('.index__about__square3__content3').removeClass('content--display');
    $('.index__arr__down3').removeClass('index__arr__down--hide');
    $('.index__arr__up3').removeClass('index__arr__down--display');
    $('.sup3__data').removeClass('sup3__data--display');
    arrow3 = false;
  }
});
$('.index__arr__down4').click(function() {
  if (!arrow4) {
    $('.index__about__square4__content4').addClass('content--display');
    $('.index__arr__down4').addClass('index__arr__down--hide');
    $('.index__arr__up4').addClass('index__arr__down--display');
    $('.sup4__data').addClass('sup4__data--display');
    arrow4 = true;
  }
});

$('.index__arr__up4').click(function() {
  if (arrow4) {
    $('.content4').removeClass('content--display');
    $('.index__arr__down4').removeClass('index__arr__down--hide');
    $('.index__arr__up4').removeClass('index__arr__down--display');
    $('.sup4__data').removeClass('sup4__data--display');
    arrow4 = false;
  }
});

$('.index__arr__down5').click(function() {
  if (!arrow5) {
    $('.index__arr__down5').addClass('index__arr__down--hide');
    $('.index__arr__up5').addClass('index__arr__down--display');
    $('.sup5__data').addClass('sup5__data--display');
    arrow5 = true;
  }
});

$('.index__arr__up5').click(function() {
  if (arrow5) {
    $('.index__arr__down5').removeClass('index__arr__down--hide');
    $('.index__arr__up5').removeClass('index__arr__down--display');
    $('.sup5__data').removeClass('sup5__data--display');
    arrow5 = false;
  }
});

$('.index__arr__down6').click(function() {
  if (!arrow6) {
    $('.index__arr__down6').addClass('index__arr__down--hide');
    $('.index__arr__up6').addClass('index__arr__down--display');
    $('.sup6__data').addClass('sup6__data--display');
    arrow6 = true;
  }
});

$('.index__arr__up6').click(function() {
  if (arrow6) {
    $('.index__arr__down6').removeClass('index__arr__down--hide');
    $('.index__arr__up6').removeClass('index__arr__down--display');
    $('.sup6__data').removeClass('sup6__data--display');
    arrow6 = false;
  }
});

$('.index__arr__down7').click(function() {
  if (!arrow7) {
    $('.index__arr__down7').addClass('index__arr__down--hide');
    $('.index__arr__up7').addClass('index__arr__down--display');
    $('.sup7__data').addClass('sup7__data--display');
    arrow7 = true;
  }
});

$('.index__arr__up7').click(function() {
  if (arrow7) {
    $('.index__arr__down7').removeClass('index__arr__down--hide');
    $('.index__arr__up7').removeClass('index__arr__down--display');
    $('.sup7__data').removeClass('sup7__data--display');
    arrow7 = false;
  }
});

$('.index__arr__down8').click(function() {
  if (!arrow8) {
    $('.index__arr__down8').addClass('index__arr__down--hide');
    $('.index__arr__up8').addClass('index__arr__down--display');
    $('.sup8__data').addClass('sup8__data--display');
    arrow8 = true;
  }
});

$('.index__arr__up8').click(function() {
  if (arrow8) {
    $('.index__arr__down8').removeClass('index__arr__down--hide');
    $('.index__arr__up8').removeClass('index__arr__down--display');
    $('.sup8__data').removeClass('sup8__data--display');
    arrow8 = false;
  }
});

$('.index__arr__down9').click(function() {
  if (!arrow9) {
    $('.index__arr__down9').addClass('index__arr__down--hide');
    $('.index__arr__up9').addClass('index__arr__down--display');
    $('.sup9__data').addClass('sup9__data--display');
    arrow9 = true;
  }
});

$('.index__arr__up9').click(function() {
  if (arrow9) {
    $('.index__arr__down9').removeClass('index__arr__down--hide');
    $('.index__arr__up9').removeClass('index__arr__down--display');
    $('.sup9__data').removeClass('sup9__data--display');
    arrow9 = false;
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
