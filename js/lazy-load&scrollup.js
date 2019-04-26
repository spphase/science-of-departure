document.addEventListener("DOMContentLoaded",function () { 
	$(".loading").css('display','none');
	$('nav,#banner,#center,#position,#goals,#speedup,#aboutus').css('display','block')
}); 
// 图片懒加载
    function throttle(fn, delay, atleast) {
	    var timeout = null,
		startTime = new Date();
	    return function() {
		var curTime = new Date();
		clearTimeout(timeout);
		if(curTime - startTime >= atleast) {
		    fn();
		    startTime = curTime;
		}else {
		    timeout = setTimeout(fn, delay);
		}
	    }
	}
	function lazyload() {
	    var images = document.getElementsByTagName('img');
	    var len    = images.length;
	    var n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历		
	    return function() {
		var seeHeight = document.documentElement.clientHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		for(var i = n; i < len; i++) {
		    if(images[i].offsetTop < seeHeight + scrollTop) {
		        if(images[i].getAttribute('src') === 'images/loading.gif') {
			     images[i].src = images[i].getAttribute('data-src');
		        }
			n = n + 1;
		     }
		}
	    }
	}
	var loadImages = lazyload();
	loadImages();          //初始化首页的页面图片
	window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);


// =====返回顶部=======================================
	$(window).scroll(
		function()
		{
			if ($(window).scrollTop() <= 50) {
			  $(".turnback").css('display','none');
			  $('.navbar-fixed-top').css('height','7vh').css('background-image','#667eea00');
			  
		  }
		  else if ($(window).scrollTop() > 200) {
			  $(".turnback").fadeIn();
			  $('.navbar-fixed-top').css('background-image','linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
		  }
	   });

	$(".turnback").click(function()
	{
		$("html,body").animate({scrollTop:0},500);
		$(this).css('display','none');
	});

	// ==============返回顶部结束==================

	// $("#nav .public").on('click','li',function(a){
	// 	var target = a.target;
	// 	var id = $(target).data("to");
	// 	$("html,body").animate({scrollTop:$('#'+id).offset().top},600);
	// })

// 工具提示
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	  })
	  
	  $(function () {
		$('[data-toggle="popover"]').popover()
	  })