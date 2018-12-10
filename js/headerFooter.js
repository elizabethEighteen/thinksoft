/*nav英文span设置宽度*/
	(function (){
		alert(1);
		var $nav = $('#nav');
		var $spans = $('#nav li span');
		$spans.each(function(){
			$(this).width($(this).parent().width()+40);
		});
	})();
	/*nav border-bottom宽度*/
	function resizeWidth (){
		
		var $nav = $('#nav');
		$nav.width($(window).width());
	}
	resizeWidth();
	window.onresize = function(){
		resizeWidth();
	};
	/*中间内容高度*/
	
	(function(){
		var $con = $('#content');
		var $lis = $con.find('li');
		var $liHeight = $lis.height()+20;
		$con.height($liHeight*Math.ceil((($lis.length)/4)));

	})();
/*footer*/
    (function(){
    	var blackContainer = document.createElement('div');
    	blackContainer.innerHTML = `<div id="footer">
			<p class="chineseOne">思软科技，让项目变得高质量却很简单</p>
			<p class="englishOne">ThinkSoft Technology, make the project more high quality is very simple</p>
			<p class="chineseTwo">思软科技</p>
			<p class="englishTwo">ThinkSoft Introduction</p>
			<p class="chineseThree">平台战略合作伙伴</p>
			<p class="englishThree">Platform strategic partner</p>
			<p class="chineseFour">联系与合作</p>
			<p class="englishFour">Contact and cooperation</p>
			<ul class="ul1">
				<li><a href="javasript:">关于我们</a></li>
				<li><a href="javasript:">新闻资讯</a></li>
			</ul>
			<ul class="ul2">
				<li><a href="https://shop.zbj.com/8427423/">猪八戒网</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">天蓬网</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">汇桔网</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">一品威客</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">云沃客</a></li>
			</ul>
			<ul class="ul3">
				<li><a href="https://shop.zbj.com/8427423/">联系我们</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">联系客服</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">新浪微博@思软科技</a></li>
				<li><a href="https://shop.tianpeng.com/17766073/">微信公众号</a></li>
			</ul>
		</div>`
		blackContainer.className = 'blackContainer';
		document.body.appendChild(blackContainer);
    })();