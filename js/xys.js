window.onload = function () {
    // nar_var中的效果
    // console.log($('.left_menu_icon>li:nth-child(2)').css)
    var click_num = 1
    // console.log(click_num)
    $('.left_menu_icon').on('click', function () {
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
    //index 主体的页面效果
    $('.frame2').hover(function () {
        var t2 = $(this).parent().parent().children('span')
        var t3 = $(this).children('.frame_img2').children()
        console.log(t3.html())
        t3.css('transform','scale(1.2,1.2)')
        t3.css('filter','grayscale(70%)')
        // t3.css('transform','translatey(25px)')
        // t3.css('transform','translatex(1px)')
        // $(this).children('.frame_img2').css('transform:translateX','(10px)')
        // console.log($(this).children('.frame_img2').has('img').html())
        // $("img", this).css('transform','translatex(50px)')
        // console.log($(this).parent().parent().children('span').text());
        t2.css('color','red')
        t2.css('fontSize','35px')
        // t2.css("transform", "translatex(50px)")

    }, function () {
        var t2 = $(this).parent().parent().children('span')
        var t3 = $(this).children('.frame_img2').children()
        t2.css('color','white')
        t2.css('fontSize','25px')
        // t2.css("transform", "translatex(0px)")
        t3.css('transform','scale(1,1)')
        t3.css('filter','grayscale(0%)')
    })
}