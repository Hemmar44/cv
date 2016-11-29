$(function(){
	
	var secPicHeight = $("main").find("section").first().height();
	var secNameHeight = $("main").find("section").last().height();
	
	//var animate = doSomething();
	
	
	//var timer = setInterval(doSomething, 2000)
	//oneMouseover();
	//doSomething();
	//console.log(timer);
	
	$(".knowledge").on("click", function(){
		$(this).parent("li").find("ul").slideToggle();
		$(this).find("span").toggleClass("hide");
		oneMouseover();
		//clearInterval(timer);
	
	});
	
	
	function oneMouseover() {
		$("body").one("mouseover",function(){
			secPicHeight = $("main").find("section").first().height();
			secNameHeight = $("main").find("section").last().height();
			//$(".fonts").removeClass("red");
			//timer = setTimeout(empty,0);
			console.log("trig")
			if(secPicHeight>=secNameHeight) {
			$("main").css("background-color","white");
			}
			else if(secPicHeight<secNameHeight){
			$("main").css("background-color","#899299");
			}
		});
	}
	
		function doSomething() {
		$(".icon-lightbulb")
						.animate({"font-size":"120%"}, 1000)
						.animate({"font-size":"100%"}, 1000);
									
	}
	
	var timeout = null;

		$(document).on('mousemove', function() {
    
		clearInterval(timeout);
	
		timeout = setInterval(doSomething , 3000);
});
	//$(".icon-lightbulb").each(function setAnim(){
    //$(this)
          //  .animate({"font-size":"120%"}, 1000).
           // .animate({"font-size":"100%"}, 1000)
           // ,setAnim);
	
	
	
});