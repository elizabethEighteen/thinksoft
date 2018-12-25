$(function(){
	(function() {
         setRem();
         window.addEventListener('orientation' in window ? "deviceorientation":"resize",setRem);
         function setRem(){
            var html = document.documentElement;
            var htmlWidth = html.getBoundingClientRect().width;
            html.style.fontSize = htmlWidth / 15 + "px";
         }
})();

	
	
	/*首页logo跳转*/
	(function(){
		var $imgBtn = $('#nav .imgBtn');
		$imgBtn.on('click',function(){
			window.location.href = './index.html';
		});
	})();



});