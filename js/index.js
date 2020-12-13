window.onload=function()
{
    // 导航栏的下拉div
    $('#down_app').hover(function(){
        $(".app").stop(true, false).slideDown(200);
    },function(){
        $(".app").stop(true, false).slideUp(200);
    })
    $('.shopping_right').hover(function(){
        $(".shopping_div").stop(true, false).slideDown(200);
        $('.shopping_a').css('background','white')
        $('.shopping_a').css('color','tomato')
    },function(){
        $(".shopping_div").stop(true, false).slideUp(200);
        $('.shopping_a').css('background','#424242')
        $('.shopping_a').css('color','#b0b0b0')
    })
        // H1 LOGO的动态效果
    $('.h1_logo').hover(function(){
         $('.h1_home').stop(true, false).animate({
            left: '0px'
        },150)
        $('.h1_logo_left').stop(true, false).animate({
            left:"55px"
        },150)
        
    },function(){
        $('.h1_home').stop(true, false).animate({
            left: '-55px'
        },150)
        $('.h1_logo_left').stop(true, false).animate({
            left:"0px"
        },150)
    })
    // 搜索框变色
    $('.submit').hover(function(){
        $('.submit').css('background','#FF6700')
        $('.submit>i').css('color',"white")
    },function(){
        $('.submit').css('background','white')
        $('.submit>i').css('color',"#616161")
    })
    // header弹出层
    $('.list_eject').hover(function(){
        $('.header_eject').slideDown(300)
    },function(){
        
    })
    $('.nav_list').stop(true, false).hover(function(){
        
    },function(){
        $('.header_eject').stop(true, false).slideUp(300)
    })
    // 轮播左侧导航栏二级菜单
    $('.header_left_ul a').hover(function(){
        $('.header_eject_two').stop(true, false).fadeIn(200)
    },function(){
        $('.header_eject_two').stop(true, false).fadeOut(200)
    })
    // 工具类下载app弹出
    $('#app_active').hover(function(){
        $('.app2').stop(true,false).fadeToggle(400)
    },function(){
        $('.app2').stop(true,false).fadeToggle(400)
    })

    //cenent_btn上下切换 功能
    var btn1 = $('#btn1')
    var btn2 = $('#btn2')
    var btn3 = $('#btn3')
    var btn4 = $('#btn4')
    
    function btn(obj,num)
    {
        obj.on('click',function(){
            obj.off('click')
            $('.row_li').stop(false).animate({
                top: num +'px'
            },300)
            var dsq = setInterval(function(){
                obj.on('click',function(){
                    obj.off('click')
                    $('.row_li').stop(false).animate({
                        top: num +'px'
                    },300)
                })
            },1000)
        })
    }
    btn(btn1,-340)
    btn(btn2,0)
    
    //定义的btn_li2的移动函数
    function btn_li2(obj,num,sd)
    {
        obj.hover(function(){
            $('.row_li2').stop(false).animate({
                top: num+"px"
            },sd)
        },function(){
            
        })
    }

    btn_li2(btn3,-628,500)
    btn_li2(btn4,0,500)

    //移入悬浮div
    $('.row_li2').hover(function(){
        var top = $(this).css('top')
        var num = parseInt(top)
        console.log(num)
        if(num == -628 )
        {
            $(this).stop(false).animate({
                top:'-635px',
            },300)
        }
        else if(num == 0){
            $(this).stop(false).animate({
                top:'3px',
            },300)
        }
        console.log($(this).css('top'))
        $(this).css('box-shadow',' 0px 0px 10px rgba(0, 0, 0, .2)')
    },function(){
        var top = $('.row_li2').css('top')
        var num = parseInt(top)
        console.log(num)
        if(num == -628 )
        {
            $(this).stop(false).animate({
                top:'-628px',
            },300)
        }
        else if( num == 0 )
        {
            $(this).stop(false).animate({
                top:'0px',
            },300)
        }else if( num == 3 )
        {
            $(this).stop(false).animate({
                top:'0px',
            },300)
        }
        $(this).css('box-shadow','')
        console.log(num)
    })

    //智能生活div移入的效果
        $('.row_li3').hover(function(){
            $(this).stop(false).animate({
                top:'-3px',
            },300)
            $(this).css('box-shadow',' 0px 0px 10px rgba(0, 0, 0, .2)')
        },function(){
            $(this).stop(false).animate({
                top:'0px',
            },300)
            $(this).css('box-shadow','')
        })

        $('.row_li3_last').hover(function(){
            $(this).stop(false).animate({
                top:'-3px',
            },300)
            $(this).css('box-shadow',' 0px 0px 10px rgba(0, 0, 0, .2)')
        },function(){
            $(this).stop(false).animate({
                top:'0px',
            },300)
            $(this).css('box-shadow','')
        })

    //当前时间的效果
    var time_hour = $('#time_hour')     // hour:  小时
    var time_branch = $('#time_branch') // branch: 分
    var time_second = $('#time_second') // second: 秒


    // var myDate = new Date()

    //     time_hour = myDate.getHours()
    //     time_branch = myDate.getMinutes()
    //     time_second = myDate.getSeconds()

    //开启定时器 刷新页面时间
    var timer = setInterval(function(){
        var myDate = new Date()
        time_hour = myDate.getHours()
        time_branch = myDate.getMinutes()
        time_second = myDate.getSeconds()
        if( time_branch<9){
            $('#time_branch').html('<span id="time_hour">'+0+time_branch+'</span>')
        }else{
            $('#time_branch').html('<span id="time_hour">'+time_branch+'</span>')
        }
        if(time_second<9){
            $('#time_second').html('<span id="time_hour">'+0+time_second+'</span>')
        }else{
            $('#time_second').html('<span id="time_hour">'+time_second+'</span>')
        }
        $('#time_hour').html('<span id="time_hour">'+time_hour+'</span>')
        
        // console.log(time_hour)
    },1000)

    // console.log(time_hour)


    // var des = comingdate.getTime() - now.getTime();
    // des/(1000 * 60 * 60 * 24));  天数
    // 1000 * 60 * 60 *24) / (1000 * 60 * 60));小时
    // 1000 * 60 *60) / (1000 * 60)); 分 
    // 1000 * 60) / 1000); 秒

    // myDate.getYear(); //获取当前年份(2位)  
    // myDate.getFullYear(); //获取完整的年份(4位,1970-????)  
    // myDate.getMonth(); //获取当前月份(0-11,0代表1月) 所以获取当前月份是 myDate.getMonth()+1;   
    // myDate.getDate(); //获取当前日(1-31)  
    // myDate.getDay(); //获取当前星期X(0-6,0代表星期天)  
    // myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  
    // myDate.getHours(); //获取当前小时数(0-23)  
    // myDate.getMinutes(); //获取当前分钟数(0-59)  
    // myDate.getSeconds(); //获取当前秒数(0-59)  
    // myDate.getMilliseconds(); //获取当前毫秒数(0-999)  
    // myDate.toLocaleDateString(); //获取当前日期  
    // console.log(myDate.getDate())
}
//还有定时器没做 定时切换图片