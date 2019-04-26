  // 首页轮播图
    var c = 0;
    var x = $("#banner .slidepicture li").size();
    //自动播放
    var timer = setInterval(function slide(){
	c++;
	c = c==x?0:c;
    $("#banner .slidepicture li").eq(c).fadeIn(300).siblings('li').fadeOut(200);
    // $("#banner .theme img,.theme span").data("aos","zoom-in-out");//添加data-aos属性
    $("#banner .circle>li span").eq(c).addClass('timer').delay(300).parent("li").siblings("li").children('span').removeClass("timer");  
    },3000)
    //圆点控制
    $("#banner .circle li").click(function(){

        list = $(this).index();
        // 第list个li显示
        $("#banner .slidepicture>li").eq(list).fadeIn(200).siblings('li').fadeOut(200);
        $("#banner .circle li>span").eq(list).addClass('timer').parent("li").siblings("li").children('span').removeClass("timer");
       
    })
    // 轮播图文字浮入
    // function textfloat(){
    //     move("#banner .theme").set('top','40%').scale(1.2).end();
    // }
    // $("#banner .slidepicture li").eq(c).textfloat();
    // textfloat()

// ==================================================================页面内跳转--------------------------------------------
    // var slide = function slide(){
	// 	var id = $(this).data("to");
    //     $("html,body").animate({scrollTop:$('#'+id).offset().position().top},600);
    // }
    // $('#home').on('click','li',function(){
    //     var id = $(this).data("to");
    //     var boxtop = $('#'+id).position().top;
    //     alert(boxtop);
    //     $("html,body").animate({scrollTop:$('#'+id).offset().boxtop},600);
    // })

    // $(".button-fa").click(function(){
    //     var id = $(this).data("to");
    //     $("html,body").animate({scrollTop:$('#'+id).offset().position().top},600);
    // })

// ================第一部分======================
    slider.init();




// ==============星辰大海开始=================================
$('.choose').click(function () {
    $('.choose').addClass('active');
    $('.choose > .icon').addClass('active');
    $('.pay').removeClass('active');
    $('.wrap').removeClass('active');
    $('.ship').removeClass('active');
    $('.pay > .icon').removeClass('active');
    $('.wrap > .icon').removeClass('active');
    $('.ship > .icon').removeClass('active');
    $('#line').addClass('one');
    $('#line').removeClass('two');
    $('#line').removeClass('three');
    $('#line').removeClass('four');
});
$('.pay').click(function () {
    $('.pay').addClass('active');
    $('.pay > .icon').addClass('active');
    $('.choose').removeClass('active');
    $('.wrap').removeClass('active');
    $('.ship').removeClass('active');
    $('.choose > .icon').removeClass('active');
    $('.wrap > .icon').removeClass('active');
    $('.ship > .icon').removeClass('active');
    $('#line').addClass('two');
    $('#line').removeClass('one');
    $('#line').removeClass('three');
    $('#line').removeClass('four');
});
$('.wrap').click(function () {
    $('.wrap').addClass('active');
    $('.wrap > .icon').addClass('active');
    $('.pay').removeClass('active');
    $('.choose').removeClass('active');
    $('.ship').removeClass('active');
    $('.pay > .icon').removeClass('active');
    $('.choose > .icon').removeClass('active');
    $('.ship > .icon').removeClass('active');
    $('#line').addClass('three');
    $('#line').removeClass('two');
    $('#line').removeClass('one');
    $('#line').removeClass('four');
});
$('.ship').click(function () {
    $('.ship').addClass('active');
    $('.ship > .icon').addClass('active');
    $('.pay').removeClass('active');
    $('.wrap').removeClass('active');
    $('.choose').removeClass('active');
    $('.pay > .icon').removeClass('active');
    $('.wrap > .icon').removeClass('active');
    $('.choose > .icon').removeClass('active');
    $('#line').addClass('four');
    $('#line').removeClass('two');
    $('#line').removeClass('three');
    $('#line').removeClass('one');
});
$('.choose').click(function () {
    $('.first').addClass('active');
    $('.second').removeClass('active');
    $('.third').removeClass('active');
    $('.fourth').removeClass('active');
});
$('.pay').click(function () {
    $('.first').removeClass('active');
    $('.second').addClass('active');
    $('.third').removeClass('active');
    $('.fourth').removeClass('active');
});
$('.wrap').click(function () {
    $('.first').removeClass('active');
    $('.second').removeClass('active');
    $('.third').addClass('active');
    $('.fourth').removeClass('active');
});
$('.ship').click(function () {
    $('.first').removeClass('active');
    $('.second').removeClass('active');
    $('.third').removeClass('active');
    $('.fourth').addClass('active');
});

// ========================星辰大海结束=======================

// $(function() {
//     $(window).scroll(function(){
//       var scrolled = $(this).scrollTop();
//       $('#aboutus').css('top',(0-(scrolled*.75))+'px');
//       $('#aboutus').css('top',(0-(scrolled*.5))+'px');
//       $('#foot').css('top',(0-(scrolled*.25))+'px');
//     });
//   });

//背景音乐播放脚本===================================
            //  //加载背景音乐，并自动播放
            //  $(function(){

            //     var myAudio = $("#bg_music audio")[0];
            //     $("#bg_music_btn").click(function(){
            //         if(myAudio.paused) {
            //             play();
            //         }

            //         else{
            //             pause();
            //         }
            //         })
            //     })
    $("#bg_music").append('<audio id="m_bg_music" src="fonts/when-The-Light-Comes.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>')
    $('#bg_music_btn').click(function(){
        var state = $('#bg_music_btn').data('state');
          if(state == '1')//
          {
              $(this).data('state','0');
              $("#music_btn").removeClass('Rotation');
              $("#m_bg_music").remove();
          }
          else if(state == '0')
          {
              $(this).data('state','1');
              $('#m_bg_music').remove();
              $("#music_btn").addClass('Rotation');
              $('#bg_music').append('<audio id="m_bg_music" src="fonts/when-The-Light-Comes.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>');
            }
      });

 
 $('#modal1 #modal2 #modal3').modal({
    keyboard: false
    })


    // $("#translate").click(function(){
    //     changeLanguage()
    // })
//======================================================

AOS.init({
    // offset: 200,
    // duration: 400,
    // easing: 'ease-in-sine',
})
