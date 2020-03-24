window.onload = outline;
function outline (){
　　var tgt = function (){ this.blur() };
　　for (var i = 0; i < document.links.length; i++)
　　document.links[i].onfocus = tgt;}

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 700;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


$(function() {
$("#area").waypoint({
handler: function(direction) {
          
    if (direction == 'down') { //スクロールが下方の場合実行
    
        $("nav").addClass('scroll');
        $("nav.scroll").hide().slideDown(300);
    
    }else if(direction == 'up'){　//スクロールが上方の場合実行
    
        $("nav.scroll").slideUp(200,function(){
            $("nav").removeClass('scroll').fadeIn(300);
        });
 
    }// if end
 
}
});
});


$(document).ready(function() {
	$('[data-fancybox]').fancybox({
		toolbar  : false, // ツールバーの非表示
		iframe : { // iframe 関連の処理 
			preload : false //iframeのプリロードをしない
		}
	});
});


$(function () {
        $('.long').jscroll({
          autoTrigger: false, 
          nextSelector: 'a.next',
        });
      });