var isClick = false;
$('.share').click(function(){
    if (!isClick) {
        $('.share_icons').addClass('share_icons_display');
        isClick = true;
    }else{
        $('.share_icons').removeClass('share_icons_display');
        isClick = false;
    }
});


/*$('.share').mouseleave(function(){
  $('share_icons').removeClass('share_icons_display');
});*/
