window.onload=function(){
    var click_num = 1
    // console.log(click_num)
    $('.left_menu_icon').on('click', function(){
        console.log(click_num)
        if (click_num == 2) {
            $('.left_menu_icon>li').css('left', '');
            $('.left_menu_icon>li:nth-child(1)').css('transform', '');
            $('.left_menu_icon>li:nth-child(2)').css('display', 'block');
            $('.left_menu_icon>li:nth-child(3)').css('transform', '');
            $('.eject_nav').stop(true, false).animate({
                left: '-1000px'
            }, 300).css('display', 'block')
            click_num = 1
        } else if (click_num == 1) {
            $('.left_menu_icon>li').css('left', '5px');
            $('.left_menu_icon>li:nth-child(1)').css('transform', 'rotate(50deg)');
            $('.left_menu_icon>li:nth-child(2)').css('display', 'none');
            $('.left_menu_icon>li:nth-child(3)').css('transform', 'rotate(-50deg)');
            click_num++
            $('.eject_nav').stop(true, false).css('left', '-200px').css('display', 'block').animate({
                left: '0px'
            }, 300)
            // $('.eject_nav').stop(true,false).slideToggle(300);
        }
    })

}