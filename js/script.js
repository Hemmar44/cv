$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();
	var timeout = null;
	var doAnimation = null
	
	
	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		$(this).find("span").toggleClass("hide");
		oneMouseover();
	});
	
	
	$(document).on('mousemove', function() {
		clearInterval(timeout);
		timeout = setInterval(enlarge , 15000);
	});
	
	var timer1 = null;
	var timer2 = null;
	$("#print").on("click", function(){
		$("body").removeClass("start");
		$("main").css(
							{"width":"100%", 
							  "margin-top": "0", 
							  "box-shadow" : "none"});
		$(".bg").css("background-color", "white");
		$("p").css({"color": "black", "margin-left":"15px"});
		$("span > .demo-icon , strong").css("color", "#516CCC");
		$("h4 > span").hide();
		$("ul > li > ul > li > ul").show();
		$("#back").hide();
		$("main section:last-child > header > p").css("color","#899299");
		timer1 = setTimeout(function() {
		$("#back").show();
		}, 15000);
		var self = $(this);
		self.hide();
		timer2 = setTimeout(function() {
		$(self).show();
		}, 15000);
		
	})
	
	$("#back").on("click", function() {
		$("main").css({
								"width":"90%", 
								"margin-top": "10px", 
								"box-shadow": "1px 1px 0.1px gray, -1px -1px .1px gray"});
		$(".bg").css("background-color", "#899299");
		$("p").css({"color": "white", "margin":"0 auto 5px auto"});
		$("span > .demo-icon , strong").css("color", "white");
		$("h4 span:first-child").removeClass("hide").show();
		$("h4 span:last-child").addClass("hide").attr("style","");
		$("ul > li > ul > li > ul").hide();
		$(this).hide();
		$("#print").show();
		clearTimeout(timer1);
		clearTimeout(timer2);
		
		
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
				.animate({"font-size":"108%"}, 500)
				.animate({"font-size":"100%"}, 500);
									
		}
	
		function enlarge() {
			$(".knowledge").each(function(i){
			var t = $(this);
			setTimeout(function(){ doSomething(t); }, (i+1) * 200);
			});
		}
	
		function returnFalse() {
			return false;
		}

		
		
	
});