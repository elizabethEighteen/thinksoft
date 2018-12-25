$(function(){
	
	/*渲染li*/
	(function(){	
		var arr = [25,26,27,28,29,57,58,59,60]
		var oUl = $('#content ul')[0];
		for( var i=0; i<56; i++) {
			var li = document.createElement('li');
			if (i == 24 || i == 25 ||i == 26 ||i == 27 ||i == 28) {
				li.innerHTML = `
				
					<img src="../img/${i+1}.png" alt="">
					<p class="title">砼友砼伴 砼友砼伴</p>
					<div class="lineH"></div>
					<p class="time">项目周期：40工作日</p>
					<p class="monney">项目金额：￥40,000元</p>
				`
			}else {
				li.innerHTML = `
				
					<img src="../img/${i+1}.jpg" alt="">
					<p class="title">砼友砼伴 砼友砼伴</p>
					<div class="lineH"></div>
					<p class="time">项目周期：40工作日</p>
					<p class="monney">项目金额：￥40,000元</p>
				`
			}
			oUl.appendChild(li);
		}

		
	})();
	
});