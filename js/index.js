$(function(){
	/*nav宽度设置 header宽高*/
	function resetNavHeight (){
		var $nav = $('#nav');
		var $headerUl = $('#header ul');
		var $lis = $headerUl.find('li');
		var $imgs = $headerUl.find('img');
		var $windowWidth = $(window).width()
		var $useHeight = $windowWidth*0.38;
		$nav.width($windowWidth);
		$headerUl.width($windowWidth);
		$lis.width($windowWidth);
		$imgs.width($windowWidth);
		$headerUl.height($useHeight);
		$lis.height($useHeight);
		$imgs.height($useHeight);
	}
	resetNavHeight();
	window.onresize = function(){
		resetNavHeight();
	};
	/*nav英文span设置宽度*/
	(function (){
		var $nav = $('#nav');
		var $spans = $('#nav li span');
		$spans.each(function(){
			$(this).width($(this).parent().width()+40);
		});
	})();
	/*首页logo跳转*/
	(function(){
		var $imgBtn = $('#nav .imgBtn');
		$imgBtn.on('click',function(){
			window.location.href = './index.html';
		});
	})();
});