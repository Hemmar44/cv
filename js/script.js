$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();

	var timer = setTimeout(startAnim, 1000);
	
	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		$(this).find("span").toggleClass("hide");
		oneMouseover();
	});
	

	
	function oneMouseover() {
		$("body").one("mouseover",function(){
			secPicHeight = $("main").find("section").first().height();
			secNameHeight = $("main").find("section").last().height();
			console.log("trig")
			if(secPicHeight>=secNameHeight) {
			$("main").css("background-color","white");
			}
			else if(secPicHeight<secNameHeight){
			$("main").css("background-color","#899299");
			}
		});
		}
	
		function doSomething(loc) {
		$(loc)
				.animate({"font-size":"110%"}, 500)
				.animate({"font-size":"100%"}, 500);
									
		}
	
		function enlarge() {
			$(".knowledge").each(function(i){
			var t = $(this);
			setTimeout(function(){ doSomething(t); }, (i+1) * 200);
			});
		}
		
		function startAnim() {
		var timeout = null;

			$(document).on('mousemove', function() {
    
			clearInterval(timeout);
	
			timeout = setInterval(enlarge , 3000);
		});
		}
	
	
});